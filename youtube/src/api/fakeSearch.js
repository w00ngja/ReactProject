import axios from "axios";

export default class FakeSearch {
  constructor() {}

  // async Search(keyword) {
  //   return axios
  //     .get(`data/video${keyword ? "Keyword" : "Trended"}.json`)
  //     .then((res) => res.data.items);
  // }

  // #을 붙이게 되면, Class 내에서만 Private하게 사용할 수 있는 콜백이 됨
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  // 호출한 API에서 동일한 비디오 ID를 불러오는 객체 형태가 달라서,
  // 이를 통일시켜주었음
  async #searchByKeyword() {
    return axios
      .get(`/data/videoKeyword.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/data/videoTrended.json`).then((res) => res.data.items);
  }
}
