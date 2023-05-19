import {
  Box,
  Button,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LayoutPrincipal } from "../shared/layouts";
import storeLivros from "../store/store";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FecharCompra = () => {
  const { qtdLivrosDistintos, listaLivros } = storeLivros;
  const [valorCompras, setvalorCompras] = useState(
    storeLivros.precoTotalCalculado()
  );
  const [finalizarCompras, setFinalizarCompras] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const finalizar = () => {
    if (listaLivros.length > 0) {
      setFinalizarCompras("comprou");

      setTimeout(() => {
        setFinalizarCompras("");

        storeLivros.reset();

        navigate("/home");
      }, 5000);
    } else {
      setFinalizarCompras("nada");

      setTimeout(() => {
        setFinalizarCompras("");
      }, 5000);
    }
  };

  const calcularDesconto = useMemo(() => {
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

  const calcularValorTotalDescontado = () => {
    let valorDesconto = calcularDesconto * valorCompras;
    let valorTotalDescontado = valorCompras - valorDesconto;
    return {
      desconto: valorDesconto,
      valorTotal: valorTotalDescontado,
    };
  };

  return (
    <LayoutPrincipal>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <Box marginBottom="2em">
          <Typography variant="h5" marginBottom=".5em">
            {" "}
            Você comprou {qtdLivrosDistintos} Livros Distintos.{" "}
          </Typography>
          <Typography variant="h5" marginBottom=".5em">
            {" "}
            A porcentagem do desconto foi de {calcularDesconto * 100}%.{" "}
          </Typography>
          <Typography variant="h5" marginBottom="1.5em">
            {" "}
            Valor Total SEM desconto R${" "}
            {valorCompras.toFixed(2).replace(".", ",")}.{" "}
          </Typography>
          <Typography variant="h5" marginBottom="1.5em">
            {" "}
            Valor do desconto: R${" "}
            {calcularValorTotalDescontado()
              .desconto.toFixed(2)
              .replace(".", ",")}
            .{" "}
          </Typography>
          <Typography variant="h5" marginBottom="1em">
            {" "}
            Valor Total COM desconto: R${" "}
            {calcularValorTotalDescontado()
              .valorTotal.toFixed(2)
              .replace(".", ",")}
            .{" "}
          </Typography>

          <Button variant="contained" onClick={finalizar}>
            {" "}
            Finalizar Compra{" "}
          </Button>

          {finalizarCompras === "comprou" && (
            <Box marginTop="1.5em">
              <Skeleton sx={{ bgcolor: "primary.main" }} />
              <Typography variant="h5">
                Compra realizada com Sucesso!!
              </Typography>
              <Typography variant="h6">
                Obrigado por comprar com a gente.
              </Typography>
            </Box>
          )} 
          {finalizarCompras === "nada" && (
            <Box marginTop="1.5em">
              <Skeleton sx={{ bgcolor: "red" }} />
              <Typography variant="h5">
                Não Comprou nada ainda
              </Typography>
              <Typography variant="h6">
                Compre com a gente.
              </Typography>
            </Box>
          )}
        </Box>
        <Box border="1px solid #292929" padding="1.5em 1em">
          <Typography variant="h5">
            Você está comprando os seguintes livros:
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              {listaLivros.map((livro, index) => (
                <Typography
                  padding=".4em"
                  bgcolor="secondary.light"
                  key={index}
                  sx={{ mt: 4, mb: 2, width: "93%" }}
                  variant="h6"
                >
                  {livro.titulo} - preço: R$
                  {livro.preco.toFixed(2).replace(".", ",")} - quantidade:
                  {livro.quantidade}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LayoutPrincipal>
  );
};
