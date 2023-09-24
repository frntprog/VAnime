import axios from "axios";

export const animeModule = {
  state: () => ({
    topAnimeList: [],
  }),
  mutations: {
    setTopAnimeList(state, animeList) {
      state.topAnimeList = animeList;
    },
  },
  actions: {
    async getTopAnime({ state, commit }) {
      const response = await axios.get("top/anime");
      console.log(response);
      commit("setTopAnimeList", response.data);
    },
  },
};
