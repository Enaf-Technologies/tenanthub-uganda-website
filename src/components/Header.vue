<template>
  <div id="my_switcher" class="my_switcher">
    <ul>
      <li>
        <a
          href="javascript: void(0);"
          data-theme="light"
          class="setColor light"
        >
          <img src="../assets/images/about/sun-01.svg" alt="Sun images" /><span
            title="Light Mode"
          >
            Light</span
          >
        </a>
      </li>
      <li>
        <a href="javascript: void(0);" data-theme="dark" class="setColor dark">
          <img
            src="../assets/images/about/vector.svg"
            alt="Vector Images"
          /><span title="Dark Mode"> Dark</span>
        </a>
      </li>
    </ul>
  </div>
  <!-- Start Header -->
  <header class="ax-header haeder-default light-logo-version header-transparent axil-header-sticky">
    <div class="header-wrapper">
      <div class="container-fluid plr--100 plr_lg--30 plr_md--30 plr_sm--10">
        <div class="row align-items-center">
          <div class="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-8 header-left">
            <div class="logo">
              <router-link to="/">
                <svg
                  width="281px"
                  height="60px"
                  viewBox="0 0 281 60"
                  version="1.1"
                >
                  <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
                  <title>Logo</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Symbols"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g transform="translate(-315.000000, -40.000000)">
                      <g>
                        <g
                          id="logo"
                          transform="translate(315.000000, 40.000000)"
                        >
                          <text
                            id="Keystroke-Startup-la"
                            font-family="DMSans-Bold, DM Sans"
                            font-size="20"
                            font-weight="bold"
                            fill="#000248"
                          >
                            <tspan x="75" y="24">TenantHub</tspan>
                            <tspan
                              x="175.14"
                              y="24.5001221"
                              font-family="DMSans-Regular, DM Sans"
                              font-weight="normal"
                            ></tspan>
                            <tspan
                              x="76.16"
                              y="49.5001221"
                              font-family="DMSans-Regular, DM Sans"
                              font-size="18"
                              font-weight="normal"
                            >
                              Property Management
                            </tspan>
                          </text>
                          <g id="Favicon">
                            <rect
                              id="Base"
                              fill="#702FFF"
                              x="0"
                              y="0"
                              width="60"
                              height="60"
                              rx="14"
                            ></rect>
                            <g
                              id="Group-3"
                              transform="translate(15.000000, 11.000000)"
                            >
                              <circle
                                id="icon-oval-lg"
                                class="icon-oval-lg"
                                stroke="#FFFFFF"
                                stroke-width="7"
                                cx="15"
                                cy="15"
                                r="11.5"
                              ></circle>
                              <circle
                                id="icon-oval-sm"
                                class="icon-oval-sm"
                                fill="#FFFFFF"
                                cx="4"
                                cy="34"
                                r="4"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="col-lg-7 col-xl-6 d-none d-lg-block">
            <div class="mainmenu-wrapepr justify-content-center">
              <!-- Start Mainmanu Nav -->
              <nav class="mainmenu-nav d-none d-lg-block">
                <ul class="mainmenu">
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/services">Services</router-link></li>
                  <li><router-link to="/pricing">Pricing</router-link></li>
                  <li><router-link to="/about-us">About Us</router-link></li>
                  <li><router-link to="/contact-us">Contact</router-link></li>
                </ul>
              </nav>
              <!-- End Mainmanu Nav -->
            </div>
          </div>
          <div class="col-lg-2 col-xl-3 col-md-6 col-sm-6 col-4 header-right">
            <!-- Start Header Extra  -->
            <div
              class="axil-header-extra d-flex align-items-center justify-content-end"
            >
              <!-- Start Hamburger -->
              <div class="ax-hamburger ml--40 ml_lg--20 d-none d-lg-block">
                <a
                  class="axil-menuToggle ax-hamburger-trigger"
                  id="side-nav-toggler"
                  href="#"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <!-- End Hamburger -->

              <!-- Start Menu Bar  -->
              <div
                class="ax-menubar popup-navigation-activation d-block d-lg-none ml_sm--20 ml_md--20"
              >
                <div>
                  <i></i>
                </div>
              </div>
              <!-- End Menu Bar  -->
              
            </div>
            <!-- End Header Extra  -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Start Header -->
  <!-- Start Popup Mobile Menu -->
  <div class="popup-mobile-manu">
    <div class="inner">
      <div class="mobileheader">
        <div class="logo">
          <a href="home-01.html">
            <img src="../assets/images/logo/keystoke.svg" alt="Logo images" />
          </a>
        </div>
        <a class="close-menu" href="#"></a>
      </div>
      <div class="menu-item">
        <ul class="mainmenu-item">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/pricing">Pricing</router-link></li>
          <li><router-link to="/about-us">About Us</router-link></li>
          <li><router-link to="/contact-us">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Popup Mobile Menu -->
  <!-- Start Sidebar Area  -->
  <div class="side-nav">
    <div class="side-nav-inner">
      <!-- Start Side Content  -->
      <div class="side-nav-content">
        <div class="row">
          <!-- Start Right Bar  -->
          <div class="col-lg-12 col-12">
            <div class="axil-contact-info-inner">
              <!-- Start Single Address  -->
              <div class="axil-contact-info">
                <address class="address">
                  <span class="title">Contact Information</span>
                  <p>
                    Theodore Lowe, Ap #867-859 <br />
                    Sit Rd, Azusa New York
                  </p>
                </address>
                <address class="address">
                  <span class="title">We're Available 24/ 7. Call Now.</span>
                  <p>
                    <a class="tel" href="tel:8884562790"
                      ><i class="fas fa-phone"></i>(888) 456-2790</a
                    >
                  </p>
                  <p>
                    <a class="tel" href="tel:12125553333"
                      ><i class="fas fa-fax"></i>(121) 255-53333</a
                    >
                  </p>
                </address>
              </div>
              <!-- End Single Address  -->

              <!-- Start Single Address  -->
              <div class="axil-contact-info">
                <h5 class="title">Find us here</h5>
                <div class="contact-social-share d-flex align-items-center">
                  <ul class="social-share style-rounded">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-behance"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Single Address  -->
            </div>
          </div>
          <!-- End Right Bar  -->
        </div>
      </div>
      <!-- End Side Content  -->
      <!-- End of .side-nav-inner -->
      <div class="close-sidenav" id="close-sidenav">
        <button class="close-button"><i class="fal fa-times"></i></button>
      </div>
    </div>
  </div>
  <!-- End Sidebar Area  -->
</template>
<script>
export default {
  name: "SiteHeader",
};
</script>