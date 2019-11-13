import axios from "axios";

const api = axios.create({
  baseURL:
    // "http://node-express-hacka-oab.qqrskdn5hc.sa-east-1.elasticbeanstalk.com",
    "https://hacka-oab-api.herokuapp.com",
});

export default api;
