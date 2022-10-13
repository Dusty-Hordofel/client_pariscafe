import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { useFormik } from "formik";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import _ from "lodash";
import { createCategory } from "../../../api/category";
import { CLAIMS_URI } from "../../../config/Config";

import AppSpinner from "../../UI/Spinner/AppSpinner";
import { Notification } from "../../UI/Notification/Notification";
import AdminTasks from "../../UI/AdminTasks/AdminTasks";
import Error from "../../FormError/Error";
import "../../FormError/Error.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Input required")
    .min(5, "At least 5 characters required")
    .max(20, "At most 20 characters required"),
});

const AddCategory = () => {
  const { user, isAuthenticated } = useAuth0();
  const isAdmin =
    isAuthenticated && user[`${CLAIMS_URI}/role`].includes("admin");

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  //TODO: formik validationSchema
  const formik = useFormik({
    initialValues: { name: "" },
    onSubmit: (values) => {
      console.log(values);
      createHandler(values.name);
    },
    validationSchema,
  });

  //TODO: destructure formik values
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    resetForm,
  } = formik;

  const closeHandler = () => {
    setShow(false);
  };

  const displayNotification = () =>
    show && (
      <Notification show={show} text={notificationText} close={closeHandler} />
    );

  const createHandler = async (name) => {
    try {
      setLoading(true);
      const result = await createCategory(name);
      console.log(result.data);
      setLoading(false);
      setNotificationText("Category created successfully.");
      setShow(true);
      resetForm();
    } catch (error) {
      setLoading(false);

      if (error.response) {
        console.log(
          "🚀 ~ file: AddCategory.js ~ line 57 ~ createHandler ~ error.response",
          error.response.data
        );
        const { message } = error.response.data.error;
        setNotificationText(message);
        setShow(true);
      }
    }
  };

  const buildForm = () => (
    <div className="d-flex justify-content-center flex-wrap">
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter category name ..."
            id="name"
            size="40"
            style={{
              borderRadius: "5px",
              padding: "7px",
              outline: "none",
              border: "2px solid lightblue",
            }}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.name && errors.name ? "error mt-2" : "mt-2"}
          />
          <Error touched={touched.name} message={errors.name} />
          <div className="input-row mt-5">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ padding: "5px 130px" }}
              disabled={isSubmitting || !_.isEmpty(errors)}
            >
              CREATE
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  const renderAddCategory = () => (
    <Layout title="Add Category">
      {displayNotification()}
      {loading && <AppSpinner />}
      <div className="row justify-content-center">
        <div className="col col-md-2 mt-5">
          <AdminTasks />
        </div>
        <div className="col col-md-6 mt-4">{buildForm()}</div>
      </div>
    </Layout>
  );

  return <>{isAdmin ? renderAddCategory() : <Navigate to="/" />}</>;
};

export default AddCategory;
