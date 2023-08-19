import { React, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [cources, setCources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCources(output.data);
    } catch {
      console.log("error");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="ap">
        <Navbar />

        <Filter filterData={filterData} catagory={catagory} setCatagory={setCatagory}/>

        <div className="all-card">
          {loading ? (
            <h1>loading</h1>
          ) : (
            <Cards cources={cources} catagory={catagory}/>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
