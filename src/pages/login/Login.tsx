import React from 'react';
import Input from '../../components/forms/input/Input';

import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import * as Yup from 'yup';
import { login as loginService } from '../../services/authService';
import { useAuth } from '../../contexts/AuthContext';

import Form from '../../components/forms/Form';
import Button from '../../components/common/Button/Button';
import Title from '../../components/common/Title';


interface LoginValues {
    email: string;
    password: string;
}

const initialValues: LoginValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Digite um e-mail válido')
        .required('E-mail obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Senha obrigatória')
})
const Login = () => {

    const navigate = useNavigate();

    const  { login } = useAuth();
    const onSubmit = async (values: LoginValues) => {
        try {
            const user = await loginService (values.email, values.password);
            login(user);
            navigate("/");
            console.log(values);
        } catch (error) {
            console.log(error);  
            alert ('Usuário ou senha inválidos');
        }
    }

    return (
        <div className={styles.loginWrapper}>
            {/* <div className={styles.formWrapper}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className={styles.form}>
                            <h1 className={styles.title}> Página Pessoal</h1>

                            <Input
                                label= "Email"
                                name = "email"
                                type = "email"
                                errors = {`${errors.email } ${styles.error}`}
                                touched = {touched.email}
                            />

                            <Input
                                label= "Senha"
                                name = "password"
                                type = "password"
                                errors = {`${errors.password} ${styles.error}`}
                                touched = {touched.password}
                            />

                            <button type="submit" className={styles.button}>Login</button>
                        </Form>       
                    )}
                </Formik>
            </div> */}
            <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
            >

            {({ errors, touched }) => (
                <> 
               
                <Title>MEU SITE PESSOAL</Title>

                <Input
                    label= "Email"
                    name = "email"
                    type = "email"
                    errors = {`${errors.email } ${styles.error}`}
                    touched = {touched.email}
                />

                <Input
                    label= "Senha"
                    name = "password"
                    type = "password"
                    errors = {`${errors.password} ${styles.error}`}
                    touched = {touched.password}
                />

                <Button type="submit" red={false}>Login</Button>
            </>
            )}
            </Form>
        </div>
    )
}

export default Login