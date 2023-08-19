import { React, useState } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import "./Navbar.css";

const Cards = (props) => {
  const [like, setLike] = useState([]);

  let cources = props.cources;
  let catagory = props.catagory;

  const getAll = () => {
    if (catagory === "All") {
      let arr = [];
      Object.values(cources).forEach((catagory) => {
        catagory.forEach((course) => {
          arr.push(course);
        });
      });
      return arr;
    }
    else  return cources[catagory];
  };

  return (
    <div className="grid-style">
      <Grid container spacing={1}>
        {getAll().map((cource) => {
          return (
            <Grid item xs={11} sm={6} md={4}>
              <Card
                key={cource.id}
                cource={cource}
                like={like}
                setLike={setLike}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
