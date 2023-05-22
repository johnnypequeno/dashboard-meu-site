import React from 'react';
import styles from './RegisterService.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/forms/input';
import Textarea from '../../../components/forms/textarea';

interface FormValues {
    link: string;
    image: string;
    title: string;
    text: string;
}

const initialValues: FormValues = {
    link: '',
    image: '',
    title: '',
    text: ''
}

const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo obrigatório"),
    image: Yup.string().required("Campo obrigatório"),
    title: Yup.string().required("Campo obrigatório"),
    text: Yup.string().required("Campo obrigatório"),
})

const RegisterService: React.FC = () => {

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    // Lógica de envio para backend
    console.log(values);
    resetForm();
    alert ('Formulário enviado com sucesso!');
}

    return (
        <div className={styles.formWrapper}>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
            <Form  className={styles.form}> 
                    <h2 className={styles.title}> Cadastrar Serviço</h2>
                    <Input 
                            label="Link"
                            name="link"
                            errors={errors.link}
                            touched={touched.link} 
                            type={''}                    
                    />

                    <Input 
                            label="Imagem"
                            name="image"
                            errors={errors.image}
                            touched={touched.image} 
                            type={''}                   
                     />

                    <Input
                            label="Título"
                            name="title"
                            errors={errors.title}
                            touched={touched.title} 
                            type={''}
                    />

                    <Textarea
                            label="Texto"
                            name="text"
                            errors={errors.text}
                            touched={touched.text}                  
                     />

                    <button type="submit" className={styles.button}>Cadastrar</button>
            </Form>
            )}
            </Formik>
        </div>
    )
}

export default RegisterService