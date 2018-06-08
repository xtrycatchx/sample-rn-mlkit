
Sample app for the react native library https://github.com/xtrycatchx/react-native-mlkit-ocr

## Limitations
As of the moment, this only supports Android. 

## Pre-requisite
You need to create a Firebase account, generate credentials for Android, and copy the google-services.json into directory android/app resulting in
```
android/app/google-services.json
```

## Getting started

```shell
$ git clone https://github.com/xtrycatchx/sample-rn-mlkit
$ cd sample-rn-mlkit
$ npm install
$ react-native link
$ mkdir android/app/src/main/assets
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
$ react-native run-android
```

  