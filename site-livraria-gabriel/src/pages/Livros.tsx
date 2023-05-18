import { Box } from "@mui/material";
import { LayoutPrincipal } from "../shared/layouts";
import { useEffect, useState } from "react";
import {
  IListaLivros,
  LivrosService,
} from "../shared/service/api/livros/LivrosService";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Livros = () => {
  const [livros, setLivros] = useState<IListaLivros[]>([]);

  const navigate = useNavigate();

  const handleNavigation = (to: string)=>{
    navigate(to);
  }


  useEffect(() => {
    LivrosService.getAll().then((result) => {
      if (result instanceof Error) {
        console.log(result.message);
      } else {
        console.log(result.data);
        setLivros(result.data);
      }
    });
  }, []);

  return (
    <LayoutPrincipal>
      <Box display="flex" justifyContent="space-around" gap="1em" flexWrap="wrap">
        {livros.map((livro) => (
          <Card key={livro.id} sx={{ width: 400}}>
            <CardContent>
                <Typography variant="h5">
                   Título: {livro.titulo}
                </Typography>
                <Typography variant="body2" padding=".7em 0">
                  Descrição:  {livro.descricao}
                </Typography>
                <Typography variant="h6">
                   Preço: R$ {livro.preco.toFixed(2).replace('.',',')}
                </Typography>
                <Typography variant="h6">
                   Categoria: {livro.categoria}
                </Typography>
            </CardContent>
            <Button onClick={ ()=>{ handleNavigation(`/livro/${livro.id}`) }} size="medium" color="secondary">
              Visualizar Produto
            </Button>
          </Card>
        ))}
      </Box>
    </LayoutPrincipal>
  );
};
