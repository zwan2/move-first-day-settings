<template>
  <ul class="app-list list-unstyled">
    <b-link :href="app.link" target="_blank">
      <b-media tag="li" vertical-align="center">
        <b-img :src="app.icon" slot="aside" blank-color="#abc" width="64" alt="placeholder"></b-img>
        <h5 class="mt-0 mb-1">{{app.title}}</h5>
        <p class="mb-0">{{app.content}}</p>
      </b-media>
    </b-link>
  </ul>
</template>

<script>
export default {
  name: "AppInfo",
  props: ["app"]
};
</script>

<style lang="scss" scoped>
.app-list {
  margin: 1rem 2.5rem 3rem;
}
</style>