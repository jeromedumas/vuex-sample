import Vuex from "vuex";
import Vue from "vue";

import { imagesModule } from "./modules/images";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    images: imagesModule
  }
});
