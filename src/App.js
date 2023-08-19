import { React, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

        <Filter
          filterData={filterData}
          catagory={catagory}
          setCatagory={setCatagory}
        />

        <div className="all-card">
          {loading ? (
            <div className="spinner">
              <h1>loading</h1>
              <CircularProgress />
            </div>
          ) : (
            <Cards cources={cources} catagory={catagory} />
          )}
        </div>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
