
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material"
import { ThemeLivraria } from "./shared/themes";
import storeLivros from "./store/store";
import { Provider } from "mobx-react";

function App() {
  return (
    <ThemeProvider theme={ThemeLivraria}>
      <Provider {...storeLivros}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
