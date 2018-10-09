<template>
  <section>
    <header>
      <v-nav />
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>Footer</footer>
  </section>
</template>

<script>
  import VNav from './components/VNav.vue';

  export default {
    name: 'App',

    components: {
      VNav,
    },
  };
</script>
