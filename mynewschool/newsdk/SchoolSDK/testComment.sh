 echo "POST comment:addComment b1001(commentted by a1001) Org1 用户a1001评价服务b001"
 echo
 curl -s -X POST \
   http://localhost:4000/channels/chaincodes/invoke \
   -H "authorization: Bearer" \
   -H "content-type: application/json" \
   -d '{
         "username":"Jim",
         "orgname":"org1",
         "channelName":"mychannel",
         "peers": ["localhost:7051"],
         "chaincodeName":"comment",
         "functionName":"addComment",
         "args":["a1002","b1001","5","好评，值得推荐！"]
 }'
 echo
