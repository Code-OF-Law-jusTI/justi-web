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

const DADOS = [
  {
    areaAtuacao: "DIREITO CIVIL",
    subArea: "HABEAUS CORPUS",
    leis: [{ leiAplicada: "", numeroArtigo: "" }],
    porcentagemSucumbencia: 15,
    diasTramiteProcessual: 30,
    tempoAdvocacia: 2,
    jurisprudenciaAtual: true,
    text:
      "Seguro DPVAT / Espécies de Contratos / Obrigações / DIREITO CIVIL Interesse Processual / Extinção do Processo Sem Resolução de Mérito / Formação, Suspensão e Extinção do Processo / DIREITO PROCESSUAL CIVIL E DO TRABALHO DGJUR - SECRETARIA DA 27a CÂMARA CÍVEL",
    priority: "HIGH",
    keywords: [
      {
        text: "Seguro DPVAT",
        sentiment: { score: 0, label: "neutral" },
        relevance: 0.884762,
        count: 1,
      },
      {
        text: "Extinção do Processo",
        sentiment: { score: 0, label: "neutral" },
        relevance: 0.863166,
        count: 2,
      },
      {
        text: "DIREITO CIVIL",
        sentiment: { score: 0, label: "neutral" },
        relevance: 0.777084,
        count: 1,
      },
    ],
  },
  {
    areaAtuacao: "DIREITO CIVIL",
    subArea: "HABEAUS",
    leis: [{ leiAplicada: "", numeroArtigo: "" }],
    porcentagemSucumbencia: 20,
    diasTramiteProcessual: 50,
    tempoAdvocacia: 10,
    jurisprudenciaAtual: false,
    text:
      "AGRAVO INTERNO NO RECURSO ESPECIAL. EXECUÇÃO DE ALIMENTOS. EXTINÇÃO DO PROCESSO POR ABANDONO. PARTE AUTORA QUE, MESMO INSTADA A SE MANIFESTAR, PERMANECEU INERTE. INTIMAÇÃO PELOS CORREIOS E OFICIAL DE JUSTIÇA INFRUTÍFERA. DEVER DAS PARTES DE MANTER ATUALIZADO O ENDEREÇO INFORMADO NA PETIÇÃO INICIAL. EXTINÇÃO DO FEITO QUE SE IMPUNHA. CONSONÂNCIA COM A JURISPRUDÊNCIA DESTA CORTE. SÚMULA 83/STJ. AGRAVO INTERNO IMPROVIDO. 1. É dever da parte e do seu advogado manter atualizado o endereço onde receberão intimações (art. 77, V, do CPC/2015), sendo considerada válida a intimação dirigida ao endereçamento declinado na petição inicial, mesmo que não recebida pessoalmente pelo interessado a correspondência, se houver alteração temporária ou definitiva nessa localização (art. 274, parágrafo único, do CPC/2015). 2. No caso, a intimação pessoal da exequente foi inviabilizada por falta do endereço correto, motivo pelo qual foi extinto o processo sem resolução de mérito. 3. Agravo interno improvido.",
    priority: "MEDIUM",
    keywords: [
      {
        text: "PARTE AUTORA QUE",
        sentiment: { score: 0, label: "neutral" },
        relevance: 0.803306,
        count: 1,
      },
      {
        text: "parágrafo único",
        sentiment: { score: 0, label: "neutral" },
        relevance: 0.63199,
        count: 1,
      },
      {
        text: "EXTINÇÃO DO PROCESSO",
        sentiment: { score: 0, label: "neutral" },
        relevance: 0.615255,
        count: 1,
      },
    ],
  },
];

export default function ListCard() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {}, []);

  // function getData() {
  //   const data = {
  //     areaAtuacao: "Direito Civil",
  //     subArea: "dpvat",
  //     leis: [
  //       {
  //         leiAplicada: "",
  //         numeroArtigo: "",
  //       },
  //     ],
  //     conjuntoPalavras: ["Processo", "publicação", "Movimento"],
  //   };
  //   api
  //     .post("process_batch", {
  //       data,
  //     })
  //     .then(function(res) {
  //       console.log(res.data);
  //       setReturnData(res.data);
  //     })
  //     .catch(function(error) {
  //       console.log("error", error.message);
  //     });
  // }

  const classes = useStyles();
  const ddd = DADOS;

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
            <BoxAssert className="assert">
              {process.priority === "HIGH" ? "ALTA RELEVANCIA" : "RELEVANTE"}
            </BoxAssert>
            <Title>Area de Atuação : {process.areaAtuacao}</Title>
            <p>Sub Area: {process.subArea}</p>
            <p>Tempo de Advocacia: {process.tempoAdvocacia} anos </p>
            <p>
              Jurisprudencia Atual:{" "}
              {process.jurisprudenciaAtual === true
                ? "Menos de 1 ano"
                : "Mais de 3 anos"}
            </p>
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
              style={{
                backgroundColor: "#55286F",
                color: "white",
              }}
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
              <Button
                onClick={handleClose}
                color="primary"
                autoFocus
                style={{
                  backgroundColor: "#55286F",
                  color: "white",
                }}
              >
                FECHAR
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ))}
    </>
  );
}
