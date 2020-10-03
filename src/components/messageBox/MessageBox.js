import React from "react";
import { useSelector, useDispatch } from "react-redux";
// redux
import { selectMessage } from "../../store/appState/selectors";
import { clearMessage } from "../../store/appState/actions";
// styles
import { Alert } from "react-bootstrap";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;

  if (!showMessage) return null;

  return (
    <Alert
      show={showMessage}
      variant={message.variant}
      dismissible={message.dismissable}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      {message.text}
    </Alert>
  );
}
