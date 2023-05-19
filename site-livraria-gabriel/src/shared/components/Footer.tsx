import { Box, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () =>{
    return ( 
        <Box bgcolor="#292929" color="#fff" padding="1em" height="100%" display="flex"  justifyContent="center" gap="1em" flexWrap="wrap">
                <Typography textAlign="center" fontSize="20px">
                    Gabriel Henrique
                </Typography>
                
                <a href="https://github.com/gabrielcomputacao/loja-livros-gabriel/tree/main/site-livraria-gabriel" target="_blank" rel="noreferrer"> 
                    <GitHubIcon  sx={{color: '#fff', fontSize: ' 32px'}}/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-henrique-931163181/" target="_blank" rel="noreferrer">
                    <LinkedInIcon sx={{color: '#fff', fontSize: ' 32px'}}/>
                </a>
        </Box>
    )
}