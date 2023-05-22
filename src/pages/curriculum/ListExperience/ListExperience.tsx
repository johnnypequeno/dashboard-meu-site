import React, { useEffect, useState } from 'react';
import styles from './ListExperience.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Experience, deleteExperience, getExperiences, updateExperience } from '../../../services/experienceService';


const ListExperience: React.FC = () => {

    const navigate = useNavigate();
  

    const [experiences, setExperiences] = useState<Experience[]>([]);

    const fetchExperiences= async()=>{
        try {
            const experiences = await getExperiences();
            setExperiences(experiences);
        } catch (error) {
            console.log('Erro ao buscar experiências', error);  
        } 
    }

    useEffect(() => {
        fetchExperiences();
    }, []);
    const handleEdit = (experience: Experience) => {
        navigate("/curriculum/experience/register", { state: experience })
    }
    const handleDelete = async (id:number) => {
        try {
            await deleteExperience(id);
            fetchExperiences();
            alert ('Experiência excluída com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir a experiência:', error);
            alert ('Ocorreu um erro ao excluir a experiência. Tente novamente.');
        }
    }

    return (
        <table className ={styles.table}>
            <thead>
                <tr>
                    <th>Ano de Inicio</th>
                    <th>Ano de Fim</th>
                    <th>Titulo</th>
                    <th>Instituição</th>
                    <th>Tipo</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiences.map((experience, index) => (
                    <tr key={index}>
                        <td>{experience.anoInicio}</td>
                        <td>{experience.anoFim}</td>
                        <td>{experience.titulo}</td>
                        <td>{experience.instituicao}</td>
                        <td>{experience.tipo}</td>
                        <td>
                                <button onClick={() => handleEdit(experience)}>Editar</button>
                                <button onClick={() => handleDelete(experience.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default ListExperience