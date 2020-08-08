# Tenpo Technical Challenge - Ricardo Huamani Parian

## Frameworks / Libraries

- React
- React Native
- Expo

## Folder Structure

```bash
/assets
/components
/pages
App.js
package.json
```

- **assets/**: Media files like images, videos, etc.
- **components/**: React components shared between multiple pages
- **pages/**: Components that represent an entire view or screen of the app
- **App.js**: The entry point (similar to index.js)

## Installation

After cloning it, we install the dependencies.

```bash
$ yarn install
```

In order to render the application, first we need a server that bundles our javascript code and delivers it to our smartphone or mobile emulator. This will run a server and produce and QR code which we will use to identify our application.

```bash
$ yarn start
```

To run the application, we need installed the Expo client app on our iOS or Android phone and connect it to the same wireless network. Then with Expo client, we scan the QR code from the terminal to open the project.
