#
Author: JieXiao
#
Date: 2019.3.12
#
Theme: Dir to fabric trainchain
#


#Project: 
     /usr/trainChain
	./explore #blockchain status
	./fbend  #server
	./newsdk #block server this one worked



#1. Start network

   cd /usr/trainChain/newsdk/PubOfficeSdk  
   
   ./runApp.sh

   docker ps -a 
 	peer1.org2.example.com
 	peer1.org1.example.com
 	peer0.org1.example.com
 	peer0.org2.example.com
 	orderer.example.com
  	ca_peerOrg1
 	ca_peerOrg2

#2.Test blockchain

  cd ./SchCre 
  ./trainSchCre.sh  #instantiate SchCre
  ./testSchoolfunc.sh  #create members

#3.Enter peer inside
	docker exec -it name /bin/bash
	exit
#4.Start server 
	
  1. start mongodb 
	mongod --dbpath /var/lib/mongodb/ --smallfiles
	
  2. cd ../fbend
	npm start
  
#5.Start browser
  http://localhost:8080/login.html  

