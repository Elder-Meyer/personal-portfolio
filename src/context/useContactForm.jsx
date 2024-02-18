import { useState }               from "react";
import * as Yup                   from "yup";
import { useFormik }              from "formik";
import emailjs                    from '@emailjs/browser'

export const useContactForm = ({ setTextAlert, setSnackbarOpen, setVariantAlert, form }) => {
  const handleSubmit = async (data) => {
    console.log(data)
    sendEmail(form, setVariantAlert, setTextAlert, setSnackbarOpen)
  };

  const formikBag = useFormik({
    initialValues: {
      name : "",
      email : "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string().email().required("Esl correo es obligatorio"),
    //   message: Yup.string().required("El mensaje es obligatorio"),
    }),
    onSubmit: (formData) => {
      formikBag.handleReset();
      handleSubmit(formData);
    },
  });

  return formikBag;
};


const sendEmail = (form, setVariantAlert, setTextAlert, setSnackbarOpen) => {
  emailjs
    .sendForm('service_sbks8j7', 'template_poglmy6', form.current, {
      publicKey: 'Dp0PXdHBw9twu_g_e',
    })
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setVariantAlert("success")
        setTextAlert("El mensaje se ha enviado correctamente");
        setSnackbarOpen(true)
      },
      (error) => {
        console.log(error.text);
        console.error("error");
        setVariantAlert("error")
        setTextAlert("Hubo un problema al enviar el correo");
        setSnackbarOpen(true)
      }
    );
};