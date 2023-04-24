## COMP 584 - Advanced Web Engineering Design Project

### About VendyLA:
Street vendors are underrepresented within other Food/Merch reviewer applications (i.e Yelp). This project's purpose and goal is to bring more clientele to their business.

- Food/Merch application with a focus on street vending in Los Angeles.
- Allow users to find nearby street vendors via location services
- Additional feature if time allows:  Ability to rate and review their food/merchandise.



### Requirements:

[Node.js] (https://nodejs.org/en/download/.)

```
npm i react-scripts
npm i bootstrap
npm i @react-google-maps/api
npm i firebase

Run app using 'npm start'

To set up firebase go to https://firebase.google.com/. Sign in. On the left navigation bar select 'authentication'. click on get started. enable google. click on the slider to the right of the Google logo to Enable it. Pick your email in the "prject support email". Then click save. Google sign in should now be enabled.

Go back to the 'authentication' screen. click on "sign-in method" on the above navigation bar. click on "Add new provider". Select 'Email/Password'. Click on the first slider to enable email/password login (the first option). Then click on save.

To enable your firebase with your project. On firebase click on the settings wheel icon next to "project Overview". Click on "project settings". Scroll down to the "Your apps" section and click on the logo that looks like a code block "</>". Give it a nickname and Register the app. Then replace that 'const firebaseCOnfig = {}`  in the 'firebase.js' file with what is on your screen. Then click on 'continue to console'

Current demo link: https://drive.google.com/file/d/1J9EknQYt1JJPBcGjcG5PDW-Gw0mcM1wT/view?usp=drivesdk
```

**$.env.local** file in main folder:
```
REACT_APP_GOOGLE_API_KEY=your_google_api_key

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key

REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain

REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id

REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket

REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id

REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

