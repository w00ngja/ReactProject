import axios from "axios";

export async function Search(keyword) {
  // return axios.get(`data/videoKeyword.json`).then((res) => res.data.items);
  return axios
    .get(`data/video${keyword ? "Keyword" : "Trended"}.json`)
    .then((res) => {
      console.log(res);
      return res.data.items;
    });
}
