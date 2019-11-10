import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
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
import logo from "../../../src/images/files.gif";
import Checkbox from "@material-ui/core/Checkbox";
import { ButtonGroup } from "@material-ui/core";

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

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log("do validate");
    }
  }

  return (
    <>
      <PageTitle title="Filtro Justi" />
      <Grid container spacing={3}>
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
            <InputLabel htmlFor="component-simple">Numero da Lei</InputLabel>
            <Input id="lei" value={lei} onChange={changeSetLei} />
          </FormControl>
          <br />
          <FormControl
            className={classes.formControl}
            style={{
              marginRight: 50,
            }}
          >
            <InputLabel htmlFor="component-simple">Numero do Artigo</InputLabel>
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
              <Input id="palavra" value={palavra} onChange={addWordToArray} />
              <Button
                variant="contained"
                color="secondary"
                size="small"
                aria-label="small outlined button group"
                className={classes.button}
                style={{
                  marginTop: "10px",
                }}
                onSubmit={addWordToArray}
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

      {/* <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Visits Today"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                12, 678
              </Typography>
              <LineChart
                width={55}
                height={30}
                data={[
                  { value: 10 },
                  { value: 15 },
                  { value: 10 },
                  { value: 17 },
                  { value: 18 },
                ]}
                margin={{ left: theme.spacing(2) }}
              >
                <Line
                  type="natural"
                  dataKey="value"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </div>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Registrations
                </Typography>
                <Typography size="md">860</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Sign Out
                </Typography>
                <Typography size="md">32</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Rate
                </Typography>
                <Typography size="md">3.25%</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="App Performance"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Integration
                </Typography>
              </div>
              <div className={classes.legendElement}>
                <Dot color="primary" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  SDK
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Integration
              </Typography>
              <LinearProgress
                variant="determinate"
                value={30}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                SDK
              </Typography>
              <LinearProgress
                variant="determinate"
                value={55}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Server Overview"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                60% / 37°С / 3.3 Ghz
              </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.secondary.main}
                      fill={theme.palette.secondary.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                54% / 31°С / 3.3 Ghz
              </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.primary.main}
                      fill={theme.palette.primary.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                57% / 21°С / 3.3 Ghz
              </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.warning.main}
                      fill={theme.palette.warning.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Revenue Breakdown" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap" }}>
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Typography
                  variant="h5"
                  color="text"
                  colorBrightness="secondary"
                >
                  Daily Line Chart
                </Typography>
                <div className={classes.mainChartHeaderLabels}>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="warning" />
                    <Typography className={classes.mainChartLegentElement}>
                      Tablet
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Mobile
                    </Typography>
                  </div>
                  <div className={classes.mainChartHeaderLabel}>
                    <Dot color="primary" />
                    <Typography className={classes.mainChartLegentElement}>
                      Desktop
                    </Typography>
                  </div>
                </div>
                <Select
                  value={mainChartState}
                  onChange={e => setMainChartState(e.target.value)}
                  input={
                    <OutlinedInput
                      labelWidth={0}
                      classes={{
                        notchedOutline: classes.mainChartSelectRoot,
                        input: classes.mainChartSelect,
                      }}
                    />
                  }
                  autoWidth
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <ComposedChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={false}
                />
                <Area
                  type="natural"
                  dataKey="desktop"
                  fill={theme.palette.background.light}
                  strokeWidth={0}
                  activeDot={false}
                />
                <Line
                  type="natural"
                  dataKey="mobile"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="linear"
                  dataKey="tablet"
                  stroke={theme.palette.warning.main}
                  strokeWidth={2}
                  dot={{
                    stroke: theme.palette.warning.dark,
                    strokeWidth: 2,
                    fill: theme.palette.warning.main,
                  }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        {mock.bigStat.map(stat => (
          <Grid item md={4} sm={6} xs={12} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid> */}
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
