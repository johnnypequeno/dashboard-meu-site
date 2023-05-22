import React from 'react';
import styles from './ListServices.module.css';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';


interface Services {
    link: string;
    image: string;
    title: string;
    text: string;
}

const ListServices: React.FC = () => {

    const [services, setServices] = useState<Services[]>([
        {
            link:'https://youtu.be/j_aPcF0fpaE',
            image:'https://i.ibb.co/fk878Lp/Frame-block-1.png',
            title: 'Produção audiovisual',
            text: 'Coordenação de projetos e produções de conteúdo em vídeo publicitário'

        },
        {
            link:'https://youtu.be/j_aPcF0fpaE',
            image:'https://i.ibb.co/x3BJQ2n/Frame-block-2.png',
            title: 'Motion Graphics',
            text: 'Animação em técnicas de motion 2D para vídeos explicativos publicitários'

        },
        {
            link:'https://youtu.be/iBDFwygETSA',
            image:'https://i.ibb.co/b5Frhs6/Frame-block-3.png',
            title: 'Transmissão ao vivo',
            text: 'Coordenação e operação de transmissões ao vivo para eventos em geral'
        }
    ]);


        const handleEdit = (index: number) => {
        }  
        const handleDelete = (index: number) => {
        }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {services.map((itemServices, index) => (
                    <tr key={index}>
                        <td>{itemServices.title}</td> 
                        <td> <img src= {itemServices.image} alt={itemServices.title} className={styles.image}/> </td>
                        <td> <a href= {itemServices.link} target="_blank" rel= "noreferrer"> {itemServices.link}</a> </td> 
                        <td>
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td> 
                    </tr>
                ))}
            </tbody>
        </table>
                   
    )
    
}

export default ListServices