import { Api } from "../axios-config";


export interface IListaLivros{
    id: number,
    titulo: string,
    descricao: string,
    preco: number,
    categoria: string
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



export const LivrosService = {
    getAll
}