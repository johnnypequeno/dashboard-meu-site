import React from 'react';

import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Sidebar: React.FC = () => {

    const { logout } = useAuth ();

    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/">
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>
                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculum/informations/register">
                            <p>Cadastrar Informações </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum/experience/register">
                            <p>Cadastrar Experiência </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum/experience/list">
                            <p>Lista de experiências</p>
                        </NavLink>
                    </li>
                </ul>
                <h3>Serviços</h3>
                <ul>
                    <li>
                        <NavLink to="/services/register">
                            <p>Cadastrar Serviço</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services/list">
                            <p>Lista de Serviços</p>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink onClick= {logout} to="/login">
                            <h3>Logout</h3>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar