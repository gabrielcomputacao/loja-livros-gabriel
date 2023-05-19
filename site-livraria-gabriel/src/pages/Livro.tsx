import {
  Box,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { LayoutPrincipal } from "../shared/layouts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IListaLivros,
  LivrosService,
} from "../shared/service/api/livros/LivrosService";
import storeLivros from "../store/store";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export const Livro = () => {
  const params = useParams();
  const [livro, setLivro] = useState<IListaLivros>({} as IListaLivros);
  const [addMessage, setAddMessage] = useState("");
  const [quantidadeLivro, setQuantidadeLivro] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
      
      const valorNumerico = event.target.value.replace('/[^0-9]/g','');
      setQuantidadeLivro(event.target.value);
      console.log(quantidadeLivro)
      setLivro((prevLivro) => ({
        ...prevLivro,
        quantidade: parseInt(valorNumerico),
      }
      
      ));
    
  };

  const handleKeyPress = (event: {
    keyCode: any;
    which: any;
    preventDefault: () => void;
  }) => {
    const chave = event.keyCode || event.which;
    const chaveValor = String.fromCharCode(chave);
    const numericRegex = /^[0-9\b]+$/;

    if (!numericRegex.test(chaveValor)) {
      event.preventDefault();
    }
  };

  const handleAddSuccess = (text: string) => {
    setAddMessage(text);

    setTimeout(() => {
      setAddMessage("");
    }, 4000);
  };

  const inserirLivroArray = () => {

    if (quantidadeLivro) {
      storeLivros.addLivro(livro);
      handleAddSuccess("success");
      setQuantidadeLivro('');
    } else {
      handleAddSuccess("failed");
      setQuantidadeLivro('');
    }
  };

  const handleClick = (to: string) => {
    navigate(to);
  };

  return (
    <LayoutPrincipal>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap="1em">
        <Box width={lgDown ? "95%" : "55%"}>
          <Typography variant="h3">{livro.titulo}</Typography>
          <Typography variant="body1" padding="1em 0">
            {livro.descricao}
          </Typography>
          <Typography variant="h6">Preço: R$ {livro.preco}</Typography>
          <Typography variant="h6">Categoria: {livro.categoria}</Typography>

          {addMessage === "success" && (
            <Box
              padding=".9em"
              border="1px solid"
              borderColor="primary.main"
              width="auto"
              maxWidth="300px"
              margin="1.5em 0"
            >
              <Typography variant="h6" color="primary.main">
                Adicionado com Sucesso!
              </Typography>
            </Box>
          )}
          {addMessage === "failed" && (
            <Box
              padding=".9em"
              border="1px solid"
              borderColor={red[600]}
              width="auto"
              maxWidth="300px"
              margin="1.5em 0"
            >
              <Typography variant="h6" color={red[600]}>
                Produto Não adicionado!
              </Typography>
              <Typography variant="body1">
                Coloque a quantidade do produto.
              </Typography>
            </Box>
          )}

          <Box width="200px" margin="1.5em 0">
            <FormControl fullWidth>
              <TextField
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                type="number"
                placeholder="Quantidade"
                value={quantidadeLivro}
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          display="flex"
          gap="1em"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={lgDown ? "auto" : "22%"}
          border="1px solid #292929"
          borderRadius="2px"
          padding={lgDown ? "1.5em .5em" : ".5em"}
        >
          <Typography
            variant="h5"
            bgcolor="primary.light"
            padding=".4em"
            textAlign="center"
            borderRadius="5px"
          >
            Preço: R$ {livro.preco}
          </Typography>
          <Button
            onClick={() => {
              inserirLivroArray();
            }}
            size="medium"
            color="secondary"
          >
            Adicionar ao Carrinho
          </Button>
          <Button
            onClick={() => {
              handleClick("/compra");
            }}
            size="medium"
            color="secondary"
          >
            Fechar Pedido
          </Button>
        </Box>
      </Box>
    </LayoutPrincipal>
  );
};
