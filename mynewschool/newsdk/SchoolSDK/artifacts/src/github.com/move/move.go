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
	//"bytes"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
	//"strings"
)

var logger = shim.NewLogger("blockchainTrain")

// SimpleChaincode example simple Chaincode implementation
type SimpleChaincode struct {
}

//交易记录
type Transaction struct {
	Transaction2  string `json:"Transaction2"`  // Transaction Number
	AdminID       string `json:"AdminID"`       // 数字资产ID
	StudentID     string `json:"StudentID"`     // 管理员ID
	AdminPassword string `json:"AdminPassword"` //学生ID
	Money         string `json:"Money"`         // 点数
	Time          string `json:"Time"`          //交易时间
	message       string `json:"message"`       //Message
}

//====================================================================================
//学生角色
//====================================================================================
type Student struct {
	Xuehao   string `json:"xuehao"`
	Name     string `json:"name"`
	School   string `json:"school"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Money    string `json:"money"`
}

//====================================================================================
//部门角色
//====================================================================================
type Admin struct {
	Gonghao  string `json:"gonghao"`
	Name     string `json:"name"`
	School   string `json:"school"`
	Password string `json:"password"`
	Partment string `json:"partment"`
}

func (t *SimpleChaincode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	logger.Info("########### blockchainTrain Init ###########")
	return shim.Success(nil)
}

func (t *SimpleChaincode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	function, args := stub.GetFunctionAndParameters()
	if function == "movePoint" {
		return t.movePoint(stub, args)
	}
	return shim.Error("Received unknown function invocation")
}
func (t *SimpleChaincode) movePoint(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 6 {
		return shim.Error("{\"Result\":\"fail\",\"Message\":\"Incorrect number of arguments. Expecting 6 \"}")
	}

	var transaction Transaction
	var err error
	transaction.Transaction2 = args[0]
	transaction.AdminID = args[1]
	transaction.StudentID = args[2]
	transaction.AdminPassword = args[3]
	transaction.Money = args[4]
	transaction.Time = args[5]
	transaction.message = args[6]
	accountPassword := args[3]

	// ==== Check if admin exists ====
	bytesAdmin, err := stub.GetState(transaction.AdminID)
	if err != nil {
		return shim.Error("{\"Result\":\"fail\",\"Message\":\"Failed to get Admin \"}")
	}
	if bytesAdmin == nil {
		return shim.Error("{\"Result\":\"fail\",\"Message\":\"This Admin not exists \"}")
	}
	var admin Admin

	err = json.Unmarshal(bytesAdmin, &admin)
	if err != nil {
		return shim.Error("{\"Result\":\"fail\",\"Message\":\"Fail to get Admin Account \"}")
	}
	if admin.Password == accountPassword {
		// ==== Check if Student exists ====
		bytesStudent, err := stub.GetState(transaction.StudentID)
		if err != nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Fail to get Student\"}")
		}
		if bytesStudent == nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Fail to get Student Account\"}")
		}
		var student Student

		err = json.Unmarshal(bytesStudent, &student)
		if err != nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Fail to get Account \"" + err.Error() + "\"}")
		}
		// ==== Check if Point is a integer ====

		// ==== Move Action ====
		var s int
		s1, err := strconv.Atoi(student.Money)
		s2, err1 := strconv.Atoi(transaction.Money)
		if err != nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Not number\"}")
		}
		if err1 != nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Not number\"}")
		}
		s = s1 + s2
		student.Money = strconv.Itoa(s) // must change into int????

		DigitalStudentBytes, _ := json.Marshal(student)
		err = stub.PutState(transaction.StudentID, []byte(DigitalStudentBytes))
		if err != nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Fail to get Student ID\"" + err.Error() + "\"}")
		}
		//return shim.Success([]byte("Success move point"))

		// ======Creat train Message=========

		DigitaltransactionBytes, _ := json.Marshal(transaction)
		err = stub.PutState(transaction.Transaction2, []byte(DigitaltransactionBytes))
		if err != nil {
			return shim.Error("{\"Result\":\"fail\",\"Message\":\"Fail to creat Transaction Message\"}")
		}
		return shim.Success([]byte("{\"Result\":\"success\",\"Message\":\"Success to creat Transaction Message\"}"))
	}

	return shim.Error("{\"Result\":\"fail\",\"Message\":\"Wrong Password\"}")

}

func main() {
	err := shim.Start(new(SimpleChaincode))
	if err != nil {
		fmt.Printf("Error starting Simple chaincode: %s", err)
	}
}
