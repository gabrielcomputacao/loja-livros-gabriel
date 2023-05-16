import {
  Box,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from "@mui/material/Button";
import { LayoutPrincipal } from "../shared/layouts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IListaLivros,
  LivrosService,
} from "../shared/service/api/livros/LivrosService";
import storeLivros from "../store/store";



export const Livro = () => {
  const params = useParams();
  const [livro, setLivro] = useState<IListaLivros>({} as IListaLivros);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [addSuccess, setAddSuccess] = useState(false);
  


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
    setQuantidade(parseInt(event.target.value));
    setLivro( prevLivro =>({
      ...prevLivro,
      quantidade: parseInt(event.target.value) 
    }));
  };

  const handleAddSuccess = ()=>{
    setAddSuccess(true);

    setTimeout(()=>{
      setAddSuccess(false);
    },4000);
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

          {
            addSuccess && 
            <Box padding=".9em" border="1px solid" borderColor="primary.main" width="300px" margin="1.5em 0">
              <Typography variant="h6" color="primary.main">Adicionado com Sucesso!</Typography>
            </Box>
          }

          <Box width="200px" margin="1.5em 0">
            <FormControl  fullWidth>
              <InputLabel id="quant-campo">Quantidade</InputLabel>
              <Select
               labelId="quant-campo"
               id="quant"
                value={quantidade.toString()}
                label="Quantidade"
                onChange={handleChange}
                
              >
                <MenuItem value={1}>
                  <em>1</em>
                </MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
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
          <Button onClick={() => {
            storeLivros.addLivro(livro);
            handleAddSuccess();
          }} size="medium" color="secondary">
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
