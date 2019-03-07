peer="localhost:7051"
echo "GET query Transaction by TransactionID"
echo
curl -s -X POST http://localhost:5000/channels/transactions/txid  \
  -H "authorization: Bearer" \
  -H "content-type: application/json"\
  -d '{
     "username":"Jim",
     "orgname":"org1",
    "peer": ["localhost:7051"],
    "channelName":"mychannel",
    "args":["ae989ba7113b5dcff963a7355b5228a46752e67aa1ff67e311f5f5c1359275ad"]
}'
echo
echo


