# Fixit.id Mobile App

Welcome to Fixit.id's mobile application frontend repository built with React Native and Expo CLI.

For the backend, please refer to the []() repository.

- [Getting Started](#🛠-setup)
- [Making a new screen & route](#making-a-new-screen-and-route)
- [Using the theme](#using-the-theme)

## 🤝 Introducing Our Members
- Hansen Andersen Sutikno
- Oliverio Theophilus Nathanael
- Edbert Valencio Angky
- Lianca Valencia
- Daniel Aditya Tumansery

## 🌟 Application Purpose
Fixit.id is a mobile application that helps people to find house maintenance workers

## 📊 Requirements

- Node & NPM
- Expo Go Android/iOS Application

## 🛠 Setup

Clone the repository

```bash
git clone 
```

Install the dependencies

```bash
npm install
```

To start the application, run

```bash
expo start
expo start --android
```

## 📱 Usage
1. To run the application on your phone, you will need to download the **Expo Go** application from the **Play Store** or **App Store**. Otherwise, if you have an emulator, you can skip this step.
2. Once you have the application installed, you can scan the QR code that appears in the terminal after running `npm start` or you can type the command `a` to run the application on an Android emulator or `i` to run the application on an iOS emulator.
3. You can now use the application.
4. Try to explore the Fixit.id app!
5. And that is it! You can now use the application to .


## Making a new screen and route

1. Head to `./screens`
2. Create a new folder with your screen name (ex: `./screens/profile`)
3. Create an `index.js` file inside the folder
4. Create your screen component

```js
// ./src/screens/profile/index.jsx
import { ScrollView, StatusBar, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

export function ProfileScreen({ navigation }) {
  const theme = useTheme();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.venti.md}
            mb="15"
          >
            This is the profile page
          </Text>
      </ScrollView>
    </>
  );
}

export default ProfileScreen;
```

5. Create a new route go to `./src/constants/routes.js`
6. Create a new constant

```js
// ./src/constants/routes.js
export const profileRoute = "profileRoute";
export default {
  ...// other routes
  profileRoute,
};
```

7. Create a new navigation component to the profile page go to `./src/navigator.jsx` inside this piece of code

```js
import ProfileScreen from './screens/profile'

...
      {isAuthenticated ? (
        // User is signed in
        <>
          <Stack.Screen
            name={route.mainPageRoute}
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          // Your new screen nav
          <Stack.Screen
            name={route.profileRoute}
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
...
```

Read more about navigation [here](https://reactnavigation.org/docs/getting-started)

## Using the theme

Theme configurations are located in `src/theme/index.js`

```ts
export const colors = {
  black: "#1E1E1E",
  white: "#F1F1F1",
  purple: "#25174A",
  mainBlue: "#253159",
  border: "#485578",
};

export const typography = {
  family: {
    regular: "PlusJakartaSans_400Regular",
    medium: "PlusJakartaSans_500Medium",
    bold: "PlusJakartaSans_700Bold",
  },
  small: {
    sz: "12px",
    sz_i: 12,
  },
  medium: {
    sz: "14px",
    sz_i: 14,
  },
  heading: {
    sm: "14px",
    md: "16px",
    lg: "24px",
    sm_i: 14,
    md_i: 16,
    lg_i: 24,
  },
};

export default { colors, typography };
```

First, import `useTheme()` from `styled-components/native`

```js
import { useTheme } from "styled-components/native";
```

Then, in your component for example:

```js
const PokemonElementsPanel = () => {
  const theme = useTheme();
  return (
    <Text
      style={{
        backgroundColor: theme.colors.mainBlue,
      }}
    >
      Fire
    </Text>
  );
};
```

```js
import routes from '../../routes' // -> pas in dengan path routes.js
// routes yang dipakai sesuaiin dengan nama route yang ada di file routes.js

// contoh pakai component button
<Button
    title="Login"
    onPress={() => navigation.navigate(routes.loginRoute)} // -> how to navigate to login route
/>

// contoh pakai component touchable opacity
<TouchableOpacity
    onPress={() => navigation.navigate(routes.registerRoute)} // -> hpw to navigate to register
/>
```
