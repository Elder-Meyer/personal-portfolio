import * as Yup                   from "yup";
import { useFormik }              from "formik";
import emailjs                    from '@emailjs/browser'

export const useContactForm = ({ setTextAlert, setSnackbarOpen, setVariantAlert, form, t }) => {
  const formikBag = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("contact.form.helpname")),
      email: Yup.string().email(t("contact.form.helpemailtype")).required(t("contact.form.helpemail")),
    }),
    onSubmit: (formData, { setSubmitting, resetForm }) => {
      sendEmail(form, setVariantAlert, setTextAlert, setSnackbarOpen, t, formData, setSubmitting, resetForm);
    },
  });

  return formikBag;
};

const sendEmail = (form, setVariantAlert, setTextAlert, setSnackbarOpen, t, data, setSubmitting, resetForm) => {
  console.log(data)
  emailjs
    .sendForm('service_sbks8j7', 'template_poglmy6', form.current, {
      publicKey: 'Dp0PXdHBw9twu_g_e',
    })
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setVariantAlert("success")
        setTextAlert(t("contact.alert.success"));
        setSnackbarOpen(true);
        setSubmitting(false); 
        resetForm();
      },
      (error) => {
        console.log(error.text);
        console.error("error");
        setVariantAlert("error")
        setTextAlert(t("contact.alert.error"));
        setSnackbarOpen(true);
        setSubmitting(false);
      }
    );
};
