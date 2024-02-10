import Keyboard from "./components/Keyboard";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>REACT CALCULATOR</h1>
        <div>Here goes the calculator</div>
        <Keyboard />
      </Box>
    </div>
  );
}

export default App;

// adding my branch
