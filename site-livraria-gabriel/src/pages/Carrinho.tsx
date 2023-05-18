import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { LayoutPrincipal } from "../shared/layouts";
import storeLivros from "../store/store";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { useMemo } from "react";

export const Carrinho = observer( () => {
  const { listaLivros } = storeLivros;
  const navigate = useNavigate();

  const handleClick = (to: string)=>{
   navigate(to);
 }

 const precoTotalSomado = useMemo( () =>{

      return storeLivros.precoTotalCalculado();

 }, [])


  return (
    <LayoutPrincipal>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="start"
          gap="2em"
          width="70%"
          alignSelf="start"
        >
          {listaLivros.map((livro) => (
            <Card key={livro.id} sx={{ width: '100%'}}>
              <CardContent>
                <Typography variant="h5">Título: {livro.titulo}</Typography>
                <Typography variant="body2" padding=".7em 0">
                  Descrição: {livro.descricao}
                </Typography>
                <Typography variant="h6">Preço: R$ {livro.preco.toFixed(2).replace('.',',')}</Typography>
                <Typography variant="h6">
                  Categoria: {livro.categoria}
                </Typography>
                <Typography variant="h6">
                  Quantidade: {livro.quantidade}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box height="100vh" margin="2em 0">
          <Button variant="contained" onClick={()=>{
            handleClick('/compra');
          }}>Fechar Pedido</Button>
          <Box marginTop="2em">
            <Typography variant="h5" textAlign="center"> Valor Total: R${precoTotalSomado} </Typography>
          </Box>
        </Box>
      </Box>
    </LayoutPrincipal>
  );
});
