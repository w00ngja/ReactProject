import axios from 'axios';

export default class FakeYoutubeClient {
  constructor() {}

  // async search(keyword) {
  //   // 호출한 API에서 비디오의 id 값을 불러오는 경로가 다르기 때문에 분리해주었음
  //   // 함수 앞에 #을 붙이게 되면 private하게 사용할 수 있음
  //   return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  // }

  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  // async #searchByKeyword() {
  //   return axios
  //     .get(`/videos/search.json`)
  //     .then((res) => res.data.items)
  //     .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  // }

  // async #mostPopular() {
  //   return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  // }
}
