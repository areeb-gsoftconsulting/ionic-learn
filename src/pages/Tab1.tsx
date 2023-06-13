import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { LocalNotifications } from "@capacitor/local-notifications";
import { PushNotifications } from "@capacitor/push-notifications";

const Tab1: React.FC = () => {
  const [transcript, setTranscript] = useState("");

  const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== "granted") {
      throw new Error("User denied permissions!");
    }

    let token = await PushNotifications.register();
    console.log({ token });
    PushNotifications.addListener("registration", (token: any) => {
      console.log(token, "Push registration success");
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });
  };

  useEffect(() => {
    registerNotifications();
  }, []);

  const handleVoice = async () => {
    try {
      let result = await SpeechRecognition.start({
        language: "en-US",
        maxResults: 1,
        prompt: "Welcome to Factory Girl",
        partialResults: false,
        popup: false,
      });
      const speechResult = result?.matches[0];
      setTranscript(speechResult);
      console.log("==>", speechResult);
    } catch (error) {
      alert("Plz try again");
    }
  };

  useEffect(() => {
    let x = LocalNotifications.requestPermissions();
    console.log({ x });
  }, []);

  LocalNotifications.addListener(
    "localNotificationActionPerformed",
    (payload) => {
      // triggers when the notification is clicked.
      console.log("notification triggered:", payload);
    }
  );

  const sendNotifi = async () => {
    try {
      let res = await LocalNotifications.schedule({
        notifications: [
          {
            title: "Ionic Gsoft App",
            body: "short decription...",
            id: 1,
          },
        ],
      });

      console.log({ res });
    } catch (error) {
      console.log({ error });
    }
  };

  // const handleVoice = async () => {
  //   let result = await SpeechRecognition.start({
  //     language: "en-US",
  //     maxResults: 2,
  //     prompt: "Welcome to Factory Girl",
  //     partialResults: true,
  //     popup: true,
  //   })
  //     .then(function imDone(e: any) {
  //       console.log("done", result);
  //     })
  //     .catch(function imFail() {
  //       console.log("failed");
  //     });
  // };
  const handleStop = () => {
    SpeechRecognition.stop();
  };

  let permissions = SpeechRecognition.checkPermissions();
  console.log({ permissions });

  useEffect(() => {
    SpeechRecognition.requestPermissions();
    SpeechRecognition.available();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
            <IonTitle size="large">Title</IonTitle>
            <IonTitle size="large">Title</IonTitle>
            <IonTitle size="large">Title</IonTitle>
            <IonTitle size="large">Title</IonTitle>

            <IonButton onClick={handleVoice}>Start Voice</IonButton>
            <IonButton onClick={handleStop}>Stop Voice</IonButton>
            <h1>{transcript}</h1>

            <IonButton onClick={sendNotifi}>Notifi</IonButton>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
