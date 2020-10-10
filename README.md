## React Native Template

This repo is an example template for quickly setting up react-native-cli including [react-navigation](reactnavigation.org) and [react-native-firebase](rnfirebase.io) v6. Example code is already setup for running on Android and iOS

### Resources

- reactnative.dev
- reactnavigation.org
- rnfirebase.io
- react-native-maps (https://www.npmjs.com/package/react-native-maps)

### Roadmap

- [x] Configure react-native initial project (react-native init [projectname])
- [x] Setup react-navigation
- [x] Integrate react-native-firebase
- [ ] Example CRUD App
- [ ] Integrate react-native-maps

### Setup Instructions

- Clone repo to local machine
- Setup firebase project on [firebase] (www.firebase.com)
- Enable firestore database for your firebase project
- Add an "Android" app to your Firebase project, download the `googleservices.json` file and copy-paste it to `android/app/google-services.json`
- Add an "iOS" app to your Firebase project, download the `GoogleService-Info.plist` file and copy-paste it to `ios/GoogleService-Info.plist`
- Install dependencies using `yarn`
- Run locally using `yarn start`

### Run on Device Emulator (Android/iOS)

- Run app on Android emulator using `yarn android`
- Run app on iOS emulator using `yarn ios`

## Deploy to Apple app store and Google Play store
- Refer to official documentation

## Notes
- When deploying to android or iOS devices/emaulators, ensure that your development machine has been setup accordingly