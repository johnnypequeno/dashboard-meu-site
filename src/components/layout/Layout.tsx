import React from 'react';

import styles from './Layout.module.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Header /> 
          <div className={styles.main}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
        </div>
            <Footer /> 
        </div>
    )
}

export default Layout;