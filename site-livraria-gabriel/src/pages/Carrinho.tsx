import { Card, CardContent, Typography } from "@mui/material"
import { LayoutPrincipal } from "../shared/layouts"
import storeLivros from "../store/store"



export const Carrinho = () =>{

    const {listaLivros} = storeLivros


    return (
        <LayoutPrincipal>

{listaLivros.map((livro) => (
          <Card key={livro.id} sx={{ width: 400}}>
            <CardContent>
                <Typography variant="h5">
                   Título: {livro.titulo}
                </Typography>
                <Typography variant="body2" padding=".7em 0">
                  Descrição:  {livro.descricao}
                </Typography>
                <Typography variant="h6">
                   Preço: R$ {livro.preco}
                </Typography>
                <Typography variant="h6">
                   Categoria: {livro.categoria}
                </Typography>
                <Typography variant="h6">
                   Quantidade: {livro.quantidade}
                </Typography>
            </CardContent>
          </Card>
        ))}


        </LayoutPrincipal>
    )
}