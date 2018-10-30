<template>
  <q-page class="flex flex-center">
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
        <img class="q-mt-xl q-pl-md" src="../assets/ottno-ss-big.png" alt="">
        <div class="q-pl-md q-mt-lg">
          <q-jumbotron class="q-pa-sm">
            <div class="q-display-3 text-weight-light">On To The Next One*</div>
            <h3 class="q-title text-weight-regular">
              A customized front end integration with the Timekit API. *In Progress
            </h3>
            <h6 class="text-weight-light">
              For proprietary use by Mixed Use Creative, an artist agency based out of San
              Francisco, CA. Promoters can use a direct link to an artist's profile and request a
              booking for a concert or event. Agencies and individual artists alike can confirm,
              send a counter offer, or deny the request from their authenticated admin panel. All
              events and their current status are synced with the artist/agency's Google calendar.
            </h6>
            <hr class="q-hr">
            <!-- <a href="https://github.com/troach24/Portfolio" target="_blank">
              <q-btn color="green" class="q-py-sm q-px-xl" label="View GitHub Repo" />
            </a> -->
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
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="" width="35px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Vuetify</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <img src="https://uploads-ssl.webflow.com/5b9838c153114f26f48c1c1c/5b9838c153114f16918c1cea_original%20logo%20icon.svg" alt="" width="35px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Timekit API</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <img src="~assets/firebase.png" alt="" width="35px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Firebase</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-jumbotron>
        </div>
      </div>
      <div v-if="$q.platform.is.mobile" class="mobi">
        <img class="q-mt-md q-mr-sm" src="../assets/ottno-ss-big.png" alt="" width="100%">
        <div class="q-mt-md q-mr-sm">
          <h1 class="text-weight-thin q-mb-xs q-mt-none">On To The Next One* </h1>
          <h4 class="no-pad text-weight-thin">
            A customized front end integration with the Timekit API. *In Progress
          </h4>
          <h6 class="text-weight-light">
            For proprietary use by Mixed Use Creative, an artist agency based out of San
            Francisco, CA. Promoters can use a direct link to an artist's profile and request a
            booking for a concert or event. Agencies and individual artists alike can confirm,
            send a counter offer, or deny the request from their authenticated admin panel. All
            events and their current status are synced with the artist/agency's Google calendar.
          </h6>
          <hr class="q-hr q-my-lg">
          <!-- <a href="" target="_blank">
            <q-btn color="green" class="q-py-sm q-px-xl" label="View GitHub Repo" />
          </a> -->
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
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Vuetify</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="https://uploads-ssl.webflow.com/5b9838c153114f26f48c1c1c/5b9838c153114f16918c1cea_original%20logo%20icon.svg" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Timekit API</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="~assets/firebase.png" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Firebase</q-item-tile>
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

