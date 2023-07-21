// import axios from 'axios';

export default class Youtube {
  constructor(apiClient) {
    // // 기본 URL과, 사용되는 Key 설정
    // this.httpClient = axios.create({
    //   baseURL: 'https://www.googleapis.com/youtube/v3',
    //   params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },)

    // 자체적으로 Client를 생성하는 것이 아닌, 필요한 데이터를 받아오도록 리팩토링 (의존성 주입, DI)
    this.apiClient = apiClient;
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({ params: { part: 'snippet', maxResults: 25, type: 'video', relatedToVideoId: id } })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async channelImageURL(id) {
    return this.apiClient.channels({ params: { part: 'snippet', id } }).then((res) => {
      console.log(res);
      return res.data.items[0].snippet.thumbnails.default.url;
    });
  }

  async search(keyword) {
    // 호출한 API에서 비디오의 id 값을 불러오는 경로가 다르기 때문에 분리해주었음
    // 함수 앞에 #을 붙이게 되면 private하게 사용할 수 있음
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    // return axios
    //   .get(`/videos/search.json`)
    //   .then((res) => res.data.items)
    //   .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));

    // return this.httpClient
    //   .get('search', { params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword } })
    //   .then((res) => res.data.items)
    //   .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));

    return (
      this.apiClient
        // Promise를 이용해 통신하기 때문에, then을 통해 처리
        .search({ params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword } })
        .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })))
    );
  }

  async #mostPopular(keyword) {
    // return axios.get(`/videos/popular.json`).then((res) => res.data.items);

    // return this.httpClient
    //   .get('videos', { params: { part: 'snippet', maxResults: 25, chart: 'mostPopular' } })
    //   .then((res) => res.data.items);

    return this.apiClient
      .videos({ params: { part: 'snippet', maxResults: 25, chart: 'mostPopular' } })
      .then((res) => res.data.items);
  }
}

// 의존성 주입을 통해, 해당 클래스는 외부로부터 전달받은 API Client에게 메서드(search)에 맞는 파라미터를 전달만 하고,
// 각각의 client 파일에서 전달받은 params를 기반으로 수신받은 데이터를 반환한다.
