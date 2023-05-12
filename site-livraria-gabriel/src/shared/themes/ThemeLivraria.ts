
    import { createTheme} from "@mui/material";
import { brown, green } from "@mui/material/colors";


    export const ThemeLivraria = createTheme({
        palette:{
            primary:{
                main: green[500] ,
                dark: green[700] ,
                light: green[400] ,
                contrastText: '#fff'
            },
            secondary:{
                main: brown[600],
                dark: brown[700] ,
                light: brown[400] ,
                contrastText: '#fff',
            },
            background:{
                paper: '#fff',
                default: '#f7f6f3',
            }
        }
    })
