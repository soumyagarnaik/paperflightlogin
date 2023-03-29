import React from 'react'
import styles from '../css/input.module.css'
import { Field } from 'formik'

const Input = (props) => {
    const {labelName,type,errors,touched} = props
    console.log(errors,touched)
  return (
    <div className={styles.inputContainer}>
        <label htmlFor={labelName} className={styles.label}>{labelName}</label>
        <Field type={type} name={labelName} className={styles.input}/>
        {errors[labelName] && touched[labelName] ? <h6 className={styles.alertMessage}>{errors[labelName]}</h6> : null}
    </div>
  )
}

export default Input