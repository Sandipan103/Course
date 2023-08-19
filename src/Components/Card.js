import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import "./Navbar.css";
import { toast } from 'react-toastify';

const Cardd = (props) => {
  let cource = props.cource;
  let like = props.like;
  let setLike = props.setLike;
  let x = false;
  if(like.includes(cource.id))  x=true;

  const clickHandler = () => {
    if (like.includes(cource.id)) {
      setLike((prev) => prev.filter((cid) => (cid !== cource.id)));
    }
    else if(like.length === 0)  setLike([cource.id]);
    else    setLike((prev) => [...prev, cource.id]);
    x=!x;
    if(x) toast("liked");
    else  toast("remove liked");
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
            height : '100%',
            transition: "transform 2s",
          //    backgroundColor:'#Fffceb'
        }}
        className="card-hover"
      >
        <CardMedia
          sx={{ height: 140 }}
          image={cource.image.url}
          title={cource.image.alt}
          style={{ borderRadius: "10px", position: "relative" }}
        />
        {x ? (
          <FavoriteTwoToneIcon
            style={{
              color: "red",
              height: "40px",
              width: "40px",
              backgroundColor: "#bd9eff",
              borderRadius: "50%",
            }}
            onClick={clickHandler}
          />
        ) : (
          <FavoriteTwoToneIcon
            style={{
              color: "white",
              height: "40px",
              width: "40px",
              backgroundColor: "#bd9eff",
              borderRadius: "50%",
            }}
            onClick={clickHandler}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cource.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
                cource.description.length > 100 ?
                (cource.description.substr(0, 100) + "...") : 
                cource.description
            }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cardd;
