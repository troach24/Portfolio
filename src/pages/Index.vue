<template>
  <q-page class="flex flex-center container">
    <div>
      <h1 class="animate-scale title-text text-tertiary">Travis Roach<br></h1>
      <h3 class="animate-scale title-text text-tertiary">'Fortune favors the audacious'</h3>
      <div class="q-ml-lg float-left q-subheading">- Desiderius Erasmus</div>
    </div>
    <div class="home-buttons">
      <router-link to="/projects">
        <q-btn class="q-mr-sm" outline rounded color="blue-9" label="Projects" />
      </router-link>
      <router-link to="/about">
        <q-btn class="q-ml-sm" outline rounded color="blue-9" label="About Me" />
      </router-link>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { easing } from 'quasar';

export default {
  name: 'PageIndex',
  data() {
    return {
      overshoot: easing.overshoot,
    };
  },
};
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .title-text {
    margin: 0;
    text-align: center;
  }
  .home-buttons {
    margin-top: 30px;
  }
</style>

