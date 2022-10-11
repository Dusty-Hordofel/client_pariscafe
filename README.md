FRONTEND

## Section 1. Project Kickoff and Setting upthe bases

### 1. Project Installs

    - npx-create-react-app paricafe
    - npm start to run the project using the terminal
    - delete some files

### 2. Tools and Extensions

    - See npm and node version
    - install ES7,Bracket pair colorizer,Turbo Console Log,Import Cost, REST Client,ngrok for VSCode
    - create components-><TestComponent/>
    - npm i lodash
    - create rest.http to test rest client
    V- run ngrok start with the commande palette.

### 3. Building the UI Layout

    - create components->Layout-><Layout/> && renderLayout()
    - create <Navbar /> <Main /> <Footer /> && <Layout/>
    - create Layout.css
    - create Navbar-><Navbar />,Main-><Main /> & Footer-><Footer />
    - create Navbar,Main & Footer css files & import <Layout/> in App.js

### 4. Bootstrap Integration

    - update App.css file
    - npm i bootstrap && App.js
    - fontawesome

         - npm i --save @fortawesome/fontawesome-svg-core
         - npm i --save @fortawesome/free-solid-svg-icons
         - npm i --save @fortawesome/free-regular-svg-icons
         - npm i --save @fortawesome/react-fontawesome@latest
         - npm i @fortawesome/free-brands-svg-icons

    - add Roboto Condensed Italic (https://fonts.google.com/specimen/Roboto+Condensed) && App.css

### 5. Navbar Design

    - <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script> && index.html
    - import <Navbar/> from Bootstrap to <Navbar>
    - import { faBars, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
    - import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';

### 6. Styling Navbar

    - change container-fluid to container to have more space.
    - style <Navbar/>

### 7. Design Project Logo/Brand

    - add assets folder
    - style <Navbar/> && Logo

### 8. Design Dynamic Component & Footer Component

    -update & style <Main/> & pass it a props.
    - update & style <Footer/> .

### 9. Sign up with Github and Integration (alredy done)

### 10. Sign up with Netlify, Setting up CI / CD for the front end project.

## Section 2. Design the Project Landing Page for our App

### 11. Intro - Setting up the Landing Page

    - create components->LandingPage->LandingPage.js
    - import <Layout/> && <LandingPage/>
    - npm i react-router-dom
    - create components->Routes-><Route/> && App.js

### 12. Sprucing up the Landing Page

    - pass title as a props in <LandingPage/> && pass it in <Main>
    - define a background & backdrop props in <LandingPage/> && <Layout>
    - update <Main/> adding a conditionnal rendering for background image and title

### 13. Design a background for Landing Page

    - add section & style it in <LandingPage/>
    - update <Main/> adding a conditionnal rendering for background image and title (done in last section )

### 14. Designing the Dish Menu & Integration with Typed component

    - add src->assets->addI-images & LandingPage->Menu-><Menu/>
    - add Bootstrap <Card/> && <Menu/>
    - add <Menu/> && <LandingPage/>
    - npm install react-typed --force (for animated text)

### 15. CI/CD - Deploy to Netlify

## Section 3. Catalog Design

### 16. Intro to Catalog Design

    - create components->Catalogue-><Catalog/>

### 17. Carousel Design

    - npm install react-bootstrap bootstrap
    - add Boostrap caroussel in a function!
    - create UI->SlideShow-><SlideShow/> && <Catalog/>
    -style <SlideShow/>

## BACKEND

### 18. First Steps to API Driven Design

### 19. Intro to MongoDB on Cloud

### 20. API integration with Mongo

### 21. Designing our First API

### 22. Designing our First Mongo model

### 23. Designing API Error Handling Semantics

### 24. API - Create a Dish Category

### 25. Introduction to input validation on APIs

### 26. API End point - Retrieve Category By Id

### 27. Design API Endpoint to create a dish resource

### 28. Enhance API to work with binary data - upload dish image

### 29. API Input Data validation and Error Handling

### 30. API Endpoint to Fetch All Dishes

### 31. API Endpoint to retrieve dish photo

### 32. API Code Integration with Github

### 33. API Deploy to Cloud - Heroku

## FRONTEND

### 34. UI - API Integration - Setting up AXIOS

    - npm i axios && src->utils->AxiosInstance.js
    - create .env file & src->config->Config.js && utils->AxiosInstance.js

### 35. UI - API Integration - Getting Dish Data

    - update components->Catalog information
    - create src->api->category & dish
    - <Catalog/>

            - import {useEffect ,useState} & create init function.
            -import getDishList()
            - create  [dishes, setDishes] & [loading, setLoading] states.

### 36. UI-API Integration - Presenting Dish detail as Card Component

    -create components->UI-><BrowseCard/ > & BrowseCard.css
    - <Catalog/>

            - import <BrowseCard/> & pass dish as a props
            - create displayDishes()
            - add fontawesome cdn in public->index.html
            - create displayDishes & addDishToCart.js &&
            - pass addDishToCart ass a props in displayDishes

### 37. API Endpoint to Filter Dishes By Category

### 38. Dish Filtering on UI & Adding Event Handling to Filter Dishes

    - create UI->checkbox-group->CheckboxGroup.js && CheckboxGroup.css
    - <CheckboxGroup/>

            - Retrieve categories as a Props from <Catalog/>
            - create renderCheckboxGroup() & handleSelected()
            - create  [selected, setSelected] & handleSelected
            -

    -<Catalog/>
    - use api->category->getCategoryList() & get All Categories
    - create const [categories, setCategories]
    - pass handleFiltering as props to <CheckboxGroup/>
    - create getFilteredDishes() & api->dish->getFilteredDishList()

### 39. Adding Event Handling to Filter Dishes (done in the previous section) - 39Bis

    - pass handleFiltering as props to <CheckboxGroup/>
    - create getFilteredDishes() & api->dish->getFilteredDishList()

### 40. Display Filtered Dishes

    <Catalog/>
    - add a conditionnal rendering in Catalog->getFilteredDishes
    - components->Layout->navbar : add a conditionnal rendering for active style.

### 41. Designing a Spinner Component for our app

    - npm i react-spinners
    - create components-> UI->spinner && <Catalog/> & <CheckboxGroup/>
    - App.css
    - add a conditionnal rendering for spinner in <Catalog/>

### 42. Design Adding dishes To Cart

    - create components->cart->caddDishToCart() && <Catalog/>
    - npm i react-notifications

### 43. Design Notification Component to our App

    - create UI->notification && <Catalog/>
    - create showNotification && closeHandler

### 44. Deploy to Cloud - Heroku

    - add the heroku endPoint in env file by changing: REACT_APP_API_BASE_URL=http://localhost:xxxx

### 45. Deploy to Netlify - Connect Two Clouds

    - npm install netlify-cli -g
    - in the terminal: netlify login , netlify status, netlify link(Choose from a list of your recently updated sites).
    - sudo netlify env:import .env

## Section 4. Cart Component Design

### 46. Cart Component Design

    - update a link informations
    - create components->Cart-><Cart/>
    - <Cart/> && <Routes/>

### 47. Quick Detour - CORS Review, Key element of distributed app

### 48. CORS Review - Continued

### 49. Cart Management on Browser

    - create Cart->cartHandler->getCart(),getCartTotal() & getTotalItemsInCart()

### 50. Cart Component - Unauthenticated View

    - update <Cart/> informations
    - update position of main elements in Main->Main.css
    - update App.css file

### 51. Cart Component - Unauthenticated View Continued

    - update <Cart/> informations

### 52. Cart Component - Render Cart

    - <Cart/>

            - import { useState, useEffect } from 'react';
            - const [dishes, setDishes] = useState([]);
            - create init() && useEffect()
            - create showCart() && renderCart()
            - create UI-><MenuCard/>

### 53. Cart Component UI Event Handling

    - Cart -> cartHandler -> updateDishQuantity() & removeDishFromCart()
    - use them in <Cart/> & update updateCart

### 54. Cart Component - Notification Integration

    - <Cart/>

            - create [show, setShow] & [notificationText, setNotificationText]
            - update updateCart &removeDish

## Section 5. Protecting your App

### 55. Intro to auth0 - sign up

- https://auth0.com/docs/quickstart/spa/react/interactive
- Quickstarts -> npm install @auth0/auth0-react
- create REACT_APP_AUTH0_CLIENT_ID & REACT_APP_AUTH0_DOMAIN in .env
- create const DOMAIN & CLIENT_ID in config.js && index.js

### 56. Design of Sign In and Sign out Flows

    - create Auth->Signin,Signout,Signup && Routes.jsx

### 57. Integration with Navbar

    - <Navbar/>

            - import { useAuth0 } from '@auth0/auth0-react';
            - add a conditionnal rendering for Sign In,Register and Sign out in <Navbar/>.
            - test all the script

### 58. Auth0 integration with Netlify - CI/CD

- sudo netlify env:list
- sudo netlify env:import .env
- go to the Auth0 application,set Settings page and make sure you are sending a valid callback url

            - add https://pariscafe.netlify.app/  in settings

### 59. Spinner Integration

    - update Main->Main.css & Footer->Footer.css files.
    - update UI->spinner script by adding a type conditionnal rendering.

### 60. Auth0 - Sign In Flow

### 61. Auth0 User Profile

    - create Auth->Profile-><Profile/> && <Navbar/>

### 62. API Endpoint - User Creation

- import { useAuth0 } from '@auth0/auth0-react';
- destructure { user, isAuthenticated, getAccessTokenSilently } & add a conditionnal rendering
- test the script & retrieve the user in our database using the backend part.

### 63. API Endpoint User Creation - Testing

### 64. UI - User Creation on First Login

    - create api->user->createUser() && App.js

### 65. UI - Exactly Once User Creation

    - update App.js file
    - create a rule : Auth Pipeline -> create a new Rule.
    -save and try rule & save rule.

### 66. Auth0 API Security - JSON Web Tokens, Protecting your backend APIs

    -auth0... ->dashboard->application->APIs->creatAP-
    - create .env -> AUDIENCE equivalent to identifier in Auth0 && index.js

### 67. API Integration with auth0 security

### 68. UI - Auth0 - API Integration

### 69. CI / CD - Deploy to Heroku and Netlify

    - deploy the script in Netlify

## Section 6. Back to Cart - Authenticated view

### 70. Cart Component - Integration with auth0

    - import { useAuth0 } from '@auth0/auth0-react';
    - add a conditionnal rendering to Signin to Checkout.
    - import getTotalItemsInCart & add cart icon in <Navbar/>
    - update <Navbar/>

### 71. UI - Responsive Design

    - create UI-><Slider/>,slider.css & <Controls/> && <Cart/>

### 72. Responsive Design , Favicon Design and UI Changes

    -change REACT_APP_API_BASE_URL
    - add REACT_APP_IMG_URL in config and .env file
    - update <BrowseCard/> and <MenuCard/> & restart app because of changes
    - add a favicon to our project (https://redketchup.io/favicon-generator)
    - add favicon in public folder and update manifest.json

### 73. CI / CD - Deploy to Netlify

    - sudo netlify env:import .env
    - create a pullRequest and merge with main
    - change proxy

### 74. CI / CD - Deploy to Netlify

    - update .env
    - create a pullRequest and merge with main

## Section 7. Preparing for checkout

### 75. API Endpoint - Address Capture

### 76. Mongo Model Update

### 77. Form Design - Address Data

    - create checkoutForm -> <CheckoutForm/> && <Cart/>
    - npm i formik yup react-phone-input-2 deep-equal
    - create component -> FormError-> <Error/>
    - add a constionnal rendering to <Cart/>

### 78. API Integration with Address Form Prefill

    - create api->user-> updateUserAddress() et getUserAddress() && <Cart/>
    - test <Cart/>

### 79. API Integration Address Form Prefill - Continued

    - update <CheckoutForm/> and CheckoutForm.css

### 80. API Integration Address Save / Update

    - api->user->updateUserAddress() && <Cart/> -> updateAddress()
    - use updateAddress as a props in <Cart/> -> <CheckoutForm/>

### 81. CI/CD - Deploy to Netlify

    - deploy Preparing for checkout to Netlify

### 82. Spinner Integration

    - <AppSpinner/> && <Cart/>
    - update <Notification/> && <Cart/>

## Section 8. Payments Workflow Design

### 83. Intro to Stripe and Stripe Signup

    - signup in stripe and update branding in Settings
    - create a payement test & go to developper -> payment online
    - choose Page Checkout prédéfinie for Prebuilt Checkout page & test

### 84. Stripe Integration

### 85. Testing Stripe Integration

### 86. API - Create Order

### 87. Testing Create Order

    - create api->order->index.js
    - update util->AxiosInstance.js.
    - <Cart/>

            - saveOrder() && as props -> <checkoutForm/>
            -  const [loading, setLoading] = useState(false);

### 88. End-End Testing - Order Creation

    - <Cart/>

            - update useEffect ->
            - create cartHandler->emptyCart()
            - create [checkoutProgress, setCheckoutProgress]...
            - create showSuccessMessage() & displayEmptyCartMessage

### 89. End-to-End Testing Order Creation - Continued

    - add style in <Cart/>

### 90. Order CANCEL Flow

    - <Cart/>

             - update useEffect and create orderUpdateHandler()
             - create showCancelMessage ()

### 91. Stripe Webhook - ORDER Fulfilment

    - documentation (https://stripe.com/docs/payments/checkout/fulfill-orders)

### 92. Stripe Webhook - ORDER Fulfilment - Continued

    - update <Cart/>

### 93. ORDER Fulfilment - Messaging

### 94. Tiny Url Service - Sign Up with Bitly

### 95. Bitly Integration with the App

### 96. API Testing - ORDER Fulfilment

### 97. API Security - Testing with JWT Tokens from auth0

### 98. E-2-E Testing ORDER Fulfilment

    - pass props to Signin checkout Link in <Cart/> && <Sigin> to redirect user
    - create components->utils->history->createBrowserHistory() && index.js
    - Redirect the user to the <Cart/>

### 99. API Dealing with ABANDONED Orders

### 100. API Dealing with ABANDONED Orders

### 101. E-2-E Testing ABANDONED Orders

      - create api->order->index->updateOrderStatus()
      - update <Cart/>
      - update folder and files

### 102. CI / CD - Deploy to Cloud

- https://pariscafe.netlify.app deployed to Netlify
- create redirect file in public folder because of netlify redirect error after paying or cancelling payment

### 103. Testing ORDER , Payment Flows on Cloud

- test Payments Workflow using random user.

## Section 9. ORDER Management Workflow

### 104. Designing ORDER Component

- create <Order/> && <Navbar/>

### 105. UI Integration with API

- create getMyOrders api method && <Orders/>

### 106. Display ORDERs in Accordion Component

- use Bootstrap accordeon to display order details

### 108. Protected Routes, Forced Authentication

- Use Auth0 documentation to Protect routes. Ref to Documentary References below.
- create Auth-><ProtectedRoute/>,<NotLoggedInRoutes/>,LoggedInRoutes && <Routes/>

### 109. UI - ORDER Component Design

- create <Order/>,<OrderListing/>,<OrderStatus/>,<TrakingCard/>,<Address/> & <OrderTrackerVertical/>
- pass order from <Accordeon/> to <Order/>

### 110. UI - Responsive Design

### 111. CI / CD - Deploy to Cloud

- deploy to Netlify

## Section 10. ORDER Management Workflow

### 112. Intro - ADMIN Interface

- update <Profile/>

### 113. ADMIN Profile , Retrieve ORDERS

- Update <Navbar/>, <Orders/>

### 114. Implementing Authorization - embedding SCOPEs in JWT tokens

- create api getOrdersForAdmin && <Orders/>

### 115. Display ADMIN Orders, Implement Filter Logic

- update <Orders/>

### 116. Implement Filter Orders on STATE

- filter input in <Orders/> using showOrdersForState()
- add <Notification/>

### 117. API Implement ACCEPT Orders Flow

- update <Order/>

### 118. UI Integration - ACCEPT Flow

- update updateOrderStatus method api & <OrderStatus/>

### 119. UI Testing ACCEPT Flow

- test all process

### 120. CI/CD - Deploy to Cloud

- deployed to Netlify Cloud

## Section 11. ORDER Refund Flow

### 121 API - CANCEL Order

- update <Orders/>

### 122 UI Integration - CANCEL Flow

- create cancelOrder api method && <Order/>
- set user permissions to cancelOrder

### 123 E-2-E Testing CANCEL Flow

### 124 CI/CD - Deploy to Cloud

## Section 11. ORDER State Refresh - On Demand - Pull Model

### 125. UI Integration, Stripe Idempotent Requests

- create getOrderStatus api method && <Order/>

### 126. Retrieve ORDER by Id

### 127. UI Integration with multiple flows

### 128. CI/CD - Deploy to Cloud

### 129. Validating the Deploy on cloud

---

### 📚 REST API Dependencies

- 🔗 [moment](https://www.npmjs.com/package/moment)

### 📚 Documentary References

- 🔗 [The Complete Guide To React User Authentication with Auth0](https://auth0.com/blog/complete-guide-to-react-user-authentication/)
- 🔗 [React Login with Auth0](https://auth0.com/docs/quickstart/spa/react/01-login#show-user-profile-information)
