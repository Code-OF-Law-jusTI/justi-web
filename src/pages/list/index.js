import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Title, BoxAssert } from "./styles";

// components

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ListCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <BoxAssert className="assert">8.3 Assertividade</BoxAssert>
          <Title>Emerson</Title>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
