import * as Yup                   from "yup";
import { useFormik }              from "formik";
import emailjs                    from '@emailjs/browser'

export const useContactForm = ({ setTextAlert, setSnackbarOpen, setVariantAlert, form, t }) => {
  const handleSubmit = async (data) => {
    console.log(data)
    sendEmail(form, setVariantAlert, setTextAlert, setSnackbarOpen, t)
  };

  const formikBag = useFormik({
    initialValues: {
      name : "",
      email : "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("contact.form.helpname")),
      email: Yup.string().email(t("contact.form.helpemailtype")).required(t("contact.form.helpemail")),
    //   message: Yup.string().required("El mensaje es obligatorio"),
    }),
    onSubmit: (formData) => {
      formikBag.handleReset();
      handleSubmit(formData);
    },
  });

  return formikBag;
};


const sendEmail = (form, setVariantAlert, setTextAlert, setSnackbarOpen, t) => {
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
        setSnackbarOpen(true)
      },
      (error) => {
        console.log(error.text);
        console.error("error");
        setVariantAlert("error")
        setTextAlert(t("contact.alert.error"));
        setSnackbarOpen(true)
      }
    );
};