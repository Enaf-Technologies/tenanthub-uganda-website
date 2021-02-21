<template>
  <!-- Start Breadcrumb Area -->
  <div
    class="axil-breadcrumb-area breadcrumb-style-default pt--170 pb--70 theme-gradient"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner">
            <ul class="axil-breadcrumb liststyle d-flex">
              <li class="axil-breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="axil-breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ul>
            <h1 class="axil-page-title">Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-images">
      <i class="shape shape-1 icon icon-bcm-01"></i>
      <i class="shape shape-2 icon icon-bcm-02"></i>
      <i class="shape shape-3 icon icon-bcm-03"></i>
    </div>
  </div>
  <!-- End Breadcrumb Area -->

  <main class="main-wrapper">
    <!-- Start Contact Area  -->
    <div
      class="axil-contact-area axil-shape-position ax-section-gap bg-color-white"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xl-5 col-12">
            <div class="contact-form-wrapper">
              <!-- Start Contact Form -->
              <div class="axil-contact-form contact-form-style-1">
                <h3 class="title">Get a free Keystroke quote now</h3>

                <form
                  id="contact-form"
                  method="POST"
                  action="http://axilthemes.com/demo/template/keystroke/mail.php"
                >
                  <div class="form-group">
                    <input name="con_name" type="text" />
                    <label>Name</label>
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-group">
                    <input name="con_email" type="email" />
                    <label>Email</label>
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-group">
                    <input type="text" />
                    <label>Phone</label>
                    <span class="focus-border"></span>
                  </div>
                  <div class="form-group">
                    <textarea name="con_message"></textarea>
                    <label>Your message</label>
                    <span class="focus-border"></span>
                  </div>

                  <div class="form-group">
                    <input type="submit" value="Send message" />
                    <p class="form-messege"></p>
                  </div>
                </form>
              </div>
              <!-- End Contact Form -->
            </div>
          </div>
          <div
            class="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40"
          >
            <div class="axil-address-wrapper">
              <!-- Start Single Address  -->
              <div class="axil-address wow move-up">
                <div class="inner">
                  <div class="icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="content">
                    <h4 class="title">Phone</h4>
                    <p>
                      Our customer care is open from Mon-Fri, 10:00 am to 6:00
                      pm
                    </p>
                    <p>
                      <a class="axil-link" href="tel:1234567890"
                        >(123) 456 7890</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <!-- End Single Address  -->
              <!-- Start Single Address  -->
              <div class="axil-address wow move-up mt--60 mt_sm--30 mt_md--30">
                <div class="inner">
                  <div class="icon">
                    <i class="fal fa-envelope"></i>
                  </div>
                  <div class="content">
                    <h4 class="title">Email</h4>
                    <p>
                      Our support team will get back to in 48-h during standard
                      business hours.
                    </p>
                    <p>
                      <a class="axil-link" href="mailto:example@gmail.com"
                        >example@gmail.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <!-- End Single Address  -->
            </div>
          </div>
        </div>
      </div>
      <div class="shape-group">
        <div class="shape shape-01">
          <i class="icon icon-contact-01"></i>
        </div>
        <div class="shape shape-02">
          <i class="icon icon-contact-02"></i>
        </div>
        <div class="shape shape-03">
          <i class="icon icon-contact-03"></i>
        </div>
      </div>
    </div>
    <!-- End Contact Area  -->
  </main>
</template>

<script>
export default {
  name: "Contact",
};
</script>