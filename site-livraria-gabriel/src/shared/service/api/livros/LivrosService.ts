import { Api } from "../axios-config";


export interface IListaLivros{
    id: number,
    titulo: string,
    descricao: string,
    preco: number,
    categoria: string,
    quantidade?: number
}

export type TListaLivros = {
    data: IListaLivros[],

}

const getAll = async (): Promise<TListaLivros | Error> => {

    try {
        
        const result = await Api.get('/livros');

        if(result){
            return result;
        }

        return new Error('Erro ao lista os registros');
    } catch (error) {
        return new Error((error as {message:string}).message ||  'Erro ao lista os registros');
    }

};

const getById = async (id: number): Promise<IListaLivros | Error> =>{

    try {

        if(id === 0){
            return {} as IListaLivros;
        }

        const {data} = await Api.get(`/livros/${id}`);

        if(data){
            return data;
        }

        return new Error('Error ao fazer consulta por ID');
    } catch (error) {
        console.log(error);
        return new Error((error as {message:string}).message || 'Error ao fazer consultra por ID');
    }

}



export const LivrosService = {
    getAll,
    getById
}