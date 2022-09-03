# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Section 1. Project Kickoff and Setting upthe bases

1.  Project Installs
    I. npx-create-react-app fe_indicafe
    II. npm start to run the project using the terminal
    III. delete some files

2.  Tools and Extensions
    I. See npm and node version
    II. install ES7,Bracket pair colorizer,Turbo Console Log,Import Cost, REST Client,ngrok for VSCode
    III. create components-><TestComponent/>
    IV. npm i lodash
    V. create rest.http to test rest client
    VI. run ngrok start with the commande palette.

3.  Building the UI Layout
    I. create components->Layout-><Layout/> && renderLayout()
    II create <Navbar /> <Main /> <Footer /> && <Layout/>
    III. create Layout.css
    IV. create Navbar-><Navbar />,Main-><Main /> & Footer-><Footer />
    V. create Navbar,Main & Footer css files & import <Layout/> in App.js

4.  Bootstrap Integration
    I. update App.css file
    II. npm i bootstrap && App.js
    III. fontawesome

         I. npm i --save @fortawesome/fontawesome-svg-core
         II. npm i --save @fortawesome/free-solid-svg-icons
         III. npm i --save @fortawesome/free-regular-svg-icons
         IV. npm i --save @fortawesome/react-fontawesome@latest
         V. npm i @fortawesome/free-brands-svg-icons

    IV. add Roboto Condensed Italic (https://fonts.google.com/specimen/Roboto+Condensed) && App.css

5.  Navbar Design
    I. <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> && index.html
    II. import <Navbar/> from Bootstrap to <Navbar>
    III. import { faBars, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
    IV. import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';

6.  Styling Navbar
    I. change container-fluid to container to have more space.
    II. style <Navbar/>

7.  Design Project Logo/Brand
    I. add assets folder
    II. style <Navbar/> && Logo

8.  Design Dynamic Component
    I.update & style <Main/> & pass it a props.
    II. update & style <Footer/> .
9.  Designing Footer Component
10. Sign up with Github and Integration
11. Sign up with Netlify, Setting up CI / CD for the front end project.

Parfois et bien souvent, il est mieux d’avancer dans l’ombre que dans la lumière.
Beaucoup s’exposent trop vite et tombent également vite.
Faites preuve de patience et de sagesse.
