import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8899",
  headers: { "content-type": "application/json" },
});

export default http;

// note de imad : "axios bib pour envoyer des reqs http vers la partie backend"
