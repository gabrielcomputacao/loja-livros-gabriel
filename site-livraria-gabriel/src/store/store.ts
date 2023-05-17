import { action,  makeObservable, observable } from "mobx";
import { IListaLivros } from "../shared/service/api/livros/LivrosService";
 

    class Store {

        listaLivros: IListaLivros[] = [];
        listaIdLivros: number[] = [];
        precoTotal: number = 0;


        constructor(){
            makeObservable(this,{
                listaIdLivros: observable,
                listaLivros: observable,
                precoTotal: observable,
                addLivro: action,
                precoTotalCalculado: action,
            })
        }

        addLivro(livro: IListaLivros){
            this.listaLivros.push(livro);


        }

        precoTotalCalculado(){
            
            if(this.listaLivros.length > 0 && this.listaLivros){
                this.listaLivros.forEach( (element)=>{
                if(element.quantidade){
                    this.precoTotal += element.preco * element.quantidade;
                }
                
            })

                return  this.precoTotal;
            }else{

                return  this.precoTotal;

            }
        }

    }

    const storeLivros = new Store();
export default storeLivros;


