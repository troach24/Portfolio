<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center q-mr-xl">
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
      <div v-if="$q.platform.is.desktop" class="mobi">
        <div class="q-pl-md">
          <q-jumbotron class="q-pa-sm" dark>
            <div class="q-display-3 text-weight-light">Eazy Marketplace</div>
            <h3 class="q-title text-weight-regular">
              A full stack Vue.js CRUD application that simulates an online marketplace experience.
            </h3>
            <h6 class="text-weight-light">
              The goal here was to make shopping look Eazy'®'
            </h6>
            <hr class="q-hr q-my-lg">
            <a href="https://eazy-marketplace.firebaseapp.com/" target="_blank">
              <q-btn color="green" class="q-py-sm q-px-xl" label="View Live Demo" />
            </a>
            <div class="q-title q-mt-lg q-mb-md">Tech Used</div>
            <q-list class="q-ml-xs">
              <q-item>
                <q-item-side>
                  <img src="~assets/vue-logo.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Vue.js&nbsp;&nbsp;&nbsp;</q-item-tile>
                </q-item-main>
                <q-item-side>
                  <img src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="" width="25px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Heroku</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <img src="~assets/bootstrap-icon.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Bootstrap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</q-item-tile>
                </q-item-main>
                <q-item-side>
                  <img src="http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>PostgreSQL</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <img src="~assets/firebase.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Firebase</q-item-tile>
                </q-item-main>
                <q-item-side>
                  <img src="http://www.stickpng.com/assets/images/58480a1ccef1014c0b5e4912.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>KNEX.js</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-jumbotron>
          <div class="flex flex-center">
          <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44053013-a50c5196-9efb-11e8-8720-07f38be4467c.gif" alt="" width="700px">
          <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44053016-a72015bc-9efb-11e8-8035-7b4207e0469e.gif" alt="" width="700px">
          <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44053019-a94325b4-9efb-11e8-887d-b4b362dfc6bf.gif" alt="" width="700px">
        </div>
        </div>
      </div>
      <div v-if="$q.platform.is.mobile" class="mobi">
        <div class="q-pl-md flex flex-center">
          <q-jumbotron class="q-pa-sm" dark>
            <div class="q-display-3 text-weight-light">Eazy Marketplace</div>
            <h3 class="q-title text-weight-regular">
              A full stack Vue.js CRUD application that simulates an online marketplace experience.
            </h3>
            <h6 class="text-weight-light">
              The goal here was to make shopping look Eazy'®'
            </h6>
            <hr class="q-hr q-my-lg">
            <a href="https://eazy-marketplace.firebaseapp.com/" target="_blank">
              <q-btn color="green" class="q-py-sm q-px-xl" label="View Live Demo" />
            </a>
            <div class="q-title q-mt-lg q-mb-md">Tech Used</div>
            <q-list class="q-ml-xs">
              <q-item>
                <q-item-side>
                  <img src="~assets/vue-logo.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Vue.js&nbsp;&nbsp;&nbsp;</q-item-tile>
                </q-item-main>
                <q-item-side>
                  <img src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="" width="25px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Heroku</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <img src="~assets/bootstrap-icon.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Bootstrap&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</q-item-tile>
                </q-item-main>
                <q-item-side>
                  <img src="http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>PostgreSQL</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <img src="~assets/firebase.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Firebase</q-item-tile>
                </q-item-main>
                <q-item-side>
                  <img src="http://www.stickpng.com/assets/images/58480a1ccef1014c0b5e4912.png" alt="" width="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>KNEX.js</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-jumbotron>
          <div class="flex flex-center">
          <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44053013-a50c5196-9efb-11e8-8720-07f38be4467c.gif" alt="" width="700px">
          <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44053016-a72015bc-9efb-11e8-8035-7b4207e0469e.gif" alt="" width="700px">
          <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44053019-a94325b4-9efb-11e8-887d-b4b362dfc6bf.gif" alt="" width="700px">
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'BridgeTheFridge',
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
</style>

