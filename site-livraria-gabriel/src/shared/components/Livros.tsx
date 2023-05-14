import { Box } from "@mui/material";
import { LayoutPrincipal } from "../layouts";
import { useEffect, useState } from "react";
import {
  IListaLivros,
  LivrosService,
} from "../service/api/livros/LivrosService";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Livros = () => {
  const [livros, setLivros] = useState<IListaLivros[]>([]);

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
      <Box display="flex">
        {livros.map((livro) => (
          <Card key={livro.id}>
            <CardContent>
                <Typography variant="h5">
                    {livro.titulo}
                </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </LayoutPrincipal>
  );
};
