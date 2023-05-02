import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Notification from "../notification/Notification";
import NotificationContext from "../../store/NotificationContext";

export default function Layout({ children }) {
  const { notification } = useContext(NotificationContext);
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}
