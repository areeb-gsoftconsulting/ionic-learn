import { Toast } from "@capacitor/toast";

const ShowHelloToast = async (msg: any) => {
  await Toast.show({
    text: msg,
  });
};

export default ShowHelloToast;
