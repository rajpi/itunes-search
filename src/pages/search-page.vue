<template>
  <itunes-search></itunes-search>
</template>

<script>
import ItunesSearch from "../components/itunes-search/itunes-search.vue";

export default {
  name: "search-page",
  components: {
    "itunes-search": ItunesSearch
  },
  props: {},
  data() {
    return {
      msg: "Search Page"
    };
  }
};
</script>
