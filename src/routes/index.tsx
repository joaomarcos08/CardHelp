import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { SingIn } from "../screens/SingIn";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return(
    <NavigationContainer>
      <SingIn />
    </NavigationContainer>
  )
}