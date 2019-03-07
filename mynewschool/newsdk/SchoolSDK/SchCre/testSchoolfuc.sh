#!/bin/bash
echo
echo "POST request Create Student  ..."
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
  "chaincodeName":"SchCre",
  "functionName":"addStudent",
  "args":["2014014080","540928898@qq.com","信息科学与技术学院","自动化"]
}'
echo
echo
echo "POST request Create Admin  ..."
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
  "chaincodeName":"SchCre",
  "functionName":"addAdmin",
   "args":["2014014147","老大","老大"]
}'
echo
echo
echo "POST request MovePoint  ..."
echo
echo
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
!
}

echo
echo
echo "Query"
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
        "chaincodeName":"SchCre",
        "functionName":"Query",
        "args":["2014014084"]
}')

echo "Query ++ $QueryResult"
echo
echo
echo "QuerHistoryList"
echo
echo
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
