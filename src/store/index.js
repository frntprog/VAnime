import { createStore } from "vuex";
import { animeModule } from "./animeModule";

export default createStore({
  modules: { anime: animeModule },
});
