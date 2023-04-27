import { StyledEngineProvider } from "@mui/material";
import Timer from "./components/Timer";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Timer />
    </StyledEngineProvider>
  );
}

export default App;
