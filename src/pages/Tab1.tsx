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
import { ActionSheet, ActionSheetButtonStyle } from "@capacitor/action-sheet";

const Tab1: React.FC = () => {
  const showActions = async () => {
    const result = await ActionSheet.showActions({
      title: "Photo Options",
      message: "Select an option to perform",
      options: [
        {
          title: "Upload",
        },
        {
          title: "Share",
        },
        {
          title: "Remove",
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });

    console.log("Action Sheet result:", result);
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
            <IonButton onClick={showActions}>showActions Button</IonButton>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
