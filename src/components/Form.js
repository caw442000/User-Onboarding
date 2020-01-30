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




      </Form>
     
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({name}) {

  return {
    name:""
  };

  },
})(UserForm);
export default FormikUserForm;