import React from "react";
import { Snackbar, Alert, AlertTitle, Slide } from "@mui/material";

export const PopUpAlert = ({ snackbarOpen, setSnackbarOpen, variantAlert, textAlert }) => {
  return (
    <Snackbar
      open={snackbarOpen}
      onClose={() => setSnackbarOpen(false)}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      aria-label={textAlert}
      TransitionComponent={SlideTransition}
      sx={{ minWidth: "40%", maxWidth: "100%"}}
    >
      <Alert
        elevation={6}
        onClose={() => setSnackbarOpen(false)}
        severity={variantAlert ? variantAlert : "error"}
        sx={{ width: "100%" }}
      >
        <AlertTitle>{variantAlert}</AlertTitle>
        {textAlert}
      </Alert>
    </Snackbar>
  );
};

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}
