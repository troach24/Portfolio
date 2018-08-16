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
        <img class="q-mt-xl q-pl-md" src="https://user-images.githubusercontent.com/33434059/44214150-b0b3b380-a12c-11e8-9945-39ed13311ef0.gif" alt="">
        <div class="q-pl-md q-mt-lg">
          <q-jumbotron class="q-pa-sm">
            <div class="q-display-3 text-weight-light">Eazy Marketplace</div>
            <h3 class="q-title text-weight-regular">
              A full stack Vue.js CRUD application that simulates an online marketplace experience.
            </h3>
            <h6 class="text-weight-light">
              This is a mockup of an ecommerce web app. As a 'buyer,' a user can browse
              for items, add them to the shopping cart, then simulate the checkout process using a
              test credit card number. As a 'seller,' a user can add, edit, and or delete inventory
              items from the database.
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
        </div>
      </div>
      <div v-if="$q.platform.is.mobile" class="mobi">
        <img class="q-mt-md q-mr-sm" src="https://user-images.githubusercontent.com/33434059/44214150-b0b3b380-a12c-11e8-9945-39ed13311ef0.gif" alt="" width="100%">
        <div class="q-mt-md q-mr-sm">
          <h1 class="text-weight-thin q-mb-xs">Eazy Marketplace</h1>
          <h4 class="no-pad text-weight-thin">
            A full stack Vue.js CRUD application that simulates an online marketplace experience.
          </h4>
          <h6 class="text-weight-light">
            This is a mockup of an ecommerce web app. As a 'buyer,' a user can browse
            for items, add them to the shopping cart, then simulate the checkout process using a
            test credit card number. As a 'seller,' a user can add, edit, and or delete inventory
            items from the database.
          </h6>
          <h3 class="text-weight-thin q-mb-xs">
            Tech Used
          </h3>
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EazyMarketplace',
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

