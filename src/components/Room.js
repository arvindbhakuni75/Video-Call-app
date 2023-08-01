import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import {useParams} from "react-router-dom";

function Room() {


    const {roomID} = useParams() 

    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 405882533;
        const serverSecret = "c2317bd538e8f8e1bf9c392ccc0f8226";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Arvind");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
            {
                name: 'Personal link',
                url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
            ],
            scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showRoomTimer: true
        });

    }

  return (
    <div ref = {myMeeting}>
    </div>
  )
}

export default Room
