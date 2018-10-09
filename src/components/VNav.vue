<template>
  <nav>
    <v-list :list="navList" />
  </nav>
</template>

<script>
  import VList from './VList.vue';

  export default {
    name: 'VNav',

    components: {
      VList,
    },

    data: () => ({
      navList: [{
        text: 'Home',
        path: '/',
      }, {
        text: 'About',
        path: '/about',
      }],
    }),
  };
</script>
