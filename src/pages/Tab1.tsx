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

const Tab1: React.FC = () => {
  const [transcript, setTranscript] = useState("");

  const handleVoice = async () => {
    try {
      let result = await SpeechRecognition.start({
        language: "en-US",
        maxResults: 2,
        prompt: "Say something",
        partialResults: true,
        popup: true,
      });
      const speechResult = result?.matches[0];
      setTranscript(speechResult);
      console.log("==>", speechResult);
    } catch (error) {
      alert("Plz try again");
    }
  };
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

            <IonButton onClick={handleVoice}>Start Voice</IonButton>
            <IonButton onClick={handleStop}>Stop Voice</IonButton>
            <h1>{transcript}</h1>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
