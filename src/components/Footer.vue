<template>
  <!-- Start Footer Area -->
  <footer class="axil-footer footer-default theme-gradient-2">
    <div class="bg_image--2">
      <!-- Start Social Icon -->
      <div class="ft-social-icon-wrapper ax-section-gapTop">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul
                class="ft-social-share d-flex justify-content-center liststyle flex-wrap"
              >
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- End Social Icon -->
      <!-- Start Footer Top Area -->
      <div class="footer-top ax-section-gap">
        <div class="container">
          <div class="row">
            <!-- Start Single Widget -->
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="footer-widget-item axil-border-right">
                <h2>Get in touch!</h2>
                <p>
                  Subscribe to our news letters to be notified when new <br />
                  features and offers are available
                </p>
                <div class="axil-newsletter">
                  <form class="newsletter-form" @submit.prevent="postSubscription" method="post">
                    <input
                      type="email"
                      placeholder="Email"
                      v-model="subscription.email"
                    />
                    <button
                      class="axil-button btn-transparent center-content"
                    >
                      <span class="button-text">Subscribe</span>
                      <div
                        v-if="loading"
                        class="spinner-border"
                        role="status"
                        style="display: inline-flex; align-self: center"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                      <span
                        v-else
                        class="button-icon"
                        style="display: inline-flex; align-self: center"
                      ></span>
                    </button>
                  </form>
                  <div class="callto-action-wrapper mt-2">
                    <span v-if="error.status" class="text">{{
                      error.message
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Widget -->

            <!-- Start Single Widget -->
            <div
              class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--30"
            >
              <div class="footer-widget-item">
                <h6 class="title">Services</h6>
                <div class="footer-menu-container">
                  <ul class="ft-menu liststyle link-hover">
                    <li>
                      <router-link to="/services#section1"
                        >Tenant Relationship Management</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services#section2"
                        >Tenant Broadcasting</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services#section3"
                        >Work Order Management</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services#section4"
                        >Vendor CRM</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services#section5"
                        >Building Access Management</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services#section6"
                        >Business Insights</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Single Widget -->

            <!-- Start Single Widget -->
            <div
              class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30"
            >
              <div class="footer-widget-item widget-support">
                <h6 class="title">Support</h6>
                <div class="footer-menu-container">
                  <ul class="ft-menu liststyle link-hover">
                    <li><router-link to="/contact-us">Contact</router-link></li>
                    <li>
                      <router-link to="/privacy-policy"
                        >Privacy Policy</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/privacy-policy"
                        >Terms &amp; Conditions</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Single Widget -->
          </div>
        </div>
      </div>
      <!-- End Footer Top Area -->
      <!-- Start Copyright -->
      <div class="copyright copyright-default">
        <div class="container">
          <div class="row row--0 ptb--20 axil-basic-thine-line">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="inner text-center text-md-left">
                <p>
                  ©{{ new Date().getFullYear() }}. All rights reserved TenantHub
                  Uganda.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="quick-contact">
                <ul
                  class="link-hover d-flex justify-content-center justify-content-md-end liststyle"
                >
                  <li>
                    <router-link to="/privacy-policy"
                      >Privacy Policy</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/privacy-policy">Terms of Use</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Copyright -->
    </div>
  </footer>
  <!-- End Footer Area -->
</template>

<script>

import * as fb from "../firebase";

export default {
  data() {
    return {
      subscription: {
        email: "",
      },
      success: false,
      error: {
        message: "",
        status: false,
        messages: [],
      },
      loading: false,
    };
  },
  methods: {
    async postSubscription(event) {
      this.loading = true;

      if (!this.validEmail(this.subscription.email)) {
        this.error.messages.push("Valid email required.");
      }

      if (!!this.error.messages.length) {
        this.loading = false;
        this.error.status = true;
        this.error.message = "Email is required and should be valid";
        
      } else {

        // create demo request in firebase
      await fb.subscriptionsCollection
        .add({
          createdOn: new Date(),
          email: this.subscription.email,
        })
        .then(() => {
          this.loading = false;
          this.error.status = true;
          this.error.message = "Subscription successfully!";
          //event.currentTarget.reset();

          setTimeout(() => {
            this.error.status = false;
            this.error.message = "";
          }, 2000);
        })
        .catch(() => {
          this.loading = false;
          this.error.status = true;
          this.error.message = "Sorry! Subscription failed. Please try again later.";
          //event.currentTarget.reset();

          setTimeout(() => {
            this.error.status = false;
            this.error.message = "";
          }, 2000);
        });
    
      }

    },

    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>