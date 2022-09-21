FRONTEND

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

8.  Design Dynamic Component & Footer Component
    I.update & style <Main/> & pass it a props.
    II. update & style <Footer/> .

9.  Sign up with Github and Integration (alredy done)
10. Sign up with Netlify, Setting up CI / CD for the front end project.

Section 2. Design the Project Landing Page for our App

11. Intro - Setting up the Landing Page
    I. create components->LandingPage->LandingPage.js
    II. import <Layout/> && <LandingPage/>
    III. npm i react-router-dom
    IV. create components->Routes-><Route/> && App.js

12. Sprucing up the Landing Page
    I. pass title as a props in <LandingPage/> && pass it in <Main>
    II. define a background & backdrop props in <LandingPage/> && <Layout>
    III. update <Main/> adding a conditionnal rendering for background image and title

13. Design a background for Landing Page
    I. add section & style it in <LandingPage/>
    II. update <Main/> adding a conditionnal rendering for background image and title (done in last section )

14. Designing the Dish Menu & Integration with Typed component
    I. add src->assets->addI-images & LandingPage->Menu-><Menu/>
    II. add Bootstrap <Card/> && <Menu/>
    III. add <Menu/> && <LandingPage/>
    IV. npm install react-typed --force (for animated text)

15. CI/CD - Deploy to Netlify

Section 3. Catalog Design

16. Intro to Catalog Design
    I. create components->Catalogue-><Catalog/>

17. Carousel Design
    I. npm install react-bootstrap bootstrap
    II. add Boostrap caroussel in a function!
    III. create UI->SlideShow-><SlideShow/> && <Catalog/>
    IV.style <SlideShow/>

BACKEND

18. First Steps to API Driven Design
19. Intro to MongoDB on Cloud
20. API integration with Mongo
21. Designing our First API
22. Designing our First Mongo model
23. Designing API Error Handling Semantics
24. API - Create a Dish Category
25. Introduction to input validation on APIs
26. API End point - Retrieve Category By Id
27. Design API Endpoint to create a dish resource
28. Enhance API to work with binary data - upload dish image
29. API Input Data validation and Error Handling
30. API Endpoint to Fetch All Dishes
31. API Endpoint to retrieve dish photo
32. API Code Integration with Github
33. API Deploy to Cloud - Heroku

FRONTEND

34. UI - API Integration - Setting up AXIOS
    I. npm i axios && src->utils->AxiosInstance.js
    II. create .env file & src->config->Config.js && utils->AxiosInstance.js

35. UI - API Integration - Getting Dish Data
    I. update components->Catalog information
    II. create src->api->category & dish
    III. <Catalog/>

            I. import {useEffect ,useState} & create init function.
            II.import getDishList()
            III. create  [dishes, setDishes] & [loading, setLoading] states.

36. UI-API Integration - Presenting Dish detail as Card Component

    I.create components->UI-><BrowseCard/ > & BrowseCard.css
    II. <Catalog/>

            I. import <BrowseCard/> & pass dish as a props
            II. create displayDishes()
            III. add fontawesome cdn in public->index.html
            IV. create displayDishes & addDishToCart.js &&
            V. pass addDishToCart ass a props in displayDishes

37. API Endpoint to Filter Dishes By Category

38. Dish Filtering on UI & Adding Event Handling to Filter Dishes
    I. create UI->checkbox-group->CheckboxGroup.js && CheckboxGroup.css
    II. <CheckboxGroup/>

            I. Retrieve categories as a Props from <Catalog/>
            II. create renderCheckboxGroup() & handleSelected()
            III. create  [selected, setSelected] & handleSelected
            IV.

    III.<Catalog/>
    I. use api->category->getCategoryList() & get All Categories
    II. create const [categories, setCategories]
    III. pass handleFiltering as props to <CheckboxGroup/>
    IV. create getFilteredDishes() & api->dish->getFilteredDishList()

39. Adding Event Handling to Filter Dishes (done in the previous section) - 39Bis
    I. pass handleFiltering as props to <CheckboxGroup/>
    II. create getFilteredDishes() & api->dish->getFilteredDishList()

40. Display Filtered Dishes
    <Catalog/>
    I. add a conditionnal rendering in Catalog->getFilteredDishes
    II. components->Layout->navbar : add a conditionnal rendering for active style.

41. Designing a Spinner Component for our app
    I. npm i react-spinners
    II. create components-> UI->spinner && <Catalog/> & <CheckboxGroup/>
    III. App.css
    IV. add a conditionnal rendering for spinner in <Catalog/>

42. Design Adding dishes To Cart
    I. create components->cart->caddDishToCart() && <Catalog/>
    II. npm i react-notifications

43. Design Notification Component to our App
    I. create UI->notification && <Catalog/>
    II. create showNotification && closeHandler

44. Deploy to Cloud - Heroku
    I. add the heroku endPoint in env file by changing: REACT_APP_API_BASE_URL=http://localhost:xxxx

45. Deploy to Netlify - Connect Two Clouds
    I. npm install netlify-cli -g
    II. in the terminal: netlify login , netlify status, netlify link(Choose from a list of your recently updated sites).
    III. sudo netlify env:import .env

Section 4. Cart Component Design

46. Cart Component Design
    I. update a link informations
    II. create components->Cart-><Cart/>
    III. <Cart/> && <Routes/>

