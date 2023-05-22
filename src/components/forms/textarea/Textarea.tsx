import React from 'react';

import { Field, ErrorMessage } from 'formik';

import styles from './Textarea.module.css';

interface TextareaProps {
    label: string;
    name: string;
    errors?: string;
    touched?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, errors, touched }) => {
    return (
        <fieldset className={styles.formWrapper}>
            <label htmlFor={name} className={styles.label}>
                {label}: </label>
            <Field 
            as="textarea" 
            id={name} 
            name={name} 
            className={`${styles.input} ${touched && errors && styles.error}`} />
            <ErrorMessage name={name} component="div" className={styles.errorMsg} />
        </fieldset>
    )
}

export default Textarea
