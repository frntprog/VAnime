import axios from "axios";

export const animeModule = {
  state: () => ({
    animeList: [],
  }),
  mutations: {
    setAnimeList(state, animeList) {
      state.animeList = animeList;
    },
  },
  actions: {
    async getAnime({ state, commit }) {
      const response = await axios.get("top/anime");
      console.log(response);
      commit("setAnimeList", response.data);
    },
  },
};
