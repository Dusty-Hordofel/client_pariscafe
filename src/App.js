import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/Routes/Routes";

import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import io from "socket.io-client";
import { createUser } from "./api/user";
import { Notification } from "./components/UI/Notification/Notification";

import { CLAIMS_URI, WS_URL } from "./config/Config";

function App() {
  const socket = io(WS_URL, {
    transports: ["websocket"],
  });
  console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ socket", socket);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const isAdmin =
    isAuthenticated && user[`${CLAIMS_URI}/roles`].includes("admin");

  const createUserHandler = async () => {
    if (isAuthenticated) {
      const loginCount = parseInt(user[`${CLAIMS_URI}/logins`]) || 0;

      console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ user", user);
      const token = await getAccessTokenSilently();

      console.log(
        "🚀 ~ file: App.js ~ line 23 ~ createUserHandler ~ token",
        token
      );

      if (loginCount <= 1) {
        const result = await createUser(user, token);
        console.log("🚀 ~ file: App.js ~ line 22 ~ init ~ result", result.data);
      } else {
        console.log("USer already present in our system ....");
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  useEffect(() => {
    createUserHandler();

    if (isAuthenticated && !isAdmin) {
      const { sub } = user;
      const userId = sub.split("|")[1];

      socket.emit("add-user", { userId });

      socket.on("order-update", (data) => {
        console.log("🚀 ~ file: App.js ~ line 64 ~ socket.on ~ data", data);
        const { time, action, status } = data;
        const currentTime = moment(time).format("hh:mm:ss");
        const updateMessage = `${action} at ${currentTime} : Recent Order is in ${status} state`;
        setNotificationText(updateMessage);
        setShow(true);
      });
    }
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const closeHandler = () => {
    setShow(false);
  };

  const displayNotification = () =>
    show && (
      <Notification text={notificationText} show={show} close={closeHandler} />
    );

  const renderApp = () => {
    return (
      <>
        {displayNotification()}
        <Routes />
      </>
    );
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
