<template>
    <main class="page-wrapper page-error">
            <!-- Start Page Error Area  -->
            <div class="axil-error-not-found fullscreen d-flex align-items-center theme-gradient-7 list-active">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="axil-error text-center">
                                <div class="inner">
                                    <h1 class="title mb--20">Page not Found</h1>
                                    <p class="subtitle-2 mb--30">The page you are trying to view can not be found</p>
                                        <router-link to="/" class="axil-button btn-large btn-transparent"><span
                                            class="button-text">Go Back</span><span class="button-icon"></span></router-link>
                                        <img class="text-image" src="../assets/images/others/404.svg" alt="404 Images">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shape-group">
                    <div class="shape shape-01">
                        <img src="../assets/images/shape/404-01.svg" alt="Shape Images">
                    </div>
                    <div class="shape shape-02">
                        <img src="../assets/images/shape/404-01.svg" alt="Shape Images">
                    </div>
                    <div class="shape shape-03">
                        <img src="../assets/images/shape/404-02.svg" alt="Shape Images">
                    </div>
                    <div class="shape shape-04">
                        <img src="../assets/images/shape/404-03.svg" alt="Shape Images">
                    </div>
                </div>
            </div>
            <!-- End Page Error Area  -->
        </main>
</template>
<script>
export default {
    name: 'NotFound'
}
</script>