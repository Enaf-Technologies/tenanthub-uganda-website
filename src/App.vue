<template>
  <div class="main-content">
    <SiteHeader />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import SiteHeader from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    Footer,
  },
  created() {
    this.$loadScript("../js/vendor/modernizr.min.js").then(() => {
      this.$loadScript("../js/vendor/jquery.js").then(() => {
        this.$loadScript("../js/vendor/bootstrap.min.js").then(() => {
          this.$loadScript("../js/waypoints.min.js");
          this.$loadScript("../js/wow.js");
          this.$loadScript("../js/counterup.js");
          this.$loadScript("../js/imagesloaded.js");
          this.$loadScript("../js/isotope.js");
          this.$loadScript("../js/tilt.js");
          this.$loadScript("../js/anime.js");
          this.$loadScript("../js/tweenmax.js");
          this.$loadScript("../js/slipting.js");
          this.$loadScript("../js/scrollmagic.js");
          this.$loadScript("../js/addindicators.js");
          this.$loadScript("../js/slick.js");
          this.$loadScript("../js/youtube.js");
          this.$loadScript("../js/countdown.js");
          this.$loadScript("../js/scrollup.js");
          this.$loadScript("../js/stickysidebar.js");
          this.$loadScript("../js/js.cookie.js");
          this.$loadScript("../js/jquery.style.switcher.js");
          this.$loadScript("../js/contactform.js");
          this.$loadScript("../js/plugins/plugins.min.js").then(() => {
            this.$loadScript("../js/main.js").then(() => {});
          });
        });
      });
    });
  },
};
</script>

<style>
@import "./assets/css/vendor/bootstrap.min.css";
@import "./assets/css/plugins/slick.css";
@import "./assets/css/plugins/font-awesome.css";
@import "./assets/css/plugins/icomoon.css";
@import "./assets/css/plugins/plugins.css";
@import "./assets/css/style.css";
</style>
