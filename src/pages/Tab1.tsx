import React from "react";
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
import ShowHelloToast from "../components/ToastComp";
import { TextToSpeech } from "@capacitor-community/text-to-speech";
const Tab1: React.FC = () => {
  const speak = async () => {
    await TextToSpeech.speak({
      text: "This is a sample text.",
      lang: "en-US",
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
      category: "ambient",
    });
  };

  const stop = async () => {
    await TextToSpeech.stop();
  };
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
            <IonButton onClick={() => ShowHelloToast("ok Good Work")}>
              Button
            </IonButton>
            <IonButton onClick={speak}>speak</IonButton>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
