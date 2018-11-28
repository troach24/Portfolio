<template>
  <q-page class="flex flex-center q-ml-none q-pl-none">
    <div class="container">
      <!-- update styling & design on about me page -->
      <!-- <img src="https://docs.google.com/uc?export=download&id=15JYvV5N7ENiojcn552tGfwwk-E-0sJEc" alt=""> -->
      <!-- <img
        src="https://render.bitstrips.com/v2/cpanel/7e3bc453-64fb-4a34-bcaa-481724e5d3d9-e362807d-2567-490a-be3e-168e20f4adea-v1.png?transparent=1&palette=1"
        alt="Soul searching bitmoji"
        width="200px"
      >
      <h3 class="q-mt-sm">Hang tight while I do some soul searching...</h3> -->
      <q-btn
        class="q-mb-lg"
        rounded
        outline
        v-go-back=" '/' "
        color="blue-9"
        label="Back"
      />

      <AboutCardDesktop v-if="$q.platform.is.desktop" />
      <AboutCardMobile v-if="$q.platform.is.mobile" />

    </div>
  </q-page>
</template>

<script>
import AboutCardDesktop from '../components/AboutCardDesktop';
import AboutCardMobile from '../components/AboutCardMobile';

export default {
  name: 'About',
  components: {
    AboutCardDesktop,
    AboutCardMobile,
  },
  data: () => ({
    emailMessage: {
      name: 'Travis',
      email: 'email',
      message: 'eyyyyyyyY',
    },
  }),
  async mounted() {
    const emailTest = await this.testEmail();
    console.log(emailTest);
  },
  methods: {
    async testEmail() {
      const res = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(this.emailMessage),
      });
      return res.json();
    },
    async testServer() {
      const res = await fetch('http://localhost:3000/', {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      return res.json();
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bio {
  position: absolute;
  float: left;
}
</style>
