import React, {useState, useEffect} from "react";
import {withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


const UserForm = ({values}) => {
  return (
    <div>
      <Form>
        <label htmlFor= "name">Name:</label>
        <Field id="name" type="text" name="name" />
        <label htmlFor= "email">Email:</label>
        <Field id="email" type="email" name="email" />
        <label htmlFor= "password">Password:</label>
        <Field id="password" type="password" name="password" />
        <label >
          Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.termsOfService}
          />
          <span className="checkmark" />
        </label>
        <button>Submit</button>

      </Form>

    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({name, email, password, termsOfService}) {

  return {
    name:"",
    email: "",
    password:"",
    termsOfService
  };

  },
})(UserForm);
export default FormikUserForm;