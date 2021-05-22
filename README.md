# Deployment Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/2c79ec77-49e5-4e8d-a837-1f158795cd1c/deploy-status)](https://app.netlify.com/sites/react-push-notif-fcc73f/deploys)

## Steps to test the notifications

To do this in Postman, you simply have to set the following:

1.Set request type to POST
2.In the Headers, set the following:
3.Content-Type = application/json
4.Authorization(server key) = key=< Your FCM Server Key > (See your Firebase Console's Cloud Messaging Tab)
5.Set the payload parameters in the Body.
for eg:
`{ "notification": { "title": "Firebase", "body": "Firebase is awesome", "click_action": "http://localhost:3000/", "icon": "http://url-to-an-icon/icon.png" }, "to": "USER TOKEN" // copy this from browser console. }`
6. Send the request to <https://fcm.googleapis.com/fcm/send> 7. If the request is a successful, the API will written a `200 status` alongwith a `messenge_id`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
