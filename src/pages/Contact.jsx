import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

const Contact = () => {
  const toast = useRef(null);

  const showSuccessToast = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: "Your contact information has been submitted.",
    });
  };

  return (
    <div className="card flex justify-content-center">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          phone: Yup.string()
            .matches(/^\d{10}$/, "Invalid phone number")
            .required("Phone number is required"),
          subject: Yup.string().required("Subject is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          // Perform your submit action here
          showSuccessToast();
          resetForm();
        }}
      >
        <Form className="flex flex-column gap-2">
          <Toast ref={toast} />
          <div className="p-fluid">
            <span className="p-float-label">
              <i className="pi pi-user" />
              <Field id="name" name="name" type="text" as={InputText} />
              <label htmlFor="name">Name</label>
            </span>
            <ErrorMessage name="name" component="div" className="p-error" />
          </div>
          <div className="p-fluid">
            <span className="p-float-label">
              <i className="pi pi-envelope" />
              <Field id="email" name="email" type="email" as={InputText} />
              <label htmlFor="email">Email</label>
            </span>
            <ErrorMessage name="email" component="div" className="p-error" />
          </div>
          <div className="p-fluid">
            <span className="p-float-label">
              <i className="pi pi-phone" />
              <Field id="phone" name="phone" type="text" as={InputText} />
              <label htmlFor="phone">Phone Number</label>
            </span>
            <ErrorMessage name="phone" component="div" className="p-error" />
          </div>
          <div className="p-fluid">
            <span className="p-float-label">
              <i className="pi pi-pencil" />
              <Field id="subject" name="subject" type="text" as={InputText} />
              <label htmlFor="subject">Subject</label>
            </span>
            <ErrorMessage name="subject" component="div" className="p-error" />
          </div>
          <Button label="Submit" type="submit" icon="pi pi-check" />
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
