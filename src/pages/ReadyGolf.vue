<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center">
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
        <img class="q-pl-md" src="https://user-images.githubusercontent.com/33434059/44042735-472d004c-9ede-11e8-85b2-6eb5a7a01a5e.gif" alt="">
        <div class="q-pl-md">
          <q-jumbotron class="q-pa-sm" dark>
            <div class="q-display-3 text-weight-light">⛳️ Ready Golf 🏌️‍</div>
            <h3 class="q-title text-weight-regular">
              Faster check-in. Faster food and drink service. More time to focus on your game.
            </h3>
            <h6 class="text-weight-light">
              This is the iOS prototype I worked on for my capstone presentation before graduating
              from the Web Develepment Immersive program at Galvanize. The 'Ready Golf' app
              demonstrates the virtual check-in process for a previously booked tee time, as well
              as how to place food and drink orders using the app.
            </h6>
            <hr class="q-hr q-my-lg">
            <a href="https://github.com/troach24/Galvanize-Capstone" target="_blank">
              <q-btn color="green" class="q-py-sm q-px-xl" label="View on GitHub" />
            </a>
            <div class="q-title q-mt-lg q-mb-md">Tech Used</div>
            <q-list class="q-ml-xs">
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
          </q-jumbotron>
        </div>
      </div>
      <div v-if="$q.platform.is.mobile" class="mobi">
        <img class="q-mt-md q-mr-sm" src="https://user-images.githubusercontent.com/33434059/44042735-472d004c-9ede-11e8-85b2-6eb5a7a01a5e.gif" alt="">
        <div class="q-mt-md q-mr-sm">
          <h1 class="text-weight-thin q-mb-xs">Ready Golf</h1>
          <h4 class="no-pad text-weight-thin">
            Faster check-in.<br>Faster food and drink service.<br>More time to focus on your game.
          </h4>
          <h6 class="text-weight-light">
           This is the iOS prototype I worked on for my capstone presentation before graduating
           from the Web Develepment Immersive program at Galvanize. The 'Ready Golf' app
           demonstrates the virtual check-in process for a previously booked tee time, as well
           as how to place food and drink orders using the app.
          </h6>
          <hr class="q-hr q-my-lg">
          <a href="https://github.com/troach24/Galvanize-Capstone" target="_blank">
            <q-btn color="green" class="q-py-sm q-px-xl" label="View on GitHub" />
          </a>
          <h3 class="text-weight-thin q-mb-xs">
            Tech Used
          </h3>
          <q-list class="q-ml-xs">
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ReadyGolf',
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

