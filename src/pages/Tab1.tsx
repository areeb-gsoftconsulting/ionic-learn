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

import { Geolocation } from "@capacitor/geolocation";
const Tab1: React.FC = () => {
  const printCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log("Current position:", coordinates);
    } catch (error) {
      console.log("Current position:", error);
    }
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
            <IonButton onClick={printCurrentPosition}>Button Loc</IonButton>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
