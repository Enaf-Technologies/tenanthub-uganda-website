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
                  <form class="newsletter-form" action="#">
                    <input type="email" placeholder="Email" />
                    <a class="axil-button btn-transparent" href="#"
                      ><span class="button-text">Subscribe</span
                      ><span class="button-icon"></span
                    ></a>
                  </form>
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
                    <li><router-link to="/services#section1">Tenant Relationship Management</router-link></li>
                    <li><router-link to="/services#section2">Tenant Broadcasting</router-link></li>
                    <li><router-link to="/services#section3">Work Order Management</router-link></li>
                    <li><router-link to="/services#section4">Vendor CRM</router-link></li>
                    <li><router-link to="/services#section5">Building Access Management</router-link></li>
                    <li><router-link to="/services#section6">Business Insights</router-link></li>
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
                    <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                    <li><router-link to="/privacy-policy">Terms &amp; Conditions</router-link></li>
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
                <p>©{{ new Date().getFullYear() }}. All rights reserved TenantHub Uganda.</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="quick-contact">
                <ul
                  class="link-hover d-flex justify-content-center justify-content-md-end liststyle"
                >
                  <li>
                    <router-link to="/privacy-policy">Privacy Policy</router-link>
                  </li>
                  <li><router-link to="/privacy-policy">Terms of Use</router-link></li>
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
export default {
    
}
</script>