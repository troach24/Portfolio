<template>
  <div>
    <q-card class="animate-scale q-ma-xs" inline style="width: 800px">
      <q-card-media overlay-position="bottom">
        <img src="~assets/bio-pic-2.jpg">
        <q-card-title slot="overlay">
          Web Developer
          <span slot="subtitle"><q-icon name="place" /> Denver, CO</span>
          <q-btn
            slot="right"
            class="row items-center"
            color="primary"
            @click="contactForm = true"
            label="Contact Me"
          />
          <a
            slot="right"
            href="https://drive.google.com/file/d/1wmCizCRbE2J1wWzVCHAH-5ckQ8Qsk2AU/view?usp=sharing"
            target="_blank"
          >
            <q-btn class="row items-center q-ml-sm" color="primary" label="View Resume" />
          </a>
        </q-card-title>
      </q-card-media>
      <q-card-title>
      </q-card-title>
      <q-card-main>
        <p>
          Born and raised in the Vail Valley 🏔🏂 / CSU Ram 🐏 / Galvanize Graduate - August 2018 🤓
        </p>
        <p>
          Passoinate about solving real world problems using code ≺ 🙌≻
        </p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn class="q-mr-sm" flat label="TOP TECH SKILLS" />
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" height="25px" width="25px" />
            <q-tooltip>
              Vue.JS
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="25px" width="25px">
            <q-tooltip>
              JavaScript
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" height="25px" width="25px">
            <q-tooltip>
              Node.JS
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" height="25px" width="25px">
            <q-tooltip>
              Angular
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://d1eq8vvyuam4eq.cloudfront.net/assets/images/hacknlearn/react-logo.svg" height="28px" width="28px">
            <q-tooltip>
              React
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="http://www.stickpng.com/assets/images/58480873cef1014c0b5e48ea.png" height="27px" width="20px">
            <q-tooltip>
              Heroku
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/544px-HTML5_logo_resized.svg.png" height="25px" width="25px">
            <q-tooltip>
              HTML5
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://www.logolynx.com/images/logolynx/7e/7eed17a45f24e41077eb7cad1d031492.png" height="25px" width="25px">
            <q-tooltip>
              CSS
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png" height="25px" width="25px">
            <q-tooltip>
              PostgreSQL
            </q-tooltip>
          </a>
          <a href="#">
            <img class="q-mt-xs q-mr-md" src="http://www.mamoo-digital.com/images/clients-logos/mongodb.png" height="27px" width="27px">
            <q-tooltip>
              MongoDB
            </q-tooltip>
          </a>
      </q-card-actions>
    </q-card>
    <q-card v-if="contactForm" class="animate-scale q-ma-xs" inline style="width: 800px">
      <q-card-title>
        <div>
          <q-input v-model="emailObj.name" stack-label="Your Name" value />
          <q-input v-model="emailObj.email" stack-label="Your Email" value />
          <q-input v-model="emailObj.subject" stack-label="Subject" value />
          <q-input
            v-model="emailObj.message"
            type="textarea"
            float-label="Message"
            :max-height="100"
            rows="7"
          />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-actions align="end">
        <q-btn @click="contactForm = false" class="q-mr-sm" color="deep-orange" label="Cancel" />
        <q-btn
          :loading="loading"
          class="q-mr-sm"
          color="primary"
          label="SEND IT"
          @click="submitMessage()"
        >
          <span slot="loading">Sending...</span>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['sendEmail', 'emailObj'],
  data: () => ({
    value: '',
    contactForm: false,
    loading: false,
  }),
  methods: {
    async submitMessage() {
      this.loading = true;
      await this.sendEmail();
      setTimeout(() => {
        this.loading = false;
        this.contactForm = false;
        // display pop up for SUCCESS! 🙌
        // include a phone number field with contact form
        this.notification();
      }, 200);
      // was 2000
    },
    notification() {
      this.$q.notify({
        // only required parameter is the message:
        message: 'Thank you for reaching out!',

        /*
        * All parameters below are optional:
        */

        timeout: 4000, // in milliseconds; 0 means no timeout
        // was 4000

        // "type" adds a color and icon,
        // so you don't need to specify them.
        // Available values: 'positive', 'negative', 'warning', 'info'
        type: 'positive',

        color: 'positive',
        textColor: 'black', // if default 'white' doesn't fits
        icon: 'check',
        detail: 'I will be in touch as soon as possible.',
        position: 'top-right', // 'top', 'left', 'bottom-left' etc

        actions: [
          {
            label: 'Okay',
            // icon: 'checkbox', // optional
            noDismiss: false, // optional, v0.15.11+
            handler: () => {
              console.log('Confirmed popup message');
            },
          },
        ],
        onDismiss() { // v0.15.11+
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
