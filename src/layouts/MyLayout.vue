<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="positive"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Travis Roach
          <div slot="subtitle">Full Stack Web Developer - Denver, CO</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      :overlay='true'
      :mini='true'
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <!-- <q-list-header>Resume</q-list-header> -->
        <q-item @click.native="openURL('https://github.com/troach24/')">
          <q-item-side icon="">
            <q-icon name="fab fa-github-square" size=40px />
          </q-item-side>
          <q-item-main label="GitHub" sublabel="github.com/troach24" />
        </q-item>
        <q-item @click.native="openURL('http://www.linkedin.com/in/travis-roach/')">
          <q-item-side icon="">
            <q-icon name="fab fa-linkedin" size=40px />
          </q-item-side>
          <q-item-main label="LinkedIn" sublabel="linkedin.com/in/travis-roach/" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/TravisRoach24')">
          <q-item-side icon="">
            <q-icon name="fab fa-twitter-square" size=40px />
          </q-item-side>
          <q-item-main label="Twitter" sublabel="@TravisRoach24" />
        </q-item>
      </q-list>

      <q-list
        no-border
        link
        inset-delimiter
      >
        <!-- <q-list-header>Portfolio</q-list-header> -->
          <q-item>
            <q-item-side>
              <q-icon name="fas fa-rocket" size=40px />
            </q-item-side>
          </q-item>
        <!--<q-item @click.native="openURL('https://github.com/troach24/Galvanize-Capstone')">
          <q-item-side>
            <q-icon name="fas fa-golf-ball" size=42px />
          </q-item-side>
          <q-item-main label="'Ready Golf'" sublabel="Click To See Preview" />
        </q-item>
        <q-item @click.native="openURL('https://eazy-marketplace.firebaseapp.com/')">
          <q-item-side>
            <q-icon name="fas fa-shopping-cart" size=30px />
          </q-item-side>
          <q-item-main label="'Eazy Marketplace'" sublabel="Click For Live Demo" />
        </q-item>
        <q-item @click.native="openURL('https://bridge-the-fridge.firebaseapp.com/')">
          <q-item-side>
            <q-icon name="kitchen" size=40px />
          </q-item-side>
          <q-item-main label="'Bridge The Fridge'" sublabel="Click For Live Demo" />
        </q-item> -->
      </q-list>

    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: false,
      // leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
