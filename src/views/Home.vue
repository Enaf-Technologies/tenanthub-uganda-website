<template>
  <main class="main-wrapper">
    <!-- Start Slider Area -->
    <div class="axil-slider-area axil-slide-activation position-relative">
      <!-- Start Single Slide -->
      <div
        class="axil-slide slide-style-5 theme-gradient-8 d-flex align-items-center"
      >
        <div class="container">
          <div class="row align-items-center w-100">
            <div class="col-lg-8 col-12">
              <div class="content">
                <div class="inner">
                  <h1
                    class="axil-display-1 mb--40 wow slideFadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="500ms"
                  >
                    Tenant Service <br />
                    Meets
                    <br/>
                    Property Management
                  </h1>
                  <router-link
                    class="axil-button btn-large btn-transparent wow slideFadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="800ms"
                    to="/services"><span class="button-text">View Features</span><span class="button-icon"></span></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Start Contact Form -->
        <div class="contact-form-wrapper">
          <div class="axil-contact-form contact-form-style-1">
            <h3 class="title">Request A Demo</h3>
            <form action="#">
              <div class="form-group">
                <input type="text" />
                <label>Name</label>
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input type="email" />
                <label>Email</label>
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input type="text" />
                <label>Company</label>
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <input type="text" />
                <label>Phone</label>
                <span class="focus-border"></span>
              </div>
              <div class="form-group">
                <button class="axil-button btn-large btn-transparent w-100">
                  <span class="button-text text-uppercase">Request a Demo</span
                  ><span class="button-icon"></span>
                </button>
              </div>
            </form>
            <div class="callto-action-wrapper text-center">
              <span class="text">Or call us now</span>
              <span
                ><i class="fal fa-phone-alt"></i>
                <a href="#">(256) 702 173540</a></span
              >
            </div>
          </div>
        </div>
        <!-- End Contact Form -->
      </div>
      <!-- End Single Slide -->
    </div>
    <!-- End Slider Area -->

    <!-- Start Service Area -->
    <div class="axil-service-area ax-section-gap bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="sub-title extra08-color wow" data-splitting
                >what we can do for you</span
              >
              <h2 class="title wow" data-splitting>
                <span>Tenant first property management <br />is our focus.</span>
              </h2>
              <p class="subtitle-2 wow" data-splitting>
                TenantHub is a Commercial Tenant Management &amp; Property Management System rolled into one. 
                Which means we take a tenant first approach to everything we do. 
                Our goal is to make it easy for you to operate your property and deliver superior customer service to your tenants at the same time. <br/> Here's how...
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Start Single Service -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
            <div class="axil-service text-center axil-control paralax-image">
              <div class="inner">
                <div class="icon">
                  <div class="icon-inner">
                    <img
                      src="../assets/images/icons/layer.svg"
                      alt="Icon Images"
                    />
                    <div class="image-2">
                      <img
                        src="../assets/images/icons/icon-04.svg"
                        alt="Shape Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h4 class="title wow">
                    <router-link to="/services#section1">Tenant Relatinship Management</router-link>
                  </h4>
                  <p class="wow">
                    At the core of TenantHub is the tenant relationship management feature or TRM.

Manage expectations and streamline communications between you and your tenants. 
                  </p>
                  <router-link class="axil-button" data-hover="Learn More" to="/services#section1">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Service -->

          <!-- Start Single Service -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
            <div
              class="axil-service text-center axil-control paralax-image active"
            >
              <div class="inner">
                <div class="icon gradient-color-02">
                  <div class="icon-inner">
                    <img
                      src="../assets/images/icons/layer.svg"
                      alt="Icon Images"
                    />
                    <div class="image-2">
                      <img
                        src="../assets/images/icons/icon-02.svg"
                        alt="Shape Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h4 class="title wow">
                    <router-link to="/services#section2">Tenant Broadcasting</router-link>
                  </h4>
                  <p class="wow">
                    Deliver property-wide broadcasts (e-blasts) to your tenants and keep track of who opens your broadcast and when. Stop BCCing your tenants on an email and hoping your message gets through...
                  </p>
                  <router-link class="axil-button" to="/services#section2">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Service -->

          <!-- Start Single Service -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
            <div class="axil-service text-center axil-control paralax-image">
              <div class="inner">
                <div class="icon gradient-color-03">
                  <div class="icon-inner">
                    <img
                      src="../assets/images/icons/layer.svg"
                      alt="Icon Images"
                    />
                    <div class="image-2">
                      <img
                        src="../assets/images/icons/icon-03.svg"
                        alt="Shape Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h4 class="title wow">
                    <router-link to="/services#section3">Work Order Management</router-link>
                  </h4>
                  <p class="wow">
                    Tenants request work on their space directly in TenantHub. This makes it easy to ensure the work is approved before it's started, and completed with handy check-in/check-out tools, and managed through Approved Work Schedules (AWS).
                  </p>
                  <router-link class="axil-button" to="/services#section3">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Service -->

          <!-- Start Single Service -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
            <div class="axil-service text-center axil-control paralax-image">
              <div class="inner">
                <div class="icon gradient-color-04">
                  <div class="icon-inner">
                    <img
                      src="../assets/images/icons/layer.svg"
                      alt="Icon Images"
                    />
                    <div class="image-2">
                      <img
                        src="../assets/images/icons/icon-03.svg"
                        alt="Shape Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h4 class="title wow">
                    <router-link to="/services#section4">Vendor CRM</router-link>
                  </h4>
                  <p class="wow">
                    Work orders become a breeze to submit to our Vendor CRM. You can also perform reporting and maintain information of all the vendors that perform work on your property.
                  </p>
                  <router-link class="axil-button" to="/services#section4">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Service -->

          <!-- Start Single Service -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
            <div class="axil-service text-center axil-control paralax-image">
              <div class="inner">
                <div class="icon gradient-color-06">
                  <div class="icon-inner">
                    <img
                      src="../assets/images/icons/layer.svg"
                      alt="Icon Images"
                    />
                    <div class="image-2">
                      <img
                        src="../assets/images/icons/icon-02.svg"
                        alt="Shape Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h4 class="title wow">
                    <router-link to="/services#section5">Building Access Managment</router-link>
                  </h4>
                  <p class="wow">
                    Streamline your security team’s check-in/out process, make use of pre-approved vendor access, and improve facility security.
                  </p>
                  <router-link class="axil-button" to="/services#section5">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Service -->

          <!-- Start Single Service -->
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow">
            <div class="axil-service text-center axil-control paralax-image">
              <div class="inner">
                <div class="icon gradient-color-05">
                  <div class="icon-inner">
                    <img
                      src="../assets/images/icons/layer.svg"
                      alt="Icon Images"
                    />
                    <div class="image-2">
                      <img
                        src="../assets/images/icons/icon-02.svg"
                        alt="Shape Images"
                      />
                    </div>
                  </div>
                </div>
                <div class="content">
                  <h4 class="title wow">
                    <router-link to="/services#section6">Business Insights</router-link>
                  </h4>
                  <p class="wow">
                    As you and your tenants use TenantHub we capture crucial data-points to help you make better business decisions based on data-driven insights. Through customizable and scheduled reporting, and administration dashboards, we deliver insights in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Service -->
        </div>
      </div>
    </div>
    <!-- End Service Area -->
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>