import React from 'react'
import styles from '../css/logincard.module.css'
import logo from '../assets/logo.png'
import Input from './Input'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    username: Yup.string().email('Enter a valid mail id').required('Required'),
    password: Yup.string()
              .required('No password provided.') 
              .min(8, 'Should be 8 chars minimum.')
});


const LoginCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.logoholder}>
            <img src={logo} alt='logo' />
        </div>
        <h3 className={styles.text}>Please login to Continue</h3>
        <Formik 
           initialValues={{
           userName: '',
           password: '',
          }}
           validationSchema={loginSchema}
            onSubmit={values => {
                console.log(values);
            }} >
              {({ errors, touched }) => (
         <Form className={styles.formContainer}>
         <Input labelName='username' type='email' errors={errors} touched={errors}/>
         <Input labelName='password' type='password' errors={errors} touched={errors}/>
         <h5 className={styles.passwordText}>Forgot password?</h5>
         <button className={styles.submitButton}>Continue</button>
         <h5 className={styles.signupText}>Dont have an Account ?<span className={styles.signup}>Sign up</span></h5>
         </Form>
       )}
        </Formik>
    </div>
  )
}

export default LoginCard