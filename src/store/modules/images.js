import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const initialState = {
  currentImage: {
    url: null
  }
};

export const imagesModule = {
  namespaced: true,

  state: {
    ...initialState
  },

  // Think of getters as computed properties for a store.
  // They should read the current state of the module and return something.
  // It should give some meaning to what it is expected to present.
  // Meaningful names are very important!
  getters: {
    currentImageHasUrl: state => {
      return state.currentImage && state.currentImage.url;
    }
  },

  mutations: {
    setCurrentImage(state, Image) {
      state.currentImage = { ...Image };
    },
    setCurrentImageUrl(state, url) {
      state.currentImage ? (state.currentImage.url = url) : { url };
    }
  },

  // These are useful for any asynchronous activity the application needs.
  // Especially useful for calling a back end server, or when non-blocking mutations are needed.
  actions: {
    loadCurrentImage({ commit }) {
      // simulation d'un appel réseau
      setTimeout(() => {
        // And do the following after 2 seconds
        commit("setCurrentImage", {
          url: "https://picsum.photos/300/200"
        });
      }, 2000);
    }
  }
};
