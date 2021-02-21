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
          this.$loadScript("../js/waypoints.min.js").then(() => {
            this.$loadScript("../js/wow.js").then(() => {
              this.$loadScript("../js/counterup.js").then(() => {
                this.$loadScript("../js/imagesloaded.js").then(() => {
                  this.$loadScript("../js/isotope.js").then(() => {
                    this.$loadScript("../js/tilt.js").then(() => {
                      this.$loadScript("../js/anime.js").then(() => {
                        this.$loadScript("../js/tweenmax.js").then(() => {
                          this.$loadScript("../js/slipting.js").then(() => {
                            this.$loadScript("../js/scrollmagic.js").then(
                              () => {
                                this.$loadScript("../js/addindicators.js").then(
                                  () => {
                                    this.$loadScript("../js/slick.js").then(
                                      () => {
                                        this.$loadScript(
                                          "../js/youtube.js"
                                        ).then(() => {
                                          this.$loadScript(
                                            "../js/countdown.js"
                                          ).then(() => {
                                            this.$loadScript(
                                              "../js/scrollup.js"
                                            ).then(() => {
                                              this.$loadScript(
                                                "../js/stickysidebar.js"
                                              ).then(() => {
                                                this.$loadScript(
                                                  "../js/js.cookie.js"
                                                ).then(() => {
                                                  this.$loadScript(
                                                    "../js/jquery.style.switcher.js"
                                                  ).then(() => {
                                                    this.$loadScript(
                                                      "../js/contactform.js"
                                                    ).then(() => {
                                                      this.$loadScript(
                                                        "../js/plugins/plugins.min.js"
                                                      ).then(() => {
                                                        this.$loadScript(
                                                          "../js/main.js"
                                                        ).then(() => {});
                                                      });
                                                    });
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
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
