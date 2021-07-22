<p align="center">
<img src="https://user-images.githubusercontent.com/49373874/126611916-1519c584-112f-4067-9f63-19f42fab545a.png" width="90" />



<h1 align="center">MeetNTA</h1>



<p align="center">
<img src="https://img.shields.io/static/v1?label=Version&message=1.0&color=7159c1" alt="Version-0.1" />
<img src="https://img.shields.io/badge/status-finished-green" alt="Status-Finished "/>
<img src="https://img.shields.io/static/v1?label=Lincense&message=MIT&color=0000ff " alt="Lincense" />
</p>




## :book: About The Project



MeetNTA is a system that allow people have a video meet, chat message and share their own screen with their contacts in real time.
MeetNTA is a video chat application made with WebRTC, Socket.IO, Node.js and React.js
<p align="center">
<img src="https://user-images.githubusercontent.com/49373874/126610913-bbc37eb7-6c52-4439-b5f0-e38425935bc2.png" alt="meet1" width="800" />
<img src="https://user-images.githubusercontent.com/49373874/126611173-c72aedfe-67df-4da0-af76-e086c50e743d.png" alt="meet1" width="800" />
</p>




### :computer: Technologies




* [React](https://reactjs.org)
* [Node.js](https://nodejs.org/en/)
* [WebRTC](https://webrtc.org/)
* [Socket.IO](https://socket.io/)
* [MongoDB](https://www.mongodb.com/)
* [Swagger](https://swagger.io/)




### :sparkles: Features



The application for video calls is provided for Web, Android, iOS, MacOS, Windows and Linux.




The video call application has the following features:



- [x] Join / leave a channel
- [x] Mute / unmute audio
- [x] Enable / disable video
- [x] Send messages to a channel
- [x] Share Screen



### 🌐 Supported Browsers



| Browser | Compatible |
|---|---|
| Firefox | ✔️ 52 or later |
| Chrome/Chromium | ✔️ 49 or later |
| Opera | ✔️ 72 or later |
| Edge | ⚠️ Latest versions <br> 🎤 Speakers are not promoted <br> 🖥 Viewing screens of others' work |
| Safari | ⚠️ 12 or later <br> ❌ No screensharing support <br> 🖥 Viewing screens of others' work |



### ✏️ Brief about the process



First step is to signaling the peer to the second peer to exchange informations about the offer of call.
If a call is well recieved, the second peer will semd an answer through server.
Finally the peers exchange ICE data in order to get better way to connect using, due NAT.
Lastly the peers are conected and dont need another edge to keep the communication.



The first step must occur via service. Look at the following diagram that could make the understaning easier.



![Diagram](https://user-images.githubusercontent.com/49373874/126609657-1ee4d27a-52d5-4dc6-b213-a2fea43b0978.png)



### 🤔 How to get this project?



Clone this project repository:
```bash



$ git clone https://



#Enter in `MeetNTA` folder:



$ cd MeetNTA
```



🚨 If you don't have git in your machine, you can install it [here](https://git-scm.com/downloads).



### :construction: Prerequisites



* **Docker**: 🚨 If you don't have Docker in your machine, you can install it [here](https://docs.docker.com/engine/install/).
* **Docker-Compose**: 🚨 If you don't have Docker-Compose in your machine, you can install it [here](https://docs.docker.com/compose/install/).




### 🐳 Run application



After install Docker and Docker-Compose:



- run the following command:
```json
docker-compose --env-file ./backend/.env up -d
```
After enter the instructions above, it will automatically install and download all the dependencies and run the app MeetNTA.
This is the moment that you grab some coffee because it will take a while ☕




🚨 *p.s.: use ``` sudo docker-compose --env-file ./backend/.env up -d ```to run as admin.*



- The project is available at: http://localhost:3000
- The API documentation (Swagger) is available at http://localhost:3001/api/docs




#### 📅 Milestone Summary



| Status | Milestone | ETA |
| :---: | :--- | :---: |
| 🚀 | **[Define architecture of project](#)** | Thu Jul 15 2021 |
| 🚀 | **[Start develop backend](#)** | Fri Jul 16 2021 |
| 🚀 | **[Implement server side using socket io express](#)** | Sat Jul 17 2021 |
| 🚀 | **[Use authenticated routes using jwt Bearer](#)** | Sat Jul 17 2021 |
| 🚀 | **[Create index file with express and socket io](#)** | Sun Jul 18 2021 |
| 🚀 | **[Create docker configs](#)** | Mon Jul 19 2021 |
| 🚀 | **[Create socket with rules for exchange information between the peers (Make authenticated)](#)** | Mon Jul 19 2021 |
| 🚀 | **[Save SocketId from user logged (use to webrtc call)](#)** | Tue Jul 20 2021 |
| 🚀 | **[Prototype the mockup in notepad](#)** | Tue Jul 20 2021 |
| 🚀 | **[Create components in React](#)** | Tue Jul 20 2021 |
| 🚀 | **[Implement client side using context provider and routing](#)** | Wed Jul 21 2021 |
| 🚀 | **[Implement video client side using google webrtc api](#)** | Wed Jul 21 2021 |
| 🚀 | **[Implement video client side using google webrtc api](#)** | Wed Jul 21 2021 |
| 🚀 | **[Refactore code with components](#)** | Thu Jul 22 2021 |
| 🚀 | **[Review and document code](#)** | Thu Jul 22 2021 |





<p align="center">Developed with 💜 by Augusto Zanoni</p>