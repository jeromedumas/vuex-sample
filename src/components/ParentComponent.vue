<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <child-component
        :url="currentImage.url"
        @update:url="updateImageUrl"
      ></child-component>
    </div>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "ParentComponent",

  components: {
    ChildComponent
  },

  props: {
    msg: String
  },

  data() {
    return {};
  },

  created() {
    // chargement de l'objet packaging dans le store (les données seront déjà obervées)
    this.LOAD_CURRENT_IMAGE();
  },

  computed: {
    // currentPackaging() {
    //   console.log(this.$store.state.packagings.currentPackaging);
    //   return this.$store.state.packagings.currentPackaging;
    // }
    ...mapState("images", ["currentImage"])
  },

  methods: {
    ...mapMutations({
      SET_IMAGE_URL: "images/setCurrentImageUrl"
    }),

    ...mapActions({
      LOAD_CURRENT_IMAGE: "images/loadCurrentImage"
    }),

    updateImageUrl(url) {
      // mise à jour de la nouvelle url depuis le composant enfant
      this.SET_IMAGE_URL(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
