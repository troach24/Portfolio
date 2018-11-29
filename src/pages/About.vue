<template>
  <q-page class="flex flex-center q-ml-none q-pl-none">
    <div class="container">
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
      subject: 'Rough Subject',
      name: 'T Rizzle My Nizzle',
      email: 'real.steezy@gmail.com',
      message: 'Yo DAWG I miss you',
    },
  }),
  async mounted() {
    await this.testEmail();
  },
  methods: {
    async testEmail() {
      const res = await fetch('https://portfolio-server-tr.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(this.emailMessage),
      });
      return res;
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
