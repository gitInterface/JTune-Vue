<template>
  <Navbar v-if="!$route.meta.hideNavbar"></Navbar>

  <div class="router-view">
      <RouterView></RouterView>
  </div>

  <Footer v-if="!$route.meta.hideFooter"></Footer>

  <BackToTopButton v-if="!$route.meta.hideBTTB"></BackToTopButton>
</template>

<script setup>
// 外部資源
import 'bootstrap/dist/js/bootstrap.min.js'
// 內部元件
import Navbar from '@components/Navbar.vue'
import Footer from '@components/Footer.vue'
import BackToTopButton from '@components/BackToTopButton.vue'
</script>

<!-- Animate.css -->
<style src="animate.css"></style>
<!-- Bootstrap Icon-->
<style src="bootstrap-icons/font/bootstrap-icons.css"></style>
<!-- Font-->
<style src="@fortawesome/fontawesome-free/css/all.css"></style>
<!-- Customized Bootstrap SCSS-->
<style lang="scss" src="@styles/customized-bootstrap.scss"></style>

<style>
::-webkit-scrollbar {
  display: none;
}

:root {
  --primary: #ffc107;
  --secondary: #d63384;
  --success: #198754;
  --info: #1ba2bd;
  --warning: chocolate;
  --danger: #dc3545;
  --light: #EFFDF5;
  --dark: #0E2E50;
  --white: #FFFFFF;
  --black: #000000;
  --white-50: rgba(255, 255, 255, 0.5);
  --black-50: rgba(0, 0, 0, 0.5);
}
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');

body {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
<style scoped>
.router-view {
  min-height: calc(100vh - 75px);
  background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
      url('@images/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-y;
}
</style>