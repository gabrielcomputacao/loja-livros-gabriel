import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

export const Livro = () => {
  const params = useParams();
  const [livro, setLivro] = useState<IListaLivros>({} as IListaLivros);
  const [quantidade, setQuantidade] = useState('');
  const [addMessage, setAddMessage] = useState('');
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== "") {

      setQuantidade(event.target.value);
      setLivro((prevLivro) => ({
        ...prevLivro,
        quantidade: parseInt(event.target.value),
      }
      
      ));
    }
  };

  const handleAddSuccess = (text: string) => {
    setAddMessage(text);

    setTimeout(() => {
      setAddMessage('');
    }, 4000);
  };

  const inserirLivroArray = () =>{
    if(livro.quantidade){
      storeLivros.addLivro(livro);
      handleAddSuccess('success');
    }else{
      handleAddSuccess('failed')
    }
  } 

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

          {addMessage === 'success' && (
            <Box
              padding=".9em"
              border="1px solid"
              borderColor="primary.main"
              width="300px"
              margin="1.5em 0"
            >
              <Typography variant="h6" color="primary.main">
                Adicionado com Sucesso!
              </Typography>
            </Box>
          ) 
}
          {  addMessage === 'failed' && (
            <Box
              padding=".9em"
              border="1px solid"
              borderColor={red[600]}
              width="300px"
              margin="1.5em 0"
            >
              <Typography variant="h6" color={red[600]}>
                Produto Não adicionado!
              </Typography>
              <Typography variant="body1" >
                Coloque a quantidade do produto.
              </Typography>
            </Box>
          )
        
        }

          <Box width="200px" margin="1.5em 0">
            <FormControl fullWidth>
              <InputLabel id="quantidade-text">Quantidade</InputLabel>
              <Select
                labelId="quantidade-text"
                id="quantidade"
                value={quantidade.toString()}
                label="Quantidade"
                onChange={handleChange}
                defaultValue="Selecione..."
              >
                {options.map((option) => (
                  
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
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
          <Button
            onClick={() => {
              inserirLivroArray();
              
            }}
            size="medium"
            color="secondary"
          >
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