47. Quick Detour - CORS Review, Key element of distributed app
48. CORS Review - Continued

49. Cart Management on Browser
    I. create Cart->cartHandler->getCart(),getCartTotal() & getTotalItemsInCart()

50. Cart Component - Unauthenticated View
    I. update <Cart/> informations
    II. update position of main elements in Main->Main.css
    III. update App.css file

51. Cart Component - Unauthenticated View Continued
    I. update <Cart/> informations

52. Cart Component - Render Cart
    I. <Cart/>

            I. import { useState, useEffect } from 'react';
            II. const [dishes, setDishes] = useState([]);
            III. create init() && useEffect()
            IV. create showCart() && renderCart()
            V. create UI-><MenuCard/>

53. Cart Component UI Event Handling
    I. Cart -> cartHandler -> updateDishQuantity() & removeDishFromCart()
    II. use them in <Cart/> & update updateCart

54. Cart Component - Notification Integration
    I. <Cart/>

            I. create [show, setShow] & [notificationText, setNotificationText]
            II. update updateCart &removeDish

Section 5. Protecting your App

55. Intro to auth0 - sign up
    I. https://auth0.com/docs/quickstart/spa/react/interactive
    II. Quickstarts -> npm install @auth0/auth0-react
    III. create REACT_APP_AUTH0_CLIENT_ID & REACT_APP_AUTH0_DOMAIN in .env
    IV. create const DOMAIN & CLIENT_ID in config.js && index.js

56. Design of Sign In and Sign out Flows
    I. create Auth->Signin,Signout,Signup && Routes.jsx

57. Integration with Navbar
    I. <Navbar/>

            I. import { useAuth0 } from '@auth0/auth0-react';
            II. add a conditionnal rendering for Sign In,Register and Sign out in <Navbar/>.
            III. test all the script

58. Auth0 integration with Netlify - CI/CD

    I. sudo netlify env:list
    II. sudo netlify env:import .env
    III. go to the Auth0 application,set Settings page and make sure you are sending a valid callback url

            I. add https://pariscafe.netlify.app/  in settings

59. Spinner Integration
    I. update Main->Main.css & Footer->Footer.css files.
    II. update UI->spinner script by adding a type conditionnal rendering.

60. Auth0 - Sign In Flow
61. Auth0 User Profile
    I. create Auth->Profile-><Profile/> && <Navbar/>

62. API Endpoint - User Creation
    I. import { useAuth0 } from '@auth0/auth0-react';
    II. destructure { user, isAuthenticated, getAccessTokenSilently } & add a conditionnal rendering
    III. test the script & retrieve the user in our database using the backend part.

63. API Endpoint User Creation - Testing

64. UI - User Creation on First Login
    I. create api->user->createUser() && App.js

65. UI - Exactly Once User Creation
    I. update App.js file
    II. create a rule : Auth Pipeline -> create a new Rule.
    III.save and try rule & save rule.

66. Auth0 API Security - JSON Web Tokens, Protecting your backend APIs

    I.auth0... ->dashboard->application->APIs->creatAPI.
    II. create .env -> AUDIENCE equivalent to identifier in Auth0 && index.js

67. API Integration with auth0 security
68. UI - Auth0 - API Integration

69. CI / CD - Deploy to Heroku and Netlify
    I. deploy the script in Netlify

Section 6. Back to Cart - Authenticated view

70. Cart Component - Integration with auth0
    I. import { useAuth0 } from '@auth0/auth0-react';
    II. add a conditionnal rendering to Signin to Checkout.
    III. import getTotalItemsInCart & add cart icon in <Navbar/>
    IV. update <Navbar/>

71. UI - Responsive Design
    I. create UI-><Slider/>,slider.css & <Controls/> && <Cart/>

72. Responsive Design , Favicon Design and UI Changes
    I.change REACT_APP_API_BASE_URL
    II. add REACT_APP_IMG_URL in config and .env file
    III. update <BrowseCard/> and <MenuCard/> & restart app because of changes
    IV. add a favicon to our project (https://redketchup.io/favicon-generator)
    V. add favicon in public folder and update manifest.json

73. CI / CD - Deploy to Netlify
    I. sudo netlify env:import .env
    II. create a pullRequest and merge with main
    III. change proxy

74. CI / CD - Deploy to Netlify
    I. update .env
    II. create a pullRequest and merge with main

Section 7. Preparing for checkout

75. API Endpoint - Address Capture
76. Mongo Model Update

77. Form Design - Address Data
    I. create checkoutForm -> <CheckoutForm/> && <Cart/>
    II. npm i formik yup react-phone-input-2 deep-equal
    III. create component -> FormError-> <Error/>
    IV. add a constionnal rendering to <Cart/>

78. API Integration with Address Form Prefill
    I. create api->user-> updateUserAddress() et getUserAddress() && <Cart/>
    II. test <Cart/>

79. API Integration Address Form Prefill - Continued
    I. update <CheckoutForm/> and CheckoutForm.css

80. API Integration Address Save / Update
    I. api->user->updateUserAddress() && <Cart/> -> updateAddress()
    II. use updateAddress as a props in <Cart/> -> <CheckoutForm/>

81. CI/CD - Deploy to Heroku and Netlify
    I.
82. Spinner Integration
