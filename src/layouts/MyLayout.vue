<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="blue-9" :inverted="$q.theme === 'ios'">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <router-link id="home-link" to="/">
          <q-toolbar-title>
            Travis Roach
            <div slot="subtitle">Full Stack Web Developer - Denver, CO</div>
          </q-toolbar-title>
        </router-link>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-tertiary' : null"
      :overlay='true'
      :mini='true'
      :mini-width='80'
      behavior='desktop'
    >
      <q-list no-border link inset-delimiter>
        <q-item @click.native="openURL('https://github.com/troach24/')">
          <q-item-side>
            <div v-if="$q.platform.is.mobile">
              <small class="text-weight-light text-white">GitHub</small>
              <br>
            </div>
            <q-icon
            v-if="$q.platform.is.desktop"
              class="q-pt-sm q-pb-sm"
              color="white"
              name="fab fa-github-square"
              size=40px
            />
            <q-icon
              v-if="$q.platform.is.mobile"
              class="q-pt-xs"
              color="white"
              name="fab fa-github-square"
              size=40px
            />
          </q-item-side>
        </q-item>
        <q-item @click.native="openURL('http://www.linkedin.com/in/travis-roach/')">
          <q-item-side>
            <div v-if="$q.platform.is.mobile">
              <small class="text-weight-light text-white">LinkedIn</small>
              <br>
            </div>
            <q-icon
              v-if="$q.platform.is.desktop"
              class="q-pt-sm q-pb-sm"
              color="white"
              name="fab fa-linkedin"
              size=40px
            />
            <q-icon
              v-if="$q.platform.is.mobile"
              class="q-pt-xs"
              color="white"
              name="fab fa-linkedin"
              size=40px
            />
          </q-item-side>
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/TravisRoach24')">
          <q-item-side>
            <div v-if="$q.platform.is.mobile">
              <small class="text-weight-light text-white">Twitter</small>
              <br>
            </div>
            <q-icon
              v-if="$q.platform.is.desktop"
              class="q-pt-sm q-pb-sm"
              color="white"
              name="fab fa-twitter-square"
              size=40px
            />
            <q-icon
              v-if="$q.platform.is.mobile"
              class="q-pt-xs"
              color="white"
              name="fab fa-twitter-square"
              size=40px
            />
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side>
            <router-link to="/projects">
              <div v-if="$q.platform.is.mobile">
                <small class="text-weight-light text-white">Projects</small>
                <br>
              </div>
              <q-icon
                v-if="$q.platform.is.desktop"
                class="q-pt-sm q-pb-sm"
                color="white"
                name="fas fa-rocket"
                size=37px
              />
              <q-icon
                v-if="$q.platform.is.mobile"
                class="q-pt-xs"
                color="white"
                name="fas fa-rocket"
                size=37px
              />
            </router-link>
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

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    openURL,
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
