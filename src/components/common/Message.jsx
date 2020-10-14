import React from "react";
import { Redirect, useLocation } from "react-router-dom";

function Message() {
  const { state } = useLocation();
  const { isAuthenticated, isSuccess } = state;
  if (isAuthenticated)
    return (
      <div className="message__container">
        <div
          className="message-card"
          style={{
            borderColor: isSuccess ? "green" : "#FF0101d2",
            backgroundColor: isSuccess ? "green" : "#FF0101d2",
          }}
        >
          <div className="message__heading">
            <h2>{isSuccess ? "Success" : "Failure"}</h2>
          </div>
          <div className="body">
            <p>
              {isSuccess
                ? "Transaction Successfully Processed"
                : "Transaction Failed"}
            </p>
          </div>
        </div>
      </div>
    );
  else {
    return <Redirect to="/home" />;
  }
}

export default Message;
