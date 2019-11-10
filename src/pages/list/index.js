import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "../../service/api";

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
  const [open, setOpen] = React.useState(false);
  const [returnData, setReturnData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const data = {
      areaAtuacao: "Direito Civil",
      subArea: "dpvat",
      leis: [
        {
          leiAplicada: "",
          numeroArtigo: "",
        },
      ],
      conjuntoPalavras: ["Processo", "publicação", "Movimento"],
    };
    const headers = {
      Accept: "application/json",
      "Content-type": "application/json",
    };

    api
      .post("/", {
        data,
        headers,
      })
      .then(function(res) {
        console.log(res.data);
        setReturnData(res.data);
      })
      .catch(function(error) {
        console.log("error", error.message);
      });
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const ddd = returnData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {ddd.map(process => (
        <Card
          className={classes.card}
          style={{
            marginBottom: 15,
          }}
        >
          <CardContent>
            <BoxAssert className="assert">{process.priority}</BoxAssert>
            <Title>{process.areaAtuacao}</Title>
            <p>{process.subArea}</p>
            <p>{process.tempoAdvocacia}</p>
            <p>{process.jurisprudenciaAtual}</p>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="small"
            >
              DOWNLOAD
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="small"
              onClick={handleClickOpen}
            >
              DETALHES
            </Button>
          </CardActions>
        </Card>
      ))}
      {ddd.map(process1 => (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {/* {"Use Google's location service?"} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {process1.text}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ))}
    </>
  );
}
