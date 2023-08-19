import React from "react";
import "./Navbar.css";
import { Button } from "@mui/material";

const Filter = (props) => {
  let filterData = props.filterData;
  let catagory = props.catagory;
  let setCatagory = props.setCatagory;
  const filterHandler = (title) => {setCatagory(title)};

  return (
    <div className="filter-div">
      {filterData.map((data) => {
        return (
          <Button
            variant="contained"
            className="filter-btn"
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </Button>
        );
      })}
    </div>
  );
};

export default Filter;
