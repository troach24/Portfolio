<template>
  <q-layout view="lHh Lpr lFf">
    <Header :leftDrawerOpen="leftDrawerOpen"
      @open-drawer="openDrawer"
    />
    <q-layout-drawer
      :overlay='true'
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-tertiary' : null"
      :mini='true'
      :mini-width='80'
      behavior='desktop'
    >
      <q-list no-border link inset-delimiter>
        <q-item @click.native="goToLink('https://github.com/troach24/')">
          <q-item-side>
            <small class="text-weight-light text-white">GitHub</small>
            <br>
            <q-icon
              class="q-pt-sm q-pb-sm"
              color="white"
              name="fab fa-github-square"
              size=40px
            />
          </q-item-side>
        </q-item>
        <q-item @click.native="goToLink('http://www.linkedin.com/in/travis-roach/')">
          <q-item-side>
            <small class="text-weight-light text-white">LinkedIn</small>
            <br>
            <q-icon
              class="q-pt-sm q-pb-sm"
              color="white"
              name="fab fa-linkedin"
              size=40px
            />
          </q-item-side>
        </q-item>
        <q-item @click.native="goToLink('https://twitter.com/TravisRoach24')">
          <q-item-side>
            <small class="text-weight-light text-white">Twitter</small>
            <br>
            <q-icon
              class="q-pt-sm q-pb-sm"
              color="white"
              name="fab fa-twitter-square"
              size=40px
            />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <router-link to="/projects">
              <small class="text-weight-light text-white">Projects</small>
              <br>
              <q-icon
                class="q-pt-sm q-pb-sm"
                color="white"
                name="fas fa-dolly"
                size=37px
              />
            </router-link>
          </q-item-side>
        </q-item>
        <q-item @click.native="goToLink('https://drive.google.com/file/d/1wmCizCRbE2J1wWzVCHAH-5ckQ8Qsk2AU/view?usp=sharing')">
          <q-item-side>
            <small class="text-weight-light text-white">Resume</small>
            <br>
            <q-icon
              class="q-pt-sm q-pb-sm"
              color="white"
              name="far fa-file-alt"
              size=40px
            />
          </q-item-side>
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import Header from '../components/Header';

export default {
  name: 'MyLayout',
  components: {
    Header,
  },
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
  methods: {
    openDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    goToLink(str) {
      openURL(str);
    },
  },
  computed: {
  },
};
</script>

<style>
a {
  text-decoration: none;
}
#home-link {
  color: white;
}
</style>
