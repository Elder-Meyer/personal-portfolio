import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "../../components/material-ui/Box";
import { Button } from "../../components/material-ui/Button";
import { Grid } from "../../components/material-ui/Grid";
import { Paper } from "../../components/material-ui/Paper";
import { Typography } from "../../components/material-ui/Typography";
import { TextField } from '@mui/material'
import { Delete, Send,  } from "@mui/icons-material";
import { useContactForm } from "../../context/useContactForm"
import { PopUpAlert } from "../../components/items/PopUpAlert";

export const FormContact = () => {
  const { t } = useTranslation()
  const form = useRef()
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [variantAlert, setVariantAlert] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const formik = useContactForm({ setTextAlert, setSnackbarOpen, setVariantAlert, form, t })
    
  return (
    <Paper sx={{ p: {xs:1, sm:3, md:5}, mx: {xs: 1, sm: 2, md: 10, lg: 20, xl: 50 }}} elevation={0}>
      <Typography variant="h4" color="primary" textAlign="center"> {t("contact.title")} </Typography>
      <Typography variant="body1" color="primary.light" textAlign="center" mb={3}> {t("contact.subtitle")} </Typography>
      <PopUpAlert snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} variantAlert={variantAlert} textAlert={textAlert} />
      <Box component="form" ref={form} onSubmit={formik.handleSubmit} autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="text" name="name" required
              label={t("contact.form.name")}
              onChange={formik.handleChange}
              error={formik.errors.name ? true : false}
              helperText={formik.errors.name}
              value={formik.values.name}
              aria-label="por favor ingrese tu nombre"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth type="email" name="email" required
              label={t("contact.form.email")}
              onChange={formik.handleChange}
              error={formik.errors.email ? true : false}
              helperText={formik.errors.email}
              value={formik.values.email}
              aria-label="por favor ingrese tu correo electronico"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth type="text" name="message" multiline maxRows={10} minRows={5}
              label={t("contact.form.message")}
              onChange={formik.handleChange}
              error={formik.errors.message ? true : false}
              helperText={formik.errors.message}
              value={formik.values.message}
              aria-label="por favor ingrese su correo electronico"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit" fullWidth variant="contained"
              aria-label="enviar formulario de acceso"
              endIcon={<Send />}
            >
              {t("contact.form.pbtn")}
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="button" fullWidth variant="outlined"
              aria-label="limpiar formulario de acceso"
              onClick={formik.handleReset}
              endIcon={<Delete />}
            >
              {t("contact.form.sbtn")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};