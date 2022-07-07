import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik, Formik, Form } from 'formik';

function Login(props) {
  const [login, setLogin] = useState("Login")

  const [reset, setReset] = useState(false)

  let schemaobj, intival;

  if (login === "Login" && !reset) {
    schemaobj = {
      email: yup.string().required("required").email("please enter valid email id"),
      password: yup.string().min(6, "minimum 6 character required").required("required")
    }
    intival = {
      email: '',
      password: ''
    }
  } else if (login === "signup" && !reset) {
    schemaobj = {
      name: yup.string().required("required"),
      email: yup.string().required("required").email("please enter valid email id"),
      password: yup.string().min(6, "minimum 6 character required").required("required")
    }
    intival = {
      name: '',
      email: '',
      password: ''
    }
  }else{
    schemaobj = {
      email: yup.string().required("required").email("please enter valid email id")
    }
    intival = {
      email: ''
    }
  }

  let schema = yup.object().shape(schemaobj);

  const formikobj = useFormik({
    initialValues: intival,
    validationSchema: schema,

    enableReinitialize: true,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm()
    },
  });

  const handleSubmitData = () => {
    console.log(values);
    formikobj.resetForm()
    formikobj.setValues({});
    console.log(values);
  }

  const { handleSubmit, handleChange, errors, handleBlur, touched, values } = formikobj


  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          {reset ?
            <h2>
              forget password
            </h2>
            :
            login === "Login" ?
              <h2>Login</h2>
              :
              <h2>signup</h2>
          }


        </div>
        <Formik initialValues={intival} values={formikobj}>
          <Form onSubmit={handleSubmit} className="php-email-form">

            {
              reset ?
                null
                :
                login === "Login" ?
                  null
                  :
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                      <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>

                    </div>
                  </div>
            }
            <div className="row">
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>

              </div>
            </div>

            {
              reset ?
                null
                :
                <div className="row">
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    <p className='text-danger'>{errors.password && touched.password ? errors.password : ''}</p>
                  </div>
                </div>

            }
            {
              login === "Login" ?
                <div>
                  Create a new account  <button type='button' onClick={() => { setLogin("signup"); setReset(false) }}>Signup</button>
                  <br></br>

                </div>
                :
                <div>
                  Already have an account  <button type='button' onClick={() => { setLogin("Login"); setReset(false) }}>Login</button>
                </div>
            }
            <button type='button' onClick={() => { setReset(true) }}>forget password</button>

            {
              reset ?
                <div className="text-center"><button type="submit">submit</button></div>
                :
                login === "Login" ?
                  <div className="text-center"><button type="submit">Login</button></div>
                  :
                  <div className="text-center"><button type="submit">Signup</button></div>
            }



          </Form>
        </Formik>

      </div>
    </section>

  );
}

export default Login;