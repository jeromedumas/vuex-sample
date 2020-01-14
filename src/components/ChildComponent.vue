<template>
  <div>
    <p>Image url = '{{ url }}'</p>
    <img :src="url" />
    <div>
      <input type="text" v-model="value" style="width: 300px;" />
      <button @click="updateUrl">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      value: this.url
    };
  },

  methods: {
    updateUrl() {
      this.$emit("update:url", this.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
