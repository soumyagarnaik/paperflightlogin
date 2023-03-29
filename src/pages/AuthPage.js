import React from 'react'
import LoginCard from '../components/LoginCard'
import styles from '../css/authpage.module.css'

const AuthPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.loginCard}>
            <LoginCard />
        </div>
    </div>
  )
}

export default AuthPage