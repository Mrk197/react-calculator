import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
import History from "./components/History";
import OptionBar from "./components/OptionBar";
import { Box } from "@mui/material";

function App() {
  const history = [
    {op:'4+5-5+(5.02x4)', total: '24.08'},
    {op:'4+(5.02x4)', total: '24.08'},
    {op:'4+5-8+(2x4)+7/2', total: '12.5'}
  ];
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
        <OptionBar />
        <History history={history}/>
        <Display total="00.00" />
        <Keyboard />
      </Box>
    </div>
  );
}

export default App;

// adding my branch
