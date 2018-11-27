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
        <img class="q-mt-xl q-pl-md" src="https://user-images.githubusercontent.com/33434059/44218656-6683ff80-a137-11e8-8352-30d46df3d1f9.gif" alt="">
        <div class="q-pl-md q-mt-lg">
          <q-jumbotron class="q-pa-sm">
            <div class="q-display-3 text-weight-light">Bridge The Fridge</div>
            <h3 class="q-title text-weight-regular">
              Find quality recipes based on the ingredients you'd like to cook with.
            </h3>
            <h6 class="text-weight-light">
              This is a practical home cooking web app. A user can enter whatever ingredients
              they'd like to cook with, and pick from a handful of results to view the full recipe.
              Simple as that!
            </h6>
            <hr class="q-hr q-my-lg">
            <a href="https://bridge-the-fridge.firebaseapp.com/" target="_blank">
              <q-btn color="green" class="q-py-sm q-px-xl" label="View Live Demo" />
            </a>
            <div class="q-title q-mt-lg q-mb-md">Tech Used</div>
            <q-list class="q-ml-xs">
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
          </q-jumbotron>
        </div>
      </div>
      <div v-if="$q.platform.is.mobile" class="mobi">
        <img class="q-mt-md q-mr-sm" src="https://user-images.githubusercontent.com/33434059/44218656-6683ff80-a137-11e8-8352-30d46df3d1f9.gif" alt="" width="100%">
        <div class="q-mt-md q-mr-sm">
          <h1 class="text-weight-thin q-mb-xs">Bridge The Fridge</h1>
          <h4 class="no-pad text-weight-thin">
            Find quality recipes based on the ingredients you'd like to cook with.
          </h4>
          <h6 class="text-weight-light">
            This is a practical home cooking web app. A user can enter whatever ingredients
            they'd like to cook with, and pick from a handful of results to view the full recipe.
            Simple as that!
          </h6>
          <hr class="q-hr q-my-lg">
          <a href="https://bridge-the-fridge.firebaseapp.com/" target="_blank">
            <q-btn color="green" class="q-py-sm q-px-xl" label="View Live Demo" />
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

