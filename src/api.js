import md5 from "md5";
import { stringifyUrl } from "query-string";

export const API_URL = process.env.REACT_APP_MARVEL_API_BASE;
export const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
export const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

export const fetchApi = async (resource = "") => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const url = `${API_URL}/${resource}`;
  const uri = stringifyUrl({
    url: url,
    query: {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash
    }
  });
  return fetch(uri);
};
