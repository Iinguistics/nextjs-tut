import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Meta from './Meta'

const Layout = ({ children }) => {
    return (
        <>
        <Meta />
        <Navbar />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
             {children}
            </main>
        </div>
        </>
    )
}

export default Layout
