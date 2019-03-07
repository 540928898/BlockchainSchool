#!/bin/bash
echo "=====================BEGIN TO TEST==================="
echo
echo
echo "           We will test all function !!"
echo
echo
echo "=====================BEGIN TO TEST==================="





echo
echo "POST request Create Student  ..."
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"CreateStudent",
  "args":["2014014080","GuPeng","123456","北京化工大学","540928898@qq.com","0"]
}'
echo "POST request Create Admin  ..."
echo
sleep 5
craetstudent=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"CreateAdmin",
   "args":["2014014147","Pengu","123456","BUCT","志愿总队"]
}')
echo
echo "Creat admin susscess Result: $craetstudent"


echo
echo
sleep 5
craetstudent=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"CreateAdmin",
   "args":["2014014148","XueXue","234567","BUCT","学生会"]
}')



echo
echo "Creat admin susscess Result: $craetstudent"
echo "POST request StudentUpdatePassword  ..."
echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"StudentUpdatePassword",
   "args":["2014014080","123456","234567"]
}'
echo



echo "POST request AdminUpdatePassword  ..."
echo
echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"AdminUpdatePassword",
   "args":["2014014147","123456","234567"]
}'
echo


echo
echo
echo "QueryadminAccount"
echo
echo
sleep 5


QueryadminAccount=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"QueryAccount",
        "args":["2014014147"]
}')

echo "QueryadminAccount ++ $QueryadminAccount"
echo
echo

sleep 5

QueryadminAccount=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"QueryAccount",
        "args":["2014014148"]
}')

echo "QueryadminAccount ++ $QueryadminAccount"
echo
echo

sleep 5

QueryStudentResult=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"QueryAccount",
        "args":["2014014080"]
}')

echo "QueryStudentResult ++ $QueryStudentResult"
echo


echo
echo "POST request LoginStudent  ..."
echo
echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"loginStudent",
   "args":["2014014080","234567"]
}'
echo
echo
echo "POST request LoginAdmin  ..."
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"loginAdmin",
   "args":["2014014147","234567"]
}'
echo

echo "POST request movePoint  .. ."
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"movePoint",
  "args":["2014014147","2014014080","100","234567","\"partment\":\"学生会\",\"dengji\":\"一等奖\",\"neirong\":\"美国数学建模\",\"timeachieve\":\"2018/2/5\""]
}'
echo

#notExce(){}
echo
echo "POST request CreatCredit  .. ."
echo
echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"CreatCredit",
  "args":["000111220","2014014147","2014014080","100","2018/5/15","Guojiajingsai"]
}'
echo
echo "POST request QuerytrainsactionCredit  .. ."
echo

echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"QueryAccount",
  "args":["000111220"]
}'
echo
echo

echo
sleep 5

QueryStudentResult=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"QueryAccount",
        "args":["2014014080"]
}')
echo
echo
echo "QueryStudentResult ++ $QueryStudentResult"
echo
notExce(){
echo "POST request DeleteStudent  ..."
echo
echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"DeleteStudent",
   "args":["2014014080"]
}'
echo
echo
echo "POST request DeleteAdmin  ..."
echo
echo
sleep 5
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"account",
  "functionName":"DeleteAdmin",
   "args":["2014014147"]
}'
echo
echo

sleep 5
}
QueryResult=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"QueryAccount",
        "args":["2014014147"]
}')
echo
echo
echo "Query ++ $QueryResult"
echo
echo



QueryResult=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"QueryAccount",
        "args":["2014014080"]
}')


echo "Query ++ $QueryResult"
echo
echo "QuerHistoryList"
echo
echo
sleep 5
getHistoryForKey=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"account",
        "functionName":"getHistoryForKey",
        "args":["2014014080"]
}')

echo "sadadsdasq+++++++++++++$getHistoryForKey"

echo "=====================RESULT OF TEST==================="
echo
echo
echo "All function all good !!! The system will run successful!!!"
echo
echo
echo "=====================RESULT OF TEST==================="
sleep 5


notExce(){
:<<!
curl -s -X POST \
  http://localhost:5000/channels/chaincodes/invoke \
 -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"SchCre",
  "functionName":"movePoint",
   "args":["2014014147","2014014080","100"]
}'


sleep 5
QueryListResult=$(curl -s -X POST \
  http://localhost:5000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051","localhost:7056"],
        "chaincodeName":"SchCre",
        "functionName":"QueryHistoryList",
        "args":["2014014080"]
}')

echo "sadadsdasq+++++++++++++$QueryListResult"



!
}
