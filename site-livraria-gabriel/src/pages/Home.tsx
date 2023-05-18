import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LayoutPrincipal } from "../shared/layouts";

export const Home = () => {

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));


  return (
    <>
      <LayoutPrincipal>
        <Box display="flex" justifyContent="center" gap="1.5em" flexWrap="wrap">
        <Box width={ lgDown ? '100%' : '45%' }>
            <Typography
              variant="h1"
              fontSize="42px"
              color="primary.main"
              fontFamily="sans-serif"
            >
              Livraria Gabriel
            </Typography>
            <Typography variant="h2" fontSize="36px" color="secondary.main">
              Bem-vindo à Livraria Gabriel!
            </Typography>
            <Typography variant="body1" marginTop="1em">
              Na Livraria Gabriel, nossa paixão é levar o mundo da literatura
              até você. <br /><br /> Somos uma livraria dedicada a oferecer uma vasta seleção
              de livros, desde clássicos atemporais até os lançamentos mais
              recentes. <br /><br /> Aqui, você encontrará um ambiente acolhedor e
              inspirador, repleto de conhecimento e histórias esperando para
              serem descobertas. <br /> Nossa equipe apaixonada está pronta para
              ajudá-lo a encontrar o livro perfeito para cada momento, seja para
              alimentar sua curiosidade, relaxar, aprender algo novo ou se
              aventurar por mundos imaginários.
            </Typography>
          </Box>
          <Box width = { lgDown ? '100%' : '45%' } >
                <img width="100%" src={`${process.env.PUBLIC_URL}/assets/images/livraria.jpg`} alt="Livraria Gabriel" title="Livraria Gabriel" />
          </Box>
          
        </Box>
      </LayoutPrincipal>
    </>
  );
};
