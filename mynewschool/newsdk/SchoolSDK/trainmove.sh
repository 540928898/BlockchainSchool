#!/bin/bash
#
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

jq --version > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo "Please Install 'jq' https://stedolan.github.io/jq/ to execute this script"
  echo
  exit 1
fi
starttime=$(date +%s)
echo
sleep 5



echo "POST request Enroll on Org1  ..."
echo
ORG1_TOKEN=$(curl -s -X POST \
  http://localhost:5000/users \
  -H "content-type: application/x-www-form-urlencoded" \
  -d 'username=Jim&orgName=org1')
echo $ORG1_TOKEN
ORG1_TOKEN=$(echo $ORG1_TOKEN | jq ".token" | sed "s/\"//g")
echo
echo "ORG1 token is $ORG1_TOKEN"
echo
echo "POST request Enroll on Org2 ..."
echo
ORG2_TOKEN=$(curl -s -X POST \
  http://localhost:5000/users \
  -H "content-type: application/x-www-form-urlencoded" \
  -d 'username=Barry&orgName=org2')
echo $ORG2_TOKEN
ORG2_TOKEN=$(echo $ORG2_TOKEN | jq ".token" | sed "s/\"//g")
echo
echo "ORG2 token is $ORG2_TOKEN"
echo
echo
echo "POST request creat channel"


curl -s -X POST \
  http://localhost:5000/channels \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "channelConfigPath":"../artifacts/channel/mychannel.tx"
}'

echo
echo
sleep 1
echo "POST request Join channel on Org1"
echo
curl -s -X POST \
  http://localhost:5000/channels/peers \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "channelName":"mychannel",
  "peers": ["localhost:7051","localhost:7056"]
}'
echo
echo
sleep 1
echo "POST request Join channel on Org2"
echo
curl -s -X POST \
  http://localhost:5000/channels/peers \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Barry",
  "orgname":"org2",
  "channelName":"mychannel",
  "peers": ["localhost:8051","localhost:8056"]
}'
echo
echo
#notExce(){
#:<<!
echo "POST Install SchCre on Org1"
echo
curl -s -X POST \
  http://localhost:5000/chaincodes \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Jim",
  "orgname":"org1",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"move",
  "chaincodePath":"github.com/move",
  "chaincodeVersion":"v0"
}'
echo
echo
sleep 5
echo "POST Install SchCre on Org2"
echo
curl -s -X POST \
  http://localhost:5000/chaincodes \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "username":"Barry",
  "orgname":"org2",
  "peers": ["localhost:8051","localhost:8056"],
  "chaincodeName":"move",
  "chaincodePath":"github.com/move",
  "chaincodeVersion":"v0"
}'
#!
#}


echo
echo

sleep 5
echo "POST instantiate move on peer1 of Org1"
echo
curl -s -X POST \
  http://localhost:5000/channels/chaincodes \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "channelName":"mychannel",
  "username":"Jim",
  "orgname":"org1",
  "peers": ["localhost:7051","localhost:7056"],
  "chaincodeName":"move",
  "chaincodeVersion":"v0",
  "functionName":"init",
  "args":[]
}'


###
#echo
#echo "POST invoke blockchainTrain on peer1 of Org1"
#echo
#curl -s -X POST \
#  http://localhost:4000/channels/mychannel/chaincodes/blockchainTrain \
#  -H "authorization: Bearer $ORG1_TOKEN" \
#  -H "content-type: application/json" \
#  -d '{
#  "peers": ["localhost:7051","localhost:8051"],
#  "fcn":"addLearner",
#  "args":["18017982116","{\"CharityHash\":\"aaaaaaaaaaa\",\"Name\":\"张三\",\"Money\":\"0\",\"VisitInf\":[],\"ChSum\":[]}"]
#}'
#echo
#echo
#
#sleep 2
#echo "POST invoke blockchainTrain on peer1 of Org1"
#echo
#curl -s -X POST \
#  http://localhost:4000/channels/mychannel/chaincodes/blockchainTrain \
#  -H "authorization: Bearer $ORG1_TOKEN" \
#  -H "content-type: application/json" \
#  -d '{
#  "peers": ["localhost:7051","localhost:8051"],
#  "fcn":"updateLearner",
#  "args":["18017982116","qiuyongchun"]
#}'
#echo
#echo
