<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { getSentences } from './apis/weather'
import { onMounted, ref } from 'vue'
const title = ref()
const content = ref()
onMounted(() => {
  getSentences().then((res) => {
    const result = res?.result
    title.value = result?.from
    content.value = result?.name
  })
})
</script>

<template>
  <header>
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/gifLogo.gif" width="125" height="125" />
    </div>
    <div class="wrapper">
      <HelloWorld :msg="title" :content="content" />

      <nav>
        <RouterLink to="/">Homecui</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 300px;
  height: 300px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* display: flex; */
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
