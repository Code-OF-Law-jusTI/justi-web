import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";
import { Grid, LinearProgress, Select, MenuItem } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import api from "../../service/api";
// styles
import useStyles from "./styles";
// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import CheckboxTree from "react-checkbox-tree";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { width } from "@material-ui/system";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import logo from "../../../src/images/files2.gif";
import Checkbox from "@material-ui/core/Checkbox";
import { ButtonGroup } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import { createBrowserHistory } from "history";

import history from "history";

import Input from "@material-ui/core/Input";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  const [category, setCategory] = useState("");
  const [lei, setLei] = useState("");
  const [numeroArtigo, setNumeroArtigo] = useState("");
  const [palavra, setPalavra] = useState("");
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedN: false,
  });
  const [state1, setState1] = useState({
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
  });

  const [state2, setState2] = useState({
    checkedI: false,
    checkedJ: false,
    checkedL: false,
    checkedM: false,
  });

  const [artigo, setArtigo] = useState("");

  const handleChange = event => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  const handleChangeCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const changeSetLei = event => {
    return setLei(event.target.value);
  };

  function changeArtigo(event) {
    console.log(event.target.value);
    return setArtigo(event.target.value);
  }

  function addWordToArray(event) {
    return setPalavra(event.target.value);
  }

  function postData(event) {
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

    // history.push("/list");
    changeScreen();
    api
      .post("process_batch", {
        data,
      })
      .then(function(res) {
        console.log("sucesso", res);
      })
      .catch(function(error) {
        console.log("error", error.message);
      });
  }

  function changeScreen() {
    const painel = document.querySelector("#presentation-panel");
    const panelLoading = document.querySelector(".section-img");
    setTimeout(() => {
      painel.style.display = "none";
      panelLoading.style.display = "flex";
    }, 1000);

    setTimeout(() => {
      window.location.href = "#app/list";
    }, 5000);
  }

  return (
    <>
      <div
        className="section-img"
        style={{
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          display: "none",
        }}
      >
        <img src={logo} height="25%" width="25%" />
        <p
          style={{
            color: "#210B2C",
          }}
        >
          Efetuando analise, aguarde...
        </p>
      </div>

      <ExpansionPanel
        defaultExpanded
        style={{
          padding: "20",
        }}
        id="presentation-panel"
      >
        <ExpansionPanelActions
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Busca qualificada
          </Typography>
        </ExpansionPanelActions>
        <form onSubmit={postData}>
          <Grid
            container
            spacing={3}
            style={{
              height: "auto !important",
              padding: "20px",
            }}
          >
            <Grid item xs={4}>
              <div>
                <FormControl
                  className={classes.formControl}
                  style={{
                    "margin-bottom": "20px",
                  }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Areas de Pesquisa
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={category}
                    onChange={handleChange}
                    style={{
                      width: "200px",
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Direito Civil</MenuItem>
                    <MenuItem value={20}>Direito Ambiental</MenuItem>
                    <MenuItem value={30}>Direito Empresarial</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {category === 10 && (
                <div>
                  <FormGroup
                    row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedA}
                          onChange={handleChangeCheck("checkedA")}
                          color="primary"
                        />
                      }
                      label="Indenizações"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChangeCheck("checkedB")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Código de Proteção e Defesa do Consumidor"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedN}
                          onChange={handleChangeCheck("checkedN")}
                          value="checkedN"
                          color="primary"
                        />
                      }
                      label="Habeaus Corpus"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedC}
                          onChange={handleChangeCheck("checkedC")}
                          value="checkedC"
                          color="primary"
                        />
                      }
                      label="Assessoria, elaboração, revisão"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedD}
                          onChange={handleChangeCheck("checkedD")}
                          value="checkedD"
                          color="primary"
                        />
                      }
                      label="Ajuizamento e defesa em ações de cobranças;
