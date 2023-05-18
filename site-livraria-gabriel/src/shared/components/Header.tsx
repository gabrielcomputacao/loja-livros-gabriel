import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import storeLivros from "../../store/store";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

export const Header = observer(() => {
  const navigate = useNavigate();
  const { listaLivros } = storeLivros;
  const [visible,setVisible] = useState(false);

  const handleClick = (to: string) => {
    navigate(to);
  };

  const menuVisible = () =>{
    setVisible(!visible);
  }

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box width="100%" bgcolor="primary.dark" color="#222">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        color="#222"
      >
        <Box
          textAlign="center"
          paddingLeft="2em"
          onClick={() => {
            handleClick("/home");
          }}
        >
          <Button>
            <Typography variant="h6" color="secondary.dark">
              Livraria Gabriel
            </Typography>
          </Button>
        </Box>

        <Box display={mdDown ? "none" : "block"} paddingRight="4em">
          <MenuList
            component={Box}
            display="flex"
            justifyContent={mdDown ? "space-between" : "space-around"}
          >
            <MenuItem
              onClick={() => {
                handleClick("/home");
              }}
            >
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Página Principal</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClick("/livros");
              }}
            >
              <ListItemIcon>
                <MenuBookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Livros</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClick("/carrinho");
              }}
            >
              <ListItemIcon>
                <LocalGroceryStoreIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                {listaLivros.length > 0 ? listaLivros.length : 0} Carrinho
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Box>

        <Box  display={mdUp ? "none" : "block"}>
          <IconButton onClick={menuVisible}>
            <MenuRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box display={ visible ? 'block' : 'none' } width="100%" textAlign="center">
        <MenuList
          component={Box}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          
          <MenuItem
            onClick={() => {
              handleClick("/home");
            }}
          >
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Página Principal</ListItemText>
          </MenuItem>
          <Divider  />
          <MenuItem
            onClick={() => {
              handleClick("/livros");
            }}
          >
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Livros</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              handleClick("/carrinho");
            }}
          >
            <ListItemIcon>
              <LocalGroceryStoreIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              {listaLivros.length > 0 ? listaLivros.length : 0} Carrinho
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Box>
    </Box>
  );
});
