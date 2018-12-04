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
      <AboutCardDesktop
        :sendEmail="sendEmail"
        v-if="$q.platform.is.desktop"
        :emailObj="emailObj"
      />
      <AboutCardMobile
        :sendEmail="sendEmail"
        v-if="$q.platform.is.mobile"
        :emailObj="emailObj"
      />
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
    emailObj: {},
  }),
  methods: {
    async sendEmail() {
      const res = await fetch('https://portfolio-server-tr.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(this.emailObj),
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
