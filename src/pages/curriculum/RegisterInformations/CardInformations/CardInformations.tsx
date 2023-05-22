import React from 'react';
import styles from './CardInformations.module.css';

import { Informations } from '../../../../services/informationsService';

interface CardInformationsProps {
    informations: Informations;
}

const CardInformations: React.FC<CardInformationsProps> = ({ informations }) => {
    const { imagem, titulo, descricao } = informations;

    return (
        <div className={styles.card}>
            <img src={imagem} alt={titulo} className={styles.imagem}/>
            <div className={styles.content}>
                <h3 className={styles.title}>{titulo}</h3>
                <p className={styles.description}>{descricao}</p>
            </div>
        </div>

    )    
}

export default CardInformations