# Tajer Test

* Building an SSR website:
  1. Make sure you have installed package.json dependancies using 	`npm install`
  2. From scripts area you can find an existing script to build `build:ssr` or serve an SSR `serve:ssr`
  3. The build script will compile the browser application and the server application which is a nodejs server which uses and express server to render and generate html and css on the server before sending the results to the browser.
  4. The serve script will build the script and in addition run the prerenderer on port 4000
* Building an apk:
  1. Make sure you have installed java, gradle and apache ANT dependancies on your system and added the appropriate environoment variables
  2. Install cordova resources and native-run `npm install -g native-run cordova-res`
  3. Change the output path in angular.json to `www`
  4. Use `ionic cordova build android` to build for android
  5. When the project is opened in Android studio you can build it into an apk