"
                    />
                  </FormGroup>
                </div>
              )}

              {/* CERTIFICACAO AMBIENTAL */}

              {category === 20 && (
                <div>
                  <FormGroup
                    row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedE}
                          onChange={handleChangeCheck("checkedE")}
                          color="primary"
                        />
                      }
                      label="Consultoria jurídica"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedF}
                          onChange={handleChangeCheck("checkedF")}
                          value="checkedF"
                          color="primary"
                        />
                      }
                      label="Legislação ambiental"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedG}
                          onChange={handleChangeCheck("checkedG")}
                          value="checkedG"
                          color="primary"
                        />
                      }
                      label="Licenciamento ambiental"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedH}
                          onChange={handleChangeCheck("checkedH")}
                          value="checkedH"
                          color="primary"
                        />
                      }
                      label="Certificação ambiental"
                    />
                  </FormGroup>
                </div>
              )}

              {/* DIREITO EMPRESARIAL */}

              {category === 30 && (
                <div>
                  <FormGroup
                    row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedI}
                          onChange={handleChangeCheck("checkedI")}
                          color="primary"
                        />
                      }
                      label="Registro de patentes e marcas;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedJ}
                          onChange={handleChangeCheck("checkedJ")}
                          value="checkedJ"
                          color="primary"
                        />
                      }
                      label="Recuperação judicial e extrajudicial;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedL}
                          onChange={handleChangeCheck("checkedL")}
                          value="checkedL"
                          color="primary"
                        />
                      }
                      label="Análise e desenvolvimento de novos contratos"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedM}
                          onChange={handleChangeCheck("checkedM")}
                          value="checkedM"
                          color="primary"
                        />
                      }
                      label="Assessoria ambiental"
                    />
                  </FormGroup>
                </div>
              )}
            </Grid>
            <Grid xs={4}>
              {/* <img src={logo} alt="loading" height="90%" width="100%" /> */}
              <FormControl
                className={classes.formControl}
                style={{
                  marginRight: 50,
                }}
              >
                <InputLabel htmlFor="component-simple">
                  Numero da Lei
                </InputLabel>
                <Input id="lei" value={lei} onChange={changeSetLei} />
              </FormControl>
              <br />
              <FormControl
                className={classes.formControl}
                style={{
                  marginRight: 50,
                }}
              >
                <InputLabel htmlFor="component-simple">
                  Numero do Artigo
                </InputLabel>
                <Input id="artigo" value={artigo} onChange={changeArtigo} />
              </FormControl>
              <br />
              <br />
              <div className="divWords">
                <FormControl
                  className={classes.formControl}
                  style={{
                    marginRight: 50,
                  }}
                >
                  <InputLabel htmlFor="component-simple">
                    Informe ate 3 palavras
                  </InputLabel>
                  <Input
                    id="palavra"
                    value={palavra}
                    onChange={addWordToArray}
                  />
                  <Button
                    onClick={() => {
                      const data = {
                        areaAtuacao: "Direito Civil",
                        subArea: "dpvat",
                        leis: [
                          {
                            leiAplicada: "",
                            numeroArtigo: "",
                          },
                        ],
                        conjuntoPalavras: [
                          "Processo",
                          "publicação",
                          "Movimento",
                        ],
                      };

                      api
                        .post("process_batch", {
                          data,
                        })
                        .then(function(res) {
                          console.log("sucesso", res);
                        })
                        .catch(function(error) {
                          console.log("error", error.message);
                        });
                    }}
                    variant="contained"
                    color="secondary"
                    size="small"
                    aria-label="small outlined button group"
                    className={classes.button}
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#55286f",
                      color: "#FFF",
                    }}
                    // eslint-disable-next-line no-undef
                  >
                    Add
                  </Button>
                </FormControl>
              </div>

              <div>
                <br />
                <span>Palavras selecionadas</span>
                <br />
                {palavra}
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            color="primary"
            className={classes.button}
            style={{
              backgroundColor: "#55286f",
              color: "#FFF",
              float: "right",
              marginBottom: 10,
              marginRight: 10,
            }}
          >
            EFETUAR ANALISE{" "}
          </Button>
        </form>
      </ExpansionPanel>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
