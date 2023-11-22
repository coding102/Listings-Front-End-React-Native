import React from "react";
import AppNavigation from "./AppNavigation";
import { NativeBaseProvider, extendTheme } from "native-base";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: { colorScheme:  "rose", size: "lg" }
    },
    Input: {
      defaultProps: {
        seize: "lg",
        bg: "white",
        p: "3",
        borderWidth: 0,
        _focus: { borderWidth: 1, boderColor: "rose.400", bg: "white" }
      },
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
  );
}