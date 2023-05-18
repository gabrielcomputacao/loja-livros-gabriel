import { Box,  Button,  Grid, Typography } from "@mui/material";
import { LayoutPrincipal } from "../shared/layouts";
import storeLivros from "../store/store";
import { useMemo, useState } from "react";

export const FecharCompra = () => {
  const { qtdLivrosDistintos, listaLivros } = storeLivros;
  const [valorCompras, setvalorCompras] = useState(storeLivros.precoTotalCalculado());

  const calcularDesconto = useMemo( () =>{
        let valorDesconto = 0;

        switch (qtdLivrosDistintos) {
            case 2:
                valorDesconto = 0.05;
                break;
            case 3:
                valorDesconto = 0.1;
                break;
            case 4:
                valorDesconto = 0.2;
                break;
            case 5:
                valorDesconto = 0.25;
                break;
        
            default:
                
                break;
        }

        return valorDesconto;

  }, [qtdLivrosDistintos]);

  const calcularValorTotalDescontado = () =>{
        let valorDesconto = calcularDesconto * valorCompras;
        let valorTotalDescontado = valorCompras - valorDesconto;
        return {
            desconto: valorDesconto,
            valorTotal: valorTotalDescontado
        }
  }

  return (
    <LayoutPrincipal>
      <Box display="flex" justifyContent="space-around" >
        <Box border="1px solid #292929" padding=".5em">
          <Typography variant="h5">
            Você está comprando os seguintes livros:
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {listaLivros.map((livro) => (
                <Typography sx={{ mt: 4, mb: 2, width:'100%' }} variant="h6">
                  {livro.titulo}; preço: R${livro.preco.toFixed(2).replace('.',',')}; quantidade:{livro.quantidade}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box>
                <Typography variant="h5" marginBottom=".5em"> Você comprou {qtdLivrosDistintos} Livros Distintos. </Typography>
                <Typography variant="h5" marginBottom=".5em"> A porcentagem do desconto foi de {calcularDesconto * 100}%.  </Typography>
                <Typography variant="h5" marginBottom="1.5em"> Valor Total SEM desconto  R$ {  valorCompras.toFixed(2).replace('.',',')}.   </Typography>
                <Typography variant="h5" marginBottom="1.5em"> Valor do desconto: R$ {  calcularValorTotalDescontado().desconto.toFixed(2).replace('.',',')}.   </Typography>
                <Typography variant="h5" marginBottom="1em"> Valor Total COM desconto: R$ { calcularValorTotalDescontado().valorTotal.toFixed(2).replace('.',',')}.  </Typography>

                <Button variant="contained"> Finalizar Compra </Button>
        </Box>
      </Box>
    </LayoutPrincipal>
  );
};
