import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router";
import "./App.css";
import { theme } from "./common/theme";
import Home from "./components/Home";
import MultipleChoice from "./components/MultipleChoice";
import DictionarySelection from "./components/DictionarySelection";
import { useState } from "react";
function App() {
  const [activeDictionary, setActiveDictionary] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DictionarySelection setActiveDictionary={setActiveDictionary} />
      <Routes>
        <Route
          path="/"
          element={<Home activeDictionary={activeDictionary} />}
        />
        <Route
          path="/multi"
          element={<MultipleChoice activeDictionary={activeDictionary} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
