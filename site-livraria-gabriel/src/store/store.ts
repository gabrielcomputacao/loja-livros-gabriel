import { action,  computed,  makeObservable, observable } from "mobx";
import { IListaLivros } from "../shared/service/api/livros/LivrosService";

 

    class Store {

        listaLivros: IListaLivros[] = [];
        listaIdLivrosDistintos: number[] = [];
        precoTotal: number = 0;


        constructor(){
            makeObservable(this,{
                listaIdLivrosDistintos: observable,
                listaLivros: observable,
                precoTotal: observable,
                addLivro: action,
                precoTotalCalculado: action,
                reset: action,
                qtdLivrosDistintos: computed,
            })
        }

        addLivro(livro: IListaLivros){
            this.listaLivros.push(livro);

            if( !this.listaIdLivrosDistintos.includes(livro.id)){
                this.listaIdLivrosDistintos.push(livro.id)
            }

        }

        precoTotalCalculado(){
            let contagemPreco = 0;

            if(this.listaLivros.length > 0 && this.listaLivros){
                this.listaLivros.forEach( (element)=>{
                if(element.quantidade){
                    contagemPreco += element.preco * element.quantidade;
                }
                
            })
                this.precoTotal = contagemPreco;
                return  this.precoTotal;
            }else{

                return  this.precoTotal;

            }
        }

        reset(){
            this.listaLivros = [];
            this.listaIdLivrosDistintos = [];
            this.precoTotal = 0;
        }

        get qtdLivrosDistintos(){
            return this.listaIdLivrosDistintos.length
        }

    }

    const storeLivros = new Store();
export default storeLivros;


