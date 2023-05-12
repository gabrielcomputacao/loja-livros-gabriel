
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material"
import { ThemeLivraria } from "./shared/themes";

function App() {
  return (
    <ThemeProvider theme={ThemeLivraria}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
