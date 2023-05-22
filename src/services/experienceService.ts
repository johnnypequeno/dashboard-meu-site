import api from './api';

export interface Experience {
    id?: number;
    titulo: string;
    instituicao: string;
    anoInicio: string;
    anoFim: string;
    tipo: string;
}

export const createExperiences = async (experience: Experience) => {
    const response = await api.post('/experience', experience);
    return response.data;
}

export const getExperiences = async () => {
    const response = await api.get('/experience');
    return response.data;
}

export const getExperienceById = async (id: number) => {
    const response = await api.get(`/experience/${id}`);
    return response.data;
}

export const updateExperience = async (experience: Experience) => {
    const response = await api.put(`/experience/${experience.id}`, experience);
    return response.data;
}

export const deleteExperience = async (id: number) => {
    const response = await api.delete(`/experience/${id}`);
    return response.data;
}

export const createOrUpdateExperience = async (experience: Experience) => {
    if (experience.id === 0) {
        return await createExperiences(experience);
    } else {
        return await updateExperience(experience);
    }
}


