//** Imports do React */
import React, { useEffect, useState } from 'react';

//** Imports de pacotes */
import * as Yup from 'yup';
import { AxiosError } from 'axios';

//** Imports de componentes */
import Form from '../../../components/forms/Form/Form';
import Title from '../../../components/common/Title';
import Input from '../../../components/forms/input';
import Textarea from '../../../components/forms/textarea';
import CardInformations from './CardInformations/CardInformations';
import Button from '../../../components/common/Button';

//** Imports de serviços */
import { Informations, updateInformations, getInformations, deleteInformations, createOrUpdateInformations } from '../../../services/informationsService';

//** Imports de estilos */
import styles from './RegisterInformations.module.css';

const RegisterInformations: React.FC = () => {

    const [ informations, setInformations ] = useState <Informations>();

    const initialValues: Informations = {
        imagem: "",
        titulo: "",
        descricao: "",
      };

const validationSchema = Yup.object().shape({
    imagem: Yup.string().required("Campo obrigatório"),
    titulo: Yup.string().required("Campo obrigatório"),
    descricao: Yup.string().required("Campo obrigatório"),
});

const fetchInformations = async () => {
   try {
        const information = await getInformations();
        setInformations(information);
   } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status !== 404) {
                    console.error('Erro ao buscar informações:', error);
                }
            } else {
             console.error ('Ocorreu um erro desconhecido ao buscar informações:', error);
        }
    }
};

useEffect(() => {
    fetchInformations();
}, []);

const onSubmit = async (values: Informations ) => {
    try {
        await createOrUpdateInformations(values);
        setInformations(values);
        console.log(values);
        alert('Formulário enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert ('Ocorreu um erro ao enviar o formulário. Tente novamente.')
    }
};

const handleDelete = async () => {
    try {
        await deleteInformations();
        setInformations(undefined);
        alert('Informações deletadas com sucesso');
    } catch (error) {
        console.log('Erro ao deletar informações:', error);
        alert ('Ocorreu um erro ao realizar a ação. Tente novamente.');
    }
};

return (
    <div className ={styles.formWrapper}>

    <Form
    
        initialValues={informations || initialValues} 
        enableReinitialize={true}
        validationSchema={validationSchema} 
        onSubmit={onSubmit}> 

        {({ errors, touched }) => (

                <>
        
                    <Title> Informações de perfil </Title>

                    <Input

                        label="Imagem"
                        name="imagem"
                        errors={errors.imagem}
                        touched={touched.imagem}
                        type="text"
                    />

                    <Input
                        label="Titulo"
                        name="titulo"
                        errors={errors.titulo}
                        touched={touched.titulo}
                        type="text"
                    />

                    <Textarea
                        label="Descrição"
                        name="descricao"
                        errors={errors.descricao}
                        touched={touched.descricao}
                    />

                    <Button type="submit">Salvar</Button>
                </>
            )}
        
    </Form>

        {informations && 
        //     Object.entries(informations).some(
        //     ([key, value]) => key !== "id" && value.trim () !== ""
        // ) && (
        <div className={styles.cardContainer}>
            <CardInformations informations={informations}/>
            <Button onClick={handleDelete} red> Limpar </Button>
        </div>
            
        }

        </div>
    )
}

export default RegisterInformations