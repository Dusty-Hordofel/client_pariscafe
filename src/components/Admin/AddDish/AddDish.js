import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import _ from "lodash";
import Layout from "../../Layout/Layout";
import { Notification } from "../../UI/Notification/Notification";
import AppSpinner from "../../UI/Spinner/AppSpinner";
import AdminTasks from "../../UI/AdminTasks/AdminTasks";
import { getCategoryList } from "../../../api/category";
import { createDish } from "../../../api/dish";
import Error from "../../FormError/Error";
import "../../FormError/Error.css";
import { CLAIMS_URI } from "../../../config/Config";

import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

import "filepond/dist/filepond.min.css";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import "./AddDish.css";
import { Redirect } from "react-router-dom";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode
);

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Too short - min 5 characters")
    .max(10, "Too long - max 10 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Too short - min 10 characters")
    .max(15, "Too long - max 15 characters"),
  price: Yup.number()
    .required("Price is required")
    .min(75, "Min Rs.50")
    .max(250, "Max Rs. 250"),
  category: Yup.string().required("Category is required"),
});

const AddDish = () => {
  const { isAuthenticated, user } = useAuth0();

  const isAdmin =
    isAuthenticated && user[`${CLAIMS_URI}/role`].includes("admin");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [categories, setCategories] = useState([]);

  const [files, setFiles] = useState([]);

  const [img, setImg] = useState({
    data: "",
    type: "",
    size: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      photo: img,
    },
    onSubmit: (values) => {
      console.log(values);
      createHandler(values);
    },
    validationSchema,
    enableReinitialize: true,
  });

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    touched,
  } = formik;

  //TODO: Get getCategory List
  const getCategoiesFromDB = async () => {
    try {
      setLoading(true);
      const result = await getCategoryList();
      setCategories(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(
          "🚀 ~ file: AddDish.js ~ line 32 ~ getCategoiesFromDB ~ error.response",
          error.response.data.error
        );
      }
    }
  };

  //TODO: Show all categories
  const showCategoies = () => (
    <>
      <option value="">Select Category</option>
      {categories.map((category, i) => (
        <option value={category._id} key={category._id}>
          {" "}
          {category.name}
        </option>
      ))}
    </>
  );

  useEffect(() => {
    getCategoiesFromDB();
  }, []);

  const closeHandler = () => {
    setShow(false);
  };

  const displayNotification = () =>
    show && (
      <Notification text={notificationText} show={show} close={closeHandler} />
    );

  const createHandler = async (values) => {
    try {
      setLoading(true);
      const result = await createDish(values);
      console.log(
        "🚀 ~ file: AddDish.js ~ line 102 ~ createHandler ~ result",
        result.data
      );
      setLoading(false);
      setNotificationText("Dishe created successfully");
      setShow(true);
      resetForm();
      setImg({
        ...img,
        data: "",
        type: "",
        size: "",
      });
    } catch (error) {
      setLoading(false);

      if (error.response) {
        console.log(
          "🚀 ~ file: AddDish.js ~ line 110 ~ createHandler ~ error.response",
          error.response.data.error.message
        );
        setNotificationText(error.response.data.error.message);
        setShow(true);
      }
    }
  };

  const renderAddDishComponent = () => (
    <Layout title="Add Dish">
      {loading && <AppSpinner />}
      {displayNotification()}
      <div className="row justify-content-between mt-4">
        <div className="col-12 col-lg-3">
          <AdminTasks />
        </div>
        <div className="col-12 col-lg-5 order-2 order-lg-1 ">{buildForm()}</div>
        <div className="col-12 col-lg-3 order-1 order-lg-2">
          {createUploadPanel()}
        </div>
      </div>
    </Layout>
  );

  const buildForm = () => (
    <div className="d-flex justify-content-center flex-wrap">
      <form onSubmit={handleSubmit}>
        <div className="input-row mb-3">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter dish name ..."
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
            className={touched.name && errors.name && "error"}
          />
          <Error touched={touched.name} message={errors.name} />
        </div>
        <div className="input-row mb-3">
          <div>
            <label htmlFor="name">Description</label>
          </div>
          <textarea
            name="description"
            placeholder="Enter dish description ..."
            id="description"
            cols="40"
            style={{
              borderRadius: "5px",
              padding: "7px",
              outline: "none",
              border: "2px solid lightblue",
            }}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.description && errors.description && "error"}
          />
          <Error touched={touched.description} message={errors.description} />
        </div>

        <div className="input-row mb-3">
          <div>
            <label htmlFor="name">Price</label>
          </div>
          <input
            type="number"
            name="price"
            placeholder="Enter dish price ..."
            id="price"
            size="40"
            style={{
              borderRadius: "5px",
              padding: "7px",
              outline: "none",
              border: "2px solid lightblue",
              width: "320px",
            }}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.price && errors.price && "error"}
          />
          <Error touched={touched.price} message={errors.price} />
        </div>

        <div className="input-row mb-5">
          <div>
            <label htmlFor="name">Category</label>
          </div>
          <select
            name="category"
            id="category"
            style={{
              borderRadius: "5px",
              outline: "none",
              border: "2px solid lightblue",
              width: "320px",
            }}
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.category && errors.category && "error"}
          >
            {showCategoies()}
          </select>
          <Error touched={touched.category} message={errors.category} />
        </div>
        <div className="input-row mb-3 mt-5">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!_.isEmpty(errors) || !img.data}
            style={{ padding: "5px 135px" }}
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );

  const processFile = (files) => {
    setFiles(files);

    if (files && !files[0]) {
      return;
    }

    setImg({
      ...img,
      data: files[0].getFileEncodeBase64String(),
      type: files[0].fileType,
      size: files[0].fileSize,
    });
  };

  const createUploadPanel = () => {
    return (
      <div className="input-row mb-3">
        <div>
          <label htmlFor="name" className="text-dark">
            Upload Photo
          </label>
        </div>
        <FilePond
          files={files}
          name="files"
          onupdatefiles={(files) => processFile(files)}
          allowMultiple={false}
          instantUpload={false}
          allowProcess={false}
          server=""
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>
    );
  };

  return <>{renderAddDishComponent()}</>;
  //   return <>{isAdmin ? renderAddDishComponent() : <Redirect to="/" />}</>;
};

export default AddDish;
