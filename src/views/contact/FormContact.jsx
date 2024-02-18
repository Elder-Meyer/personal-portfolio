import React, { useRef, useState } from "react";
import { Container } from "../../components/material-ui/Container";
import { Paper } from "../../components/material-ui/Paper";
import { Typography } from "../../components/material-ui/Typography";
import Snackbar from '@mui/material/Snackbar'
import { useContactForm } from "../../context/useContactForm"
import MuiAlert from '@mui/material/Alert';
import { Grid } from "../../components/material-ui/Grid";
import { Button } from "../../components/material-ui/Button";
import { Box } from "../../components/material-ui/Box";
import TextField from '@mui/material/TextField'
import DeleteIcon                    from '@mui/icons-material/Delete';
import { Send } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const FormContact = () => {
    // captura de errores
    const [textAlert, setTextAlert] = useState("");
    // alerta y variante de la alerta
    const [variantAlert, setVariantAlert] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    
    const form = useRef()
    
    // validaciones y funcionamiento del formulario
    const formik = useContactForm({ setTextAlert, setSnackbarOpen, setVariantAlert, form })
    

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 2 }} elevation={0}>
        <Typography variant="h4" color="primary" textAlign="center">
          Contact
        </Typography>
        <Typography variant="body1" color="primary.light" textAlign="center" mb={3}>
          Lets get in touch, send me an email
        </Typography>
        {/* mensajes */}
        {/*alerta y loading*/}
        <Snackbar
          aria-label={textAlert}
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={variantAlert ? variantAlert : "error"}
            sx={{ width: "100%", color: "white" }}
            elevation={6}
            variant="filled"
          >
            {textAlert}
          </Alert>
        </Snackbar>
        {/* formulario */}
        <Box
          component="form"
          ref={form}
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    {/* name */}
                    <TextField
                        fullWidth
                        label="Name"
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        error={formik.errors.name ? true : false}
                        helperText={formik.errors.name}
                        value={formik.values.name}
                        aria-label="por favor ingrese tu nombre"
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* email */}
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        error={formik.errors.email ? true : false}
                        helperText={formik.errors.email}
                        value={formik.values.email}
                        aria-label="por favor ingrese tu correo electronico"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    {/* mensaje */}
                    <TextField
                        fullWidth
                        label="Message"
                        type="text"
                        name="message"
                        onChange={formik.handleChange}
                        error={formik.errors.message ? true : false}
                        helperText={formik.errors.message}
                        value={formik.values.message}
                        multiline
                        maxRows={10}
                        minRows={5}
                        aria-label="por favor ingrese su correo electronico"
                    />
                </Grid>


                <Grid item xs={12} md={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        aria-label="enviar formulario de acceso"
                        endIcon={<Send />}
                    >
                        Enviar
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        type="button"
                        fullWidth
                        variant="outlined"
                        aria-label="limpiar formulario de acceso"
                        onClick={formik.handleReset}
                        endIcon={<DeleteIcon />}
                    >
                        Limpiar
                    </Button>
                </Grid>

            </Grid>

        </Box>
      </Paper>
    </Container>
  );
};
