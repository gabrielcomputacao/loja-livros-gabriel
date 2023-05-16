import { action, makeObservable, observable } from "mobx";
import { IListaLivros } from "../shared/service/api/livros/LivrosService";
 

    class Store {

        listaLivros: IListaLivros[] = [];
        listaIdLivros: number[] = [];


        constructor(){
            makeObservable(this,{
                listaIdLivros: observable,
                listaLivros: observable,
                addLivro: action
            })
        }

        addLivro(livro: IListaLivros){
            this.listaLivros.push(livro);
        }

    }

    const storeLivros = new Store();
export default storeLivros;


