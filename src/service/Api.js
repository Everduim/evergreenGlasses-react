import axios from "axios";


export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
    baseURL: "mongodb+srv://everduim:everduim@cluster0.cs594tg.mongodb.net/?retryWrites=true&w=majority",
    headers: APIHeaders,
})