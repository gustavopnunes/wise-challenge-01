import axios from "axios";

export const api = axios.create({
  baseURL: "https://wise-challenge01-django-server.herokuapp.com/",
});
