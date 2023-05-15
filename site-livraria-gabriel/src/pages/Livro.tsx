import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { LayoutPrincipal } from "../shared/layouts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IListaLivros,
  LivrosService,
} from "../shared/service/api/livros/LivrosService";

export const Livro = () => {
  const params = useParams();
  const [livro, setLivro] = useState<IListaLivros>({} as IListaLivros);

  useEffect(() => {
    let idNumber: number = 0;

    if (params.id !== undefined) {
      idNumber = parseInt(params.id);
    }

    LivrosService.getById(idNumber).then((result) => {
      if (result instanceof Error) {
        console.log(result.message);
      } else {
        console.log(result);
        setLivro(result);
      }
    });
  }, []);

  return (
    <LayoutPrincipal>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap="1em">
        <Box width="55%">
          <Typography variant="h3">{livro.titulo}</Typography>
          <Typography variant="body1" padding="1em 0">
            {livro.descricao}
          </Typography>
          <Typography variant="h6">Preço: R$ {livro.preco}</Typography>
          <Typography variant="h6">Categoria: {livro.categoria}</Typography>
        </Box>
        <Box
          display="flex"
          gap="1em"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="22%"
          border="1px solid #292929"
          borderRadius="2px"
          padding=".5em"
        >
          <Typography
            variant="h5"
            bgcolor="primary.light"
            padding=".2em"
            textAlign="center"
          >
            Preço: R$ {livro.preco}
          </Typography>
          <Button onClick={() => {}} size="medium" color="secondary">
            Adicionar ao Carrinho
          </Button>
          <Button onClick={() => {}} size="medium" color="secondary">
            Fechar Pedido
          </Button>
        </Box>
      </Box>
    </LayoutPrincipal>
  );
};
