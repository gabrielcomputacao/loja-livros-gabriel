import { Box,  ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { green } from "@mui/material/colors";

export const Header = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between"  width="100%"  bgcolor={green[300]} color="#222">
      
      <Box textAlign="center" paddingLeft="2em">
            Livraria Gabriel
      </Box>

      <Box paddingRight="4em">
      <MenuList component={Box} display="flex" justifyContent="space-around" >
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Página Principal</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AssignmentIndIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sobre</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Livros</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalGroceryStoreIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>  Carrinho</ListItemText>
        </MenuItem>
      </MenuList>
      </Box>
    </Box>
  );
};
