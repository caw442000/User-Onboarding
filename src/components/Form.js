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
        <label htmlFor= "email">Email:</label>
        <Field id="email" type="email" name="email" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <label htmlFor= "password">Password:</label>
        <Field id="password" type="password" name="password" />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <label >
          Terms of Service
          <Field
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
          />
          {touched.termsOfService && errors.termsOfService && (
          <p className="errors">{errors.termsOfService}</p>
        )}
          <span className="checkmark" />
        </label>
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
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required()

  }),
})(UserForm);
export default FormikUserForm;