import api from './api';

export interface Informations {
    id?: number;
    imagem: string;
    titulo: string;
    descricao: string;
}

export const createInformations = async (informations: Informations): Promise<Informations> => {
    const response = await api.post<Informations>('/informations', informations);
    return response.data;
   
}

export const getInformations = async (): Promise<Informations> => {
    const response = await api.get<Informations>('/informations/1');
    return response.data;
}

export const deleteInformations = async (): Promise<void> =>{
    await api.delete ('/informations/1');  
}

export const updateInformations = async (informations:Informations): Promise<Informations> => {
    const response = await api.put<Informations>('/informations/1', informations);
    return response.data;
}

export const createOrUpdateInformations = async (informations:Informations): Promise<Informations> => {
    if (informations.id) {
        return await updateInformations(informations);
    } else {
        return await createInformations(informations);
    }
}






