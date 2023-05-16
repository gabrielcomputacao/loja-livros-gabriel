import { Box,  Button,  ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import storeLivros from "../../store/store";




export const Header = observer(() => {

  const navigate = useNavigate();
  const {listaLivros} = storeLivros;

  const handleClick = (to: string)=>{
    navigate(to);
  }

  

  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"  width="100%"  bgcolor="primary.dark" color="#222">
      
      <Box  textAlign="center" paddingLeft="2em" onClick={ ()=>{
          handleClick("/home");
        } }>
      <Button >
        <Typography variant="h6" color="secondary.dark">Livraria Gabriel</Typography>
        </Button>   
      </Box>

      <Box paddingRight="4em">
      <MenuList component={Box} display="flex" justifyContent="space-around" >
        <MenuItem onClick={ ()=>{
          handleClick("/home");
        } }>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Página Principal</ListItemText>
        </MenuItem>
        <MenuItem onClick={ ()=>{
          handleClick("/livros");
        } }>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Livros</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalGroceryStoreIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{listaLivros.length > 0 ? listaLivros.length : 0}  Carrinho</ListItemText>
        </MenuItem>
      </MenuList>
      </Box>
    </Box>
  );
});
