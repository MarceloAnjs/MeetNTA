import React, { useEffect } from "react";

import Video from "../components/Video/Video";
import {RTCProvider} from "../context/RTCProvider";

import Dashoard from '../components/Dashboard/Dashboard'

import Notifications from '../components\/Notifications/Notifications'

const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
  return (
    <RTCProvider>
      <div className="App" style={{ height: "100%", width: "100%" }}>
        <Dashoard>
          <Video />       
          <Notifications/>   
        </Dashoard>
      </div>
    </RTCProvider>
  );
};

export default Home;
