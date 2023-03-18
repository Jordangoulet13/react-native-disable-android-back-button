import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const useDisableAndroidBackButton = () => {
  useFocusEffect(
    React.useCallback(() => {
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          return true;
        }
      );
      return () => {
        subscription.remove();
      };
    }, [])
  );
};

export default useDisableAndroidBackButton;
