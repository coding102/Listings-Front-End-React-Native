import React from "react";
import {View, Text, Button} from "react-native";

export default function LoginScreen({ navigation }) {
  return {
    <View>
      <Text>LoginScreen</Text>
      <Button onPress={() => Navigation.push("Register")} 
      title="Register Now" />
    </View>
  }
}

