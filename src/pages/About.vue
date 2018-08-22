<template>
  <q-page class="flex flex-center">
    <div class="container">
      <img
        src="https://render.bitstrips.com/v2/cpanel/7e3bc453-64fb-4a34-bcaa-481724e5d3d9-e362807d-2567-490a-be3e-168e20f4adea-v1.png?transparent=1&palette=1"
        alt="Soul searching bitmoji"
        width="200px"
      >
      <h3 class="q-mt-sm">Hang tight while I do some soul searching...</h3>
      <q-btn
        rounded
        outline
        v-go-back=" '/' "
        color="blue-9"
        label="Back"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
