<template>
  <div>
    <div
      v-for="(item, index) in routeList"
      :key="index">
      <h3>{{ item.title }}</h3>
      <li
        v-for="(res, indexs) in item.links"
        :key="indexs">
        <router-link :to="res.url">{{ res.caption }}</router-link>
        <!-- <a :href="res.url">{{ res.caption }}</a> -->
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    routeList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
