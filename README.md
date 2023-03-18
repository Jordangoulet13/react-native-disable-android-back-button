# React Native Disable Android Back Button

A custom hook that disables the Android back button in React Native when a screen is focused.

## Installation

To install the package, run:

```
npm install --save react-native-back-android
```

## Usage

To use the hook, simply import it into your component and call it:

```js
import useDisableAndroidBackButton from "react-native-disable-android-back-button";

function MyScreen() {
  useDisableAndroidBackButton();

  // rest of your component code...
}
```
