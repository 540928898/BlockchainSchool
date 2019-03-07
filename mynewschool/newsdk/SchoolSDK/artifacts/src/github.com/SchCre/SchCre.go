/*
Copyright IBM Corp. 2016 All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

		 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package main

import (
	"encoding/json"
	"fmt"
	"strconv"
	"bytes"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
	//"strings"
)

var logger = shim.NewLogger("blockchainTrain")

// SimpleChaincode example simple Chaincode implementation
type SimpleChaincode struct {
}
//学生信息
type StudentInf struct {
	Student2     string  `json:"Student2"`     //学生学生卡号
	Mailbox       string  `json:"Mailbox"`       //邮箱
	Institution   string  `json:"Institution"`   //学院
	Position      string  `json:"Position"`      //专业
	Point          int  `json:"Point"`          //资产
}

//管理员信息
type AdminInf struct {
	Admin2     string  `json:"Admin2"`         //管理员卡号
	Name        string  `json:"Name"`            //姓名
	Master      string  `json:"Master"`          //部门
}

//交易记录
//type Transaction struct {
//	ID           string `json:"id"` 	    // 数字资产ID
//	AdminID      string `json:"AdminID"`        // 管理员ID
//	StudentID    string `json:"StudentID"`      //学生ID
//	Point        string `json:"Point"`          // 点数
//	Time         string `json:"time"` 	    //交易时间
//}
//授予资产
type MoveInf struct {
	Admin2      string `json:"Admin2"`        // 管理员ID
	Student2    string `json:"Student2"`      //学生ID
	Point        int `json:"Point"`          // 点数
}


func (t *SimpleChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	logger.Info("########### blockchainTrain Init ###########")
	return shim.Success(nil)
}

func (t *SimpleChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
    function, args := stub.GetFunctionAndParameters()

	// Perform the execution

	// add learner to blockchain
	if function == "addStudent" {
		// Perform the execution
	    return t.addStudent(stub, args)
	}
	if function == "addAdmin" {
            return t.addAdmin(stub, args)
	}       
        if function == "movePoint"{
            return t.movePoint(stub,args)
        }
	if function == "Query"{
            return t.Query(stub,args)
        }
	if function == "QueryHistoryList"{
            return t.QueryHistoryList(stub,args)
        }
	//if function =="delete"{
	//    return t.delete(stub,args)
	//}
	return shim.Error("Received unknown function invocation")

}

//添加学生信息
func (t *SimpleChaincode) addStudent(stub shim.ChaincodeStubInterface, args []string) pb.Response {
    if len(args) != 4 {
	//return nil, errors.New("Incorrect number of arguments. ")
	return shim.Error("Incorrect number of arguments.")
   }
   var student StudentInf 
   student.Student2 = args[0]
   student.Mailbox = args[1]
   student.Institution = args[2]
   student.Position = args[3] 
   student.Point = 0 
   var err error 
   bytes, _ := json.Marshal(student) 
   TempSearch, err := stub.GetState(student.Student2) 
     
   if TempSearch != nil {
	//return nil, errors.New("This ID already exists")
 	return shim.Error("This ID already exists")
   }
   // Write the state back to the ledger
   err = stub.PutState(student.Student2, []byte(bytes))
   if err != nil {
	return shim.Error("Failed to get Name")
   }     
  return shim.Success(TempSearch)
}

//添加管理员信息
func (t *SimpleChaincode) addAdmin(stub shim.ChaincodeStubInterface, args []string) pb.Response {
    if len(args) != 3 {
	//return nil, errors.New("Incorrect number of arguments. ")
	return shim.Error("Incorrect number of arguments.")
   }
   var admin AdminInf
   admin.Admin2 = args[0]
   admin.Name = args[1]
   admin.Master = args[2]
   var err error
   bytes, _ := json.Marshal(admin)
   TempHashval, err := stub.GetState(admin.Admin2)
   if TempHashval != nil {
	//return nil, errors.New("This ID already exists")
 	return shim.Error("This ID already exists")
   }
   // Write the state back to the ledger
   err = stub.PutState(admin.Admin2,[]byte(bytes))
   if err != nil {
	
	return shim.Error("Failed to get state")
   }
   
  return shim.Success(TempHashval)
}

/*修改学员信息
func (t *SimpleChaincode) updateLearner(stub shim.ChaincodeStubInterface, args []string) pb.Response {
    if len(args) != 2 {
		//return nil, errors.New("Incorrect number of arguments. ")
		return shim.Error("Incorrect number of arguments in function update")
	}
	StudentID := args[0]
	Hashval := args[1]
	var err error
	HashvalTemp, errs := stub.GetState(StudentID)

	if errs != nil {
		//return nil, errors.New("list is not here")
		return shim.Error("list is not here")
	}
	if HashvalTemp == nil {
		//return nil, errors.New("Entity not found")
		return shim.Error("Entity not found")
	}

	err = stub.PutState(LearnerID, []byte(Hashval))
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success([]byte("Saved!"))
}
*/

