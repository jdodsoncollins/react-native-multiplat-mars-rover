# React Native Multiplatform Demo

This project is a basic interface to browse the [NASA Mars Rover API](https://api.nasa.gov/) using [Expo](https://docs.expo.dev/workflow/expo-cli/), which enables a React Application to be bootstrapped with basic UI, designed for compilation and deployment to web, iOS, and Android.

### **Why?**
This was meant to demo feasibility of the above tech stack for my day job. The use of web technology beyond browsers I feel really benefits developer experience, and users benefit extended choice in app selection. Targeting desktop platforms is possible too - see [React Native for Mac/Windows](https://microsoft.github.io/react-native-windows/).

### **What does it look like?**
Here is it on web and iOS. Web is also mobile-friendly, and dark mode is supported.

*iOS app:*
![web](/readme_assets/ios.png)

*Web:*
![ios](/readme_assets/web.png)

### **Prerequisites**
- Node 16 (Node 17 may show errors. [Node Version Manager](https://github.com/nvm-sh/nvm) is highly recommended)
- Yarn
1. Get your [free NASA API Key](https://api.nasa.gov/)
2. From project root directory, run `yarn`
3. run `cp .env_sample .env` to populate your env file.
4. Populate the API key in your .env file!

### **Installation instructions for dev**
1. `npx expo start`
2. Then browse to the local-host webpage and choose your platform. You should see a terminal output prompting you to press `w` for web, and so on.
   
For mobile development, you'll also want the Expo App for [iOS](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### **Installation instructions for building**
1. `npx expo web`
2.  or `npx expo client:ios` or `npx expo client:android` for actual submission to Apple/Google

If you choose to target iOS or Android for building, respective development applications for each platform need to already be installed.

### **Areas of improvement**
This project was intentionally timeboxed. Given more time, I'd focus on the following for improvement
- Useful unit tests! 
- Environment variables are tricky in this React Native project and I don't have time to invetigate a good solution. 
- Proper typings, particularly for the Mars rover tab elements.
- The four current rovers are currently hard-coded also for app boot. It would also be nice to query the API and *then* render tabs based on the Rovers returned, in case the rovers change.
- Better error-handling.
- App state improvements. For example, the single app-level store could be split into a top-level store for rover selection, and then per-rover stores for rover settings.
- Lots of UI refinement. I have a good working knowledge of CSS and UI best practices, and this project incorporates no custom styling of mine, beyond basic component placement.