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

Parfois et bien souvent, il est mieux d’avancer dans l’ombre que dans la lumière.
Beaucoup s’exposent trop vite et tombent également vite.
Faites preuve de patience et de sagesse.
