<template>
  <q-page class="flex flex-center animate-scale">
    <div class="flex flex-center q-mt-md">
      <q-btn
        v-if="$q.platform.is.mobile"
        class="q-mt-lg"
        rounded
        outline
        v-go-back=" '/projects' "
        color="black"
        label="Back"
      />
      <q-btn
        v-if="$q.platform.is.desktop"
        rounded
        outline
        v-go-back=" '/projects' "
        color="black"
        label="Back"
      />
      <div v-if="$q.platform.is.desktop" class="desk">
        <img class="q-mt-xl q-pl-md" src="https://user-images.githubusercontent.com/33434059/44483397-355c7100-a608-11e8-9275-60d8c6f246f6.gif" alt="">
        <div class="q-pl-md q-mt-lg">
          <q-jumbotron class="q-pa-sm">
            <div class="q-display-3 text-weight-light">Portfolio App</div>
            <h3 class="q-title text-weight-regular">
              You're looking at it!
            </h3>
            <h6 class="text-weight-light">
              I wanted to take an app-like approach to building my portfolio with the intention of
              showcasing myself and my web development projects. I used the Quasar Framework for
              the first time, which is built on my favorite framework - Vue.JS! Quasar's
              responsive capabilities allow for app deployment for a variety of different
              production environments using the same code base. The Quasar build packages consist of
              PWA (Progressive Web App), SPA (Single Page Application), Mobile Apps, SSR
              (Server Side Rendering) as well as Electron for use as a Desktop Application.
            </h6>
            <hr class="q-hr q-my-lg">
            <a href="https://github.com/troach24/Portfolio" target="_blank">
              <q-btn color="green" class="q-py-sm q-px-xl" label="View GitHub Repo" />
            </a>
            <div class="q-title q-mt-lg q-mb-md">Tech Used</div>
            <q-list class="q-ml-xs">
              <q-item>
              <q-item-side>
                <img src="~assets/vue-logo.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Vue.js</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="https://pbs.twimg.com/profile_images/883473889954852864/BC5h3cmj_400x400.jpg" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Quasar Framework</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="https://raw.githubusercontent.com/github/explore/31bb4034c9f4167799c1351a0d8418f4a245bc51/topics/zeit/zeit.png" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Now</q-item-tile>
              </q-item-main>
            </q-item>
            </q-list>
          </q-jumbotron>
        </div>
      </div>
      <div v-if="$q.platform.is.mobile" class="mobi">
        <img class="q-mt-md q-mr-sm" src="https://user-images.githubusercontent.com/33434059/44218656-6683ff80-a137-11e8-8352-30d46df3d1f9.gif" alt="" width="100%">
        <div class="q-mt-md q-mr-sm">
          <h1 class="text-weight-thin q-mb-xs q-mt-none">Portfolio App</h1>
          <h4 class="no-pad text-weight-thin">
            You're looking at it!
          </h4>
          <h6 class="text-weight-light">
            I wanted to take an app-like approach to building my portfolio with the intention of
            showcasing myself and my web development projects. I used the Quasar Framework for
            the first time, which is built on my favorite framework - Vue.JS! Quasar's
            responsive capabilities allow for app deployment for a variety of different
            production environments using the same code base. The Quasar build packages consist of
            PWA (Progressive Web App), SPA (Single Page Application), Mobile Apps, SSR
            (Server Side Rendering) as well as Electron for use as a Desktop Application.
          </h6>
          <hr class="q-hr q-my-lg">
          <a href="" target="_blank">
            <q-btn color="green" class="q-py-sm q-px-xl" label="View GitHub Repo" />
          </a>
          <h3 class="text-weight-thin q-mb-xs">
            Tech Used
          </h3>
          <q-list class="q-ml-xs">
            <q-item>
              <q-item-side>
                <img src="~assets/vue-logo.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Vue.js</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="https://pbs.twimg.com/profile_images/883473889954852864/BC5h3cmj_400x400.jpg" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Quasar Framework</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="https://raw.githubusercontent.com/github/explore/31bb4034c9f4167799c1351a0d8418f4a245bc51/topics/zeit/zeit.png" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Now</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PortfolioApp',
};
</script>

<style>
  .q-card {
    margin: 20px;
    min-height: 200px;
  }
  .no-pad {
    padding: 0;
    margin: 0;
  }
  .desk {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
  .mobi {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  .jumbo {
    width: 50%;
    float: right;
  }
  .posi-mobi {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
  }
</style>

