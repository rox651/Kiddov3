import { Client, cacheExchange, fetchExchange } from "@urql/core";
import { BACKEND_URL } from "../../domain/constants";

console.log("Backend url", BACKEND_URL);

const client = new Client({
  url: BACKEND_URL,
  exchanges: [cacheExchange, fetchExchange],
});

export default client;
