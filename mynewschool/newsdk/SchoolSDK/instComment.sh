echo "POST instantiate comment on peer1 of Org1 1"
echo
curl -s -X POST \
  http://localhost:4000/channels/chaincodes \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
  "channelName":"mychannel",
  "username":"Jim",
  "orgname":"org1",
  "peers": ["localhost:7051","localhost:8051"],
  "chaincodeName":"comment",
  "chaincodeVersion":"v0",
  "functionName":"init",
  "args":[]
}'
echo
echo

