import { Box } from "@mui/material";
import { Footer, Header } from "../components";



interface ILayoutPrincipalProps {
    children: React.ReactNode;
    
}


export const LayoutPrincipal: React.FC<ILayoutPrincipalProps> = ({children}) =>{

    return (
        <>
            <Header />
            <Box minHeight="700px" padding="1.4em">
                {children}  
            </Box>
            <Footer />
        </> 
    );

};

