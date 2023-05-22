import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/layout';
import Home from '../pages/home/Home';
import RegisterInformations from '../pages/curriculum/RegisterInformations';
import RegisterExperience from '../pages/curriculum/RegisterExperience';
import ListExperience from '../pages/curriculum/ListExperience';

import RegisterService from '../pages/services/RegisterService';
import ListServices from '../pages/services/ListServices';
import { useAuth } from '../contexts/AuthContext';


const AuthRoutes = () => {

    const { authenticated, isLoading } = useAuth();

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (!authenticated) {
        return <Navigate to="/login" />
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path= "/curriculum/informations/register" element = {<RegisterInformations />} />
                <Route path= "/curriculum/experience/register" element = {<RegisterExperience />} />
                <Route path= "/curriculum/experience/list" element = {<ListExperience />} />
                <Route path= "/services/register" element = {<RegisterService />} />
                <Route path= "/services/list" element = {<ListServices />} />
            </Routes>
        </Layout>
    );
};

export default AuthRoutes;