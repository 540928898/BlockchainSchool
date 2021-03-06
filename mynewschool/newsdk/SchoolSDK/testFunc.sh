#!/bin/bash
echo "//=================================================================="
echo "//SDK提供的操作主要的操作有两种，分别为invoke(产生交易，改变账本的world state)"
echo "//和query(不产生交易，不改变账本的world state，只查询world state)"
echo "//invoke返回交易信息状态和交易hash，query返回key对应的值（区块链上数据存储方式为key-value对）"
echo "//合约(链码，chaincode)一共有4个："
echo "//   register:提供与用户注册、修改用户相关信息的功能"
echo "//   publicService:与发布服务、申请服务相关（同时去调register合约）"
echo "//   comment:与评论服务相关（同时去调register与publicSrvice合约）"
echo "//   consume:与消费积分有关（同时去调register和publicService合约）"
echo "//主线：众创空间/孵化器a1001发布一个工位b1001->公司/个人申请服务、评价服务->积分增加->积分消费"
echo "//用户角色（a开头，与服务b开头区分）两种：1 表示孵化器、众创空间；2 表示需要工位的公司或个人"
echo "//服务(使用b1001至b1010，方便范围查询)类型三种：1 工位；2 其他服务 3 可积分兑换的服务"
echo "//=================================================================="

echo "注册用户a1001 ////////////////////////////////"
echo "args传入的6个参数分别为：用户ID | 用户密码 | 用户角色（1代表孵化器、众创空间，可发布工位与服务；2代表需要工位的公司或个人）| 账户余额（float64型字符串） | 信用积分（整型字符串）| 功能积分（整型字符串）| "
echo "注册用户a1001返回结果为操作状态和交易ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
	      "peers": ["localhost:7051"],
	      "chaincodeName":"register",
	      "functionName":"regist",
	      "args":["a1001","123456","1","1000","1000","1000"]
}'
echo
echo

echo "查询用户a1001 ////////////////////////////////"
echo "args传入的1个参数为：用户ID |"
echo "返回结果为查询结果为用户a1001的注册信息"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"query",
        "args":["a1001"]
}'
echo
echo

echo "注册用户a1002 ////////////////////////////////"
echo "传入的6个参数的含义与注册a1001相同，其中第三个参数为2，表示公司或个人"
echo "注册用户a1002返回结果为操作状态和交易ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"regist",
        "args":["a1002","123456","2","1000","1000","1000"]
}'
echo
echo

echo "查询用户a1002 ////////////////////////////////"
echo "args传入的1个参数为：用户ID |"
echo "返回结果为查询结果为用户a1002的注册信息"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"query",
        "args":["a1002"]
}'
echo
echo

echo "用户a1001发布服务b1001(owner is a1001) ////////////////////////////////"
echo "args传入的6个参数为：服务/工位ID | 发布者ID | 类型（1为工位，2为其他服务） | 类型2（服务名称） | 价格（float64） |描述字段 "
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"addService",
        "args":["b1001","a1001","1","日租办公室","500","面积大，位置好，设备齐全。"]
}'
echo
echo

echo "查询服务b1001 ////////////////////////////////"
echo "args传入的1参数为：服务/工位ID "
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"query",
        "args":["b1001"]
}'
echo
echo

echo "用户a1002申请服务b1001 ////////////////////////////////"
echo "args传入的2个参数为：服务/工位ID | 申请者ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"appService",
        "args":["b1001","a1002"]
}'
echo
echo

echo "查询服务b1001 ////////////////////////////////"
echo "args传入的1个参数为：服务/工位ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"query",
        "args":["b1001"]
}'
echo
echo

 echo "用户a1002评价服务b001（属于a1001） 评论使得功能积分＋5//////////////"
 echo "args传入的4个参数为：使用者ID | 服务ID | 评级（整型1~5） | 评论"
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

echo "POST register:query a1001 查询user1 ////////////////////////////////"
echo "Money change!"
echo "args传入的1个参数为：用户ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"query",
        "args":["a1001"]
}'
echo
echo

echo "POST register:query a1002 查询user2 ////////////////////////////////"
echo "Money change!"
echo "args传入的1个参数为：用户ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"query",
        "args":["a1002"]
}'
echo
echo

echo "POST publicService:query b1001 查询服务b1001 ////////////////////////////////"
echo "State change!"
echo "args传入的1个参数为：工位/服务ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"query",
        "args":["b1001"]
}'
echo
echo

echo "###############################################################################"
echo "###########                   积分消费                     #####################"
echo "###############################################################################"
echo "用户a1001发布服务b1002(owner is a1001) ////////////////////////////////"
echo "args传入的6个参数为：服务/工位ID | 发布者ID | 类型（1为工位，2为其他服务） | 类型2（服务名称） | 所需功能积分（int） |描述字段 "
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"addServiceByFunPoint",
        "args":["b1002","a1001","1","临时工位","20","面积大，位置好。"]
}'
echo
echo

echo "查询服务b1002 ////////////////////////////////"
echo "args传入的1参数为：服务/工位ID "
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"query",
        "args":["b1002"]
}'
echo
echo

echo "使用功能积分使得服务b1002权限转换 ////////////////////////////////"
echo "args传入的2参数为：服务/工位ID | 支付的功能积分 "
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"topService",
        "args":["b1002","10"]
}'
echo
echo

echo "用户a1002申请服务b1002 ////////////////////////////////"
echo "args传入的2个参数为：服务/工位ID | 申请者ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/invoke \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"appServiceByFunPoint",
        "args":["b1002","a1002"]
}'
echo
echo

echo "查询服务b1002 ////////////////////////////////"
echo "args传入的1个参数为：服务/工位ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"query",
        "args":["b1002"]
}'
echo
echo

echo "查询用户a1001 ////////////////////////////////"
echo "Money change!"
echo "args传入的1个参数为：用户ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"query",
        "args":["a1001"]
}'
echo
echo

echo "查询用户a1002 ////////////////////////////////"
echo "Money change!"
echo "args传入的1个参数为：用户ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"query",
        "args":["a1002"]
}'
echo
echo

echo "查询用户a1002的历史记录 ////////////////////////////////"
echo "Money change!"
echo "args传入的1个参数为：用户ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"register",
        "functionName":"getHistoryForKey",
        "args":["a1002"]
}'
echo
echo

echo "查询服务b1001的历史记录 ////////////////////////////////"
echo "Money change!"
echo "args传入的1个参数为：用户ID"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"getHistoryForKey",
        "args":["b1001"]
}'
echo
echo

echo "服务的范围查询 ////////////////////////////////"
echo "args传入的0个参数为，返回编号b1001至b1010的所有服务的记录"
curl -s -X POST \
  http://localhost:4000/channels/chaincodes/query \
  -H "authorization: Bearer" \
  -H "content-type: application/json" \
  -d '{
        "username":"Jim",
        "orgname":"org1",
        "channelName":"mychannel",
        "peers": ["localhost:7051"],
        "chaincodeName":"publicService",
        "functionName":"testRangeQuery",
        "args":[]
}'
echo
echo
