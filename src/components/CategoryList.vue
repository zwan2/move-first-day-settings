<template id="app-list">
  <b-column no-gutters>
    <div v-for="app in category" :key="app.id">
      <AppInfo :app="app"></AppInfo>
    </div>
  </b-column>
</template>

<script>
import AppInfo from "./AppInfo";
export default {
  name: "CategoryList",
  components: {
    AppInfo
  },
  props: ["category"]
};
</script>