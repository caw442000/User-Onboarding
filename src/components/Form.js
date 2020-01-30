import React, {useState, useEffect} from "react";
import {withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


const UserForm = ({values, errors, touched, status}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);

    status && setUsers(users => [...users, status]);
  }, [status]);
  return (
    <div>
      <Form>
        <label htmlFor= "name">Name:</label>
        <Field id="name" type="text" name="name" />
        {touched.name && errors.name && (
          <p>{errors.name}</p>
        )}
        <label htmlFor= "email">Email:</label>
        <Field id="email" type="email" name="email" />
        {touched.email && errors.email && (
          <p>{errors.email}</p>
        )}
        <label htmlFor= "password">Password:</label>
        <Field id="password" type="password" name="password" />
        {touched.password && errors.password && (
          <p >{errors.password}</p>
        )}
        <label >
          Terms of Service
          <Field
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
          />
     
          <span/>
        </label>
        {touched.termsOfService && errors.termsOfService && (
          <p >{errors.termsOfService}</p>
        )}
        <button>Submit</button>

      </Form>
      {users.map (user =>(
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>




      ))}
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({name, email, password, termsOfService}) {

  return {
    name:"",
    email: "",
    password:"",
    termsOfService: termsOfService|| true
  };

  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Your Name is required to continue"),
    email: Yup.string().email().required("Need an email to find you"),
    password: Yup.string().required("Password or go away"),
    termsOfService: Yup.boolean(true)

  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting! ", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data); 
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);
export default FormikUserForm;