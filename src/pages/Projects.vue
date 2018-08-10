<template>
  <q-page class="flex flex-center">
    <q-btn
      rounded
      outline
      v-go-back=" '/' "
      color="black"
      label="Back"
    />
    <div class="flex flex-center">
      <q-card class="q-card grow">
        <q-card-media overlay-position="full">
          <img src="~assets/ready-golf.gif">
          <q-card-title slot="overlay">
            Ready Golf
          </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-main class="no-pad">
          <q-list>
            <q-item>
              <q-item-side>
                <img src="~assets/vue-native-logo.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>
                  Vue Native
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </q-item-tile>
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
                <img src="~assets/native-base.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>NativeBase</q-item-tile>
              </q-item-main>
              <q-item-side>
                <img id="vn" src="http://www.stickpng.com/assets/images/58480a1ccef1014c0b5e4912.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>KNEX.js</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="~assets/expo.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>
                  Expo
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </q-item-tile>
              </q-item-main>
              <q-item-side>
                <img id="vn" src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Node.js</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-card-main>
      </q-card>
      <q-card class="q-card grow">
        <q-card-media overlay-position="full">
          <img src="~assets/eazy.gif">
          <q-card-title slot="overlay">
            Eazy Marketplace
          </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-main class="no-pad">
          <q-list>
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
        </q-card-main>
      </q-card>
      <q-card class="q-card grow">
        <q-card-media overlay-position="full">
          <img src="~assets/btf.gif">
          <q-card-title slot="overlay">
            Bridge The Fridge
          </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-main class="no-pad">
          <q-list>
            <q-item>
              <q-item-side>
                <img src="~assets/vue-logo.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Vue.js&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</q-item-tile>
              </q-item-main>
              <q-item-side>
                <img src="https://www.livingchirpy.com/wp-content/uploads/2015/08/GP3YFdPw.png" alt="" width="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Yummly API</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <img src="~assets/boot-vue.png" alt="" width="35px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>Bootstrap-Vue</q-item-tile>
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
        </q-card-main>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageProjects',
};
</script>

<style>
  .q-card {
    margin-left: 20px;
    margin-right: 20px;
    min-height: 200px;
  }
  .no-pad {
    padding: 0;
  }
  .grow:hover {
    transform: scale(1.07);
  }
</style>
