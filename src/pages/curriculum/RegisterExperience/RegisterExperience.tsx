import React from 'react';
import styles from './RegisterExperience.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/forms/input/Input';
import Select from '../../../components/forms/select/Select';

import { Experience, createExperiences, createOrUpdateExperience } from '../../../services/experienceService';
import { useNavigate, useLocation } from 'react-router-dom';

const RegisterExperience: React.FC = () => {

    const navigate = useNavigate ()
    const location = useLocation ()
    const experience = location.state as Experience

    const initialValues: Experience = {
        id: 0,
        anoInicio: "",
        anoFim: "",
        titulo: "",
        instituicao: "",
        tipo: "",
    }

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required("Campo obrigatório"),
        instituicao: Yup.string().required("Campo obrigatório"),
        anoInicio: Yup.number().required("Campo obrigatório").typeError("Número requerido"),
        anoFim: Yup.number().required("Campo obrigatório").typeError ("Número requerido"),
        tipo: Yup.string().required("Campo obrigatório")
    })

    const onSubmit = async (values: Experience, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateExperience (values);
            console.log(values);
            resetForm();
            navigate ('/curriculum/experience/list') 
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.log('Erro ao enviar formulário:', error);
            alert ('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    }

    return (
        <div className={styles.formWrapper}>
            <Formik 
                initialValues={ experience || initialValues }
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
            {({ errors, touched }) => (
            <Form  className={styles.form}> 
                    <h2 className={styles.title}> Cadastrar Experiência</h2>
                    
                    <Input
                        label="Ano de Início"
                        name="anoInicio"
                        errors={errors.anoInicio}
                        touched={touched.anoInicio}
                        type="text"
                    />

                    <Input
                        label="Ano de Fim"
                        name="anoFim"
                        errors={errors.anoFim}
                        touched={touched.anoFim}
                        type="text"
                    />

                    <Select
                        label="Tipo de experiência"
                        name="tipo"
                        options={[
                            { value: "academica", label: "academica" },
                            { value: "profissional", label: "profissional" },

                        ]}
                        errors={errors.titulo}
                        touched={touched.titulo}
                    />

                    <Input
                        label="Título"
                        name="titulo"
                        errors={errors.titulo} 
                        touched={touched.titulo}
                        type="text"
                    />

                    <Input
                        label="Instituição" 
                        name="instituicao"
                        errors={errors.instituicao}
                        touched={touched.instituicao}
                        type="text"
                    />

                    <button type="submit" className={styles.button}>Salvar</button>

            </Form> 
            )}
            </Formik>
        </div>   
    )
}

export default RegisterExperience