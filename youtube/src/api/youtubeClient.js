import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    // 기본 URL과, 사용되는 Key 설정
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  // async search(keyword) {
  //   // 호출한 API에서 비디오의 id 값을 불러오는 경로가 다르기 때문에 분리해주었음
  //   // 함수 앞에 #을 붙이게 되면 private하게 사용할 수 있음
  //   return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  // }

  async search(params) {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }

  async channels(params) {
    return this.httpClient.get('channels', params);
  }

  // async #searchByKeyword(keyword) {
  //   // return axios
  //   //   .get(`/videos/search.json`)
  //   //   .then((res) => res.data.items)
  //   //   .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));

  //   return this.httpClient
  //     .get('search', { params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword } })
  //     .then((res) => res.data.items)
  //     .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  // }

  // async #mostPopular(keyword) {
  //   // return axios.get(`/videos/popular.json`).then((res) => res.data.items);

  //   return this.httpClient
  //     .get('videos', { params: { part: 'snippet', maxResults: 25, chart: 'mostPopular' } })
  //     .then((res) => res.data.items);
  // }
}
