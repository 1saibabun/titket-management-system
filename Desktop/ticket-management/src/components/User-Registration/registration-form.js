import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { saveToLocalStorage } from "./localStorageHelper";

const RegistrationForm = ({ initialData, onSave }) => {
  const formik = useFormik({
    initialValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      password: initialData?.password || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      saveToLocalStorage(values);
      onSave(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-control ${
            formik.touched.name && formik.errors.name ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="invalid-feedback">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${
            formik.touched.email && formik.errors.email ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="invalid-feedback">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={`form-control ${
            formik.touched.password && formik.errors.password ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="invalid-feedback">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
