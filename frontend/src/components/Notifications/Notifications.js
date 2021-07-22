import React, { useState, useContext, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles'
import { Button, Modal } from "antd";
import Phone from "../../assests/phone.gif";
import Teams from "../../assests/teams.mp3";
import {RTCContext} from "../../context/RTCProvider";
import {
  PhoneOutlined,
} from "@ant-design/icons";

const Notifications = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Audio = useRef();
  const {
    call,
    callAccepted,
    answerCall,
    setOtherUser,
    leaveCall1,
  } = useContext(RTCContext);


    const classes = makeStyles((theme) => ({      
      btnDiv: {
        display: "flex",
        marginTop: "1rem",
        flexDirection: "row",
        justifyContent: "space-around",
      },
      answer: {
        backgroundColor: '#29bb89',
        color: '#1e6f5c',
        fontHeight: 'bold',
      },      
      decline: {
        backgroundColor: 'rgb(250, 30, 14, 0.75)',
        color: '#8c0000',
        fontWeight: 'bold',
      }
    }))();

  useEffect(() => {
    if (isModalVisible) {       
       Audio.current.play();
    } else{ 
       //Audio?.current?.pause();
    }
  }, [isModalVisible]);

  const showModal = (showVal) => {
    setIsModalVisible(showVal);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    leaveCall1();
    window.location.reload();
  };
  useEffect(() => {
    if (call.isReceivingCall && !callAccepted) {
      setIsModalVisible(true);
      setOtherUser(call.from);
    } else setIsModalVisible(false);
  }, [call.isReceivingCall]);

  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <>
          <audio src={Teams} loop ref={Audio} />
          <Modal
            title="Incoming Call"
            visible={isModalVisible}
            onOk={() => showModal(false)}
            onCancel={handleCancel}
            footer={null}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h1>
                {call.name} is calling you:{" "}
                <img
                  src={Phone}
                  alt="phone ringing"
                  style={{ display: "inline-block", height: '4rem'}}
                />
              </h1>
            </div>
            <div className={classes.btnDiv}>
              <Button
                variant="contained"
                className={classes.answer}
                color="#29bb89"
                icon={<PhoneOutlined />}
                onClick={() => {
                  answerCall();
                  Audio.current.pause();
                }}
                tabIndex="0"
              >
                Answer
              </Button>
              <Button
                variant="contained"
                className={classes.decline}
                icon={<PhoneOutlined />}
                onClick={() => {
                  setIsModalVisible(false);
                  Audio.current.pause();
                }}
                tabIndex="0"
              >
                Decline
              </Button>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Notifications;