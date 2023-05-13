import { Api } from "../axios-config";


interface IListaLivros{
    id: number,
    titulo: string,
    descricao: string,
    preco: number,
    categoria: string
}

type TListaLivros = {
    data: IListaLivros[],

}

const getAll = async (): Promise<TListaLivros | Error> => {

    try {
        
        const {data} = await Api.get('/livros');

        if(data){
            return data;
        }

        return new Error('Erro ao lista os registros');
    } catch (error) {
        return new Error((error as {message:string}).message ||  'Erro ao lista os registros');
    }

};



export const LivrosService = {
    getAll
}