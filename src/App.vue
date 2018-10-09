<template>
  <section>
    <header>
      <nav>
        <ul>
          <li>
            <v-link href="/">Home</v-link>
          </li>

          <li>
            <v-link href="/about">About</v-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>Footer</footer>
  </section>
</template>

<script>
  import VLink from './components/VLink.vue';

  export default {
    components: {
      VLink,
    },
  };
</script>