/*授予学生资产

args:  部门ID |学生ID | 转移量
*/


func (t *SimpleChaincode) movePoint(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 3 {
		return shim.Error("Incorrect number of arguments. Expecting 3")
	}

	var transaction MoveInf
	var err error
	transaction.Admin2 = args[0]
	transaction.Student2 = args[1]
	transaction.Point,err = strconv.Atoi(args[2])
	
	// ==== Check if Seller exists ====
	bytesAdmin, err := stub.GetState(transaction.Admin2)
	if err != nil {
		return shim.Error("Failed to get Seller: " + err.Error())
	}
	if bytesAdmin == nil {
		return shim.Error("This Admin not exists: " )
	}
	// ==== Check if Student exists ====
        bytesStudent, err := stub.GetState(transaction.Student2)
	if err != nil {
		return shim.Error("Failed to get Student: " + err.Error())
	}
	if bytesStudent == nil {
		return shim.Error("This Student not exists: " )
	}	
	var digitalStudent StudentInf
	err = json.Unmarshal(bytesStudent, &digitalStudent)
	if err != nil {
		return shim.Error("Failed to get Student: " + err.Error())
	}
	// ==== Check if Point is a integer ====


	// ==== Move Action ====
	digitalStudent.Point=digitalStudent.Point+transaction.Point

	DigitalStudentBytes, _ := json.Marshal(digitalStudent)		
	err = stub.PutState(transaction.Student2, []byte(DigitalStudentBytes))
	if err != nil {
		return shim.Error(err.Error())
	}
	return shim.Success([]byte("成功授予资产"))
}

/*
查询

args:  ID
*/

func (t *SimpleChaincode) Query(stub shim.ChaincodeStubInterface, args []string) pb.Response {
    if len(args) != 1 {
	return shim.Error("Incorrect number of arguments infunction delete")
    }

    SearchID :=args[0]
//    keyIDTemp, errs := stub.GetState(SearchID)
//    if errs !=nil {
//        return shim.Error("list is not here")
//    }
//    if keyIDTemp == nil{
//        return shim.Error("Entity not found")
//    }

	Searchbytes, err := stub.GetState(SearchID)
	if err != nil {
		jsonResp := "{\"Error\":\"Failed to get state for " + SearchID + "\"}"
		return shim.Error(jsonResp)
	}

	if Searchbytes == nil {
		jsonResp := "{\"Error\":\"Nil role for " + SearchID + "\"}"
		return shim.Error(jsonResp)
	}          
    return shim.Success([]byte(Searchbytes))
}

/*
查询ID历史记录

args:  ID
*/

func (t *SimpleChaincode) QueryHistoryList(stub shim.ChaincodeStubInterface, args []string) pb.Response {
    if len(args) != 1 {
	return shim.Error("Incorrect number of arguments infunction delete")
    }

    key :=args[0]
//    keyIDTemp, errs := stub.GetState(SearchID)
//    if errs !=nil {
//        return shim.Error("list is not here")
//    }
//    if keyIDTemp == nil{
//        return shim.Error("Entity not found")
//    }

	it,err:= stub.GetHistoryForKey(key)
   if err!=nil{
      return shim.Error(err.Error())
   }
  // return shim.Success([]byte(it))
   var result,_= getHistoryListResult(it)
   return shim.Success(result)
}
func getHistoryListResult(resultsIterator shim.HistoryQueryIteratorInterface) ([]byte,error){

   defer resultsIterator.Close()
   // buffer is a JSON array containing QueryRecords
   var buffer bytes.Buffer
   buffer.WriteString("[")

   bArrayMemberAlreadyWritten := false
   for resultsIterator.HasNext() {
      queryResponse, err := resultsIterator.Next()
      if err != nil {
         return nil, err
      }
      // Add a comma before array members, suppress it for the first array member
      if bArrayMemberAlreadyWritten == true {
         buffer.WriteString(",")
      }
      item,_:= json.Marshal( queryResponse)
      buffer.Write(item)
      bArrayMemberAlreadyWritten = true
   }
   buffer.WriteString("]")
   fmt.Printf("queryResult:\n%s\n", buffer.String())
   return buffer.Bytes(), nil
}


/*删除记录*/
/*
func (t *SimpleChaincode) delete(stub shim.ChaincodeStubInterface, args []string) pb.Response {
    if len(args) != 1 {
	return shim.Error("Incorrect number of arguments infunction delete")
    }
    SearchID :=args[0]
    keyIDTemp, errs := stub.GetState(SearchID)
    if errs !=nil {
        return shim.Error("list is not here")
    }
    if keyIDTemp == nil{
        return shim.Error("ID not found")
    }
    err := stub.DelState(SearchID)
    if err != nil{
        return shim.Error("Fail to delete state")
    }
    return shim.Success([]byte("Deleted!"))
}*/

func main() {
	err := shim.Start(new(SimpleChaincode))
	if err != nil {
		fmt.Printf("Error starting Simple chaincode: %s", err)
	}
}
