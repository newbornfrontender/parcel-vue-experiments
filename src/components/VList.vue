<template>
  <ul>
    <li
      v-for="item of list"
      :key="item.id"
    >
      <v-link :href="item.path">{{ item.text }}</v-link>
    </li>
  </ul>
</template>

<script>
  import VLink from './VLink.vue';

  export default {
    name: 'VList',

    props: {
      list: {
        type: Array,
        required: true,
      },
    },

    components: {
      VLink,
    },
  };
</script>
