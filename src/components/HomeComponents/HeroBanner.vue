<template>
    <!-- =======================
    Main banner START -->
    <section class="bg-primary position-relative">
    
        <!-- Svg START -->
        <figure class="mb-0 position-absolute bottom-0 start-0 d-none d-lg-block">
            <svg class="fill-dark opacity-25" width="233" height="209">
                <path
                    d="m42.126 51.038c-6.1 0-10.4-3.9-10.8-9.7-0.3-3.4 0.7-6.5 2.6-9.3 2-2.8 6.4-4.9 9.9-2.8 0.3 0.2 0.7 0.3 1.1 0.4 4.6 0.5 8.7 5.6 8.6 10.9-0.1 5.1-4.3 9.5-9.7 10.3-0.6 0.1-1.3 0.2-1.7 0.2z" />
                <path
                    d="m90.426 20.638c-6.9 0-11.4-5.6-9.8-12.4 0.5-2.3 1.6-4.4 3.3-6 1.9-1.8 4.1-2.7 6.8-2 1.2 0.3 2.4 0.3 3.5 0.6 4 0.8 6.8003 3.2 7.8003 7.2 1.1 4-0.4 7.2-3.4003 9.8-2.3 2-5.1 2.8-8.2 2.8z" />
                <path
                    d="m23.626 79.538c-0.1 6.7-6.4 11-12.5 8.4-8.4-3.5-9.2-12.6-5.5-18.4 0.9-1.4 2.2-2.3 3.8-2.8 1.4-0.4 2.9-0.5 3.9 0.4 1.6 1.5 3.6 2 5.3 3.1 3.1 2 5 5.5 5 9.3z" />
                <path
                    d="m37.626 182.54c-7.3 0-12.7-5.8-12.3-12.5 0.3-4.7 3.3-7 7.9-5.9 0.7 0.2 1.4 0.1 2.1 0.2 1.3 0.1 2.7 0.1 4 0.3 4.6 0.8 7.9 4.5 7.9 8.9 0 4.1-3.3 7.9-7.7 8.9-0.7 0-1.5 0-1.9 0.1z" />
                <path
                    d="m19.326 124.74c0 3.6-1.1 6.6-3.5 9-3.3 3.3-8.1 3.6-11.7 0.6-4.5-3.6-5.5-11.1-2.1-15.6 2.5-3.3 6.1-3.9 9.9-3.1 3.9 0.8 6.2 3.4 7.1 7.3 0.2 0.7 0.3 1.4 0.3 1.8z" />
                <path
                    d="m125.73 197.94c0-5.2 3.9-9 9.4-9 6.4 0 11 4.2 11 10.1 0 5.2-4.5 9.4-10 9.5-5.9 0-10.4-4.6-10.4-10.6z" />
                <path
                    d="m83.126 206.74c-6.3 0-12.4-6.1-12.3-12.4 0-4.4 3.4-6.8 7.6-5.5 1 0.3 2.2 0.3 3.3 0.3 4.6-0.2 8 1.9 9.5 5.8 2.3 5.9-1.7 11.9-8.1 11.8z" />
                <path
                    d="m202.63 178.74c0 4.4-3.7 8.3-8.3 8.8-4 0.4-8.2-2-9.7-5.7-1-2.4-0.9-4.7 0.6-6.8 0.1-0.2 0.3-0.4 0.4-0.6 3.4-4.7 8.5-5.6 13.4-2.4 2.3 1.6 3.6 4 3.6 6.7z" />
                <path
                    d="m124.73 13.538c0-2.1 0.5-3.8 1.6-5.4 2-3 5.2-3.8 8.4-2.1 1.3 0.7 2.5 1.4 3.7 2.3 2.6 2.1 3.7 4.8 2.9 8.1-0.8 3.4-3.1 5.5-6.6 6.2-3.3 0.6-6-0.6-8-3.2-1.4-1.8-2-3.8-2-5.9z" />
                <path
                    d="m222.83 126.14c5.3-0.1 9.4 4.3 9.3 9-0.1 2.8-1.1 5.1-3.2 7-4.4 4-11.1 1.9-12.4-3.9-0.3-1.3-0.4-2.8 0-4 0.6-2 1.6-4 2.6-5.9 1-1.6 2.7-2.2 3.7-2.2z" />
                <path
                    d="m146.03 79.538c0-0.3-0.1-0.7-0.1-1.1-0.2-3.3 1.6-5.5 4.7-6.2 4.3-0.9 9.1 2 10 6.1 1 4.3-1.8 8.5-6.2 9.6-4.5 1.1-9.4-2.3-8.6-7.4 0.1-0.3 0.1-0.6 0.2-1z" />
                <path
                    d="m65.926 61.838c0.1-3.1 0.9-5.5 2.9-7.3 3.4-3.1 8.1-2 9.6 1.7 0.4 0.9 0.9 1.7 1.4 2.5 1.4 2.7 1.5 5.4-0.3 7.9-1.7 2.4-4.1 3.5-7.1 3-3.2-0.5-5.1-2.5-6.1-5.4-0.2-1-0.3-1.9-0.4-2.4z" />
                <path
                    d="m104.23 149.94c2.7 1.2 6.2 2 8.1 5.3 1.5 2.7 0.9 6-1.4 8.4-2.4 2.4-5.9 3-8.8 1.6-4.2003-2.1-6.0003-7.9-3.7003-12 1.1-2.1 3.0003-3.3 5.8003-3.3z" />
                <path
                    d="m147.63 158.34c-4.3 0-7.8-3.6-7.6-7.9 0.1-1.7 0.6-3.5 1.4-5 1.2-2.4 3.5-3.3 6-2.8 1.7 0.3 3.4 1 4.8 2 3 2 4.1 5.3 3.1 8.3-1 3.2-4.3 5.4-7.7 5.4z" />
                <path
                    d="m48.226 92.838c0-2.2 0.6-4.1 2.2-5.6 2.5-2.3 6.1-2.1 8.2 0.5 0.7 0.9 1.4 1.7 2.2 2.5 1.2 1.2 2.1 2.6 2.5 4.3 1 4.7-2.9 8.7004-7.6 7.8004-4.1-0.7-7.4-4.9004-7.5-9.5004z" />
                <path
                    d="m174.53 41.738c-2.9 0-5.4-1.8-6.1-4.7-0.3-1.3-0.8-2.5-1.7-3.6-2.1-2.5-1.3-6 1.6-7.5 0.6-0.3 1.3-0.6 2-0.7 4.7-0.6 10.3 3.7 10.8 8.4 0.5 4.3-2.6 8.1-6.6 8.1z" />
                <path
                    d="m107.63 50.838c0 2.4-0.4 4.2-1.6 5.9-2.5 3.6-7.4003 3.9-10.3 0.5-2.4-2.7-2.6-6.5-0.7-9.5 0.4-0.7 0.8-1.4 1.1-2.1 1.6-4 6.1003-4.9 9.0003-1.7 2 2.1 2.5 4.6 2.5 6.9z" />
                <path
                    d="m205.43 62.638c0 3.8-2.8 6.8-6.5 7.1-4 0.3-7.5-2.6-7.9-6.7-0.2-1.5-0.1-3 0-4.5 0.3-2.6 2.4-4.4 5.1-4.6 4.5-0.4 9.4 4.2 9.3 8.7z" />
                <path
                    d="m226.63 92.038c0 3.8-3 7.2-6.9 7.6-3.6 0.4004-7.1-2-7.8-5.6-0.5-2.4 0.1-4.8 1.1-6.9 0.4-0.9 1.5-1.7 2.4-2.2 4.7-2.3 11.2 1.8 11.2 7.1z" />
                <path
                    d="m180.03 117.24c0 3.3-2.1 6.1-5.3 6.8-3 0.7-6-0.9-7.4-3.9-0.4-0.8-0.9-1.7-1.5-2.4-2.1-2.9-1.1-6.7 2.2-8.2 5.2-2.3 12 2.1 12 7.7z" />
                <path
                    d="m131.73 58.138c0 0.3 0 0.7-0.1 1.2-0.5 3.4-2.9 5.8-6 5.8-3 0-5.5-2.2-6.1-5.4-0.3-1.8-0.7-3.6-1-5.4-0.4-2.1 0.1-4 1.9-5.3 1.9-1.4 3.9-1.3 5.9-0.2 2.7 1.4 5.4 5.9 5.4 9.3z" />
                <path
                    d="m77.626 136.04c-0.2 2.6-1.5 4.8-4.2 6s-5.3 0.8-7.6-1.2c-2.7-2.3-3.6-6.6-2.1-9.9s5.2-4.6 8.5-2.9c3.4 1.7 5.4 4.6 5.4 8z" />
                <path
                    d="m101.03 93.738c-0.1 1.5-0.1 2.5-0.2 3.4-0.4 2.4-1.8003 4.0004-4.2003 4.7004-2.3 0.6-4.3-0.1-5.8-1.8-2.8-3.0004-2.5-8.2004 0.3-11 1.9-1.8 4.6-2.3 6.9-1.2 2.2003 1 3.2003 3.1 3.1003 5.7-0.1 0.3-0.1 0.5-0.1 0.2z" />
                <path
                    d="m126.23 130.24c0 2.6-1.9 4.8-4.6 5.4-2.6 0.6-4.9-0.1-6.8-2.1-1.8-2-2.4-4.3-1.7-6.9 0.6-2.2 2.1-3.6 4.3-4.1 2.1-0.5 3.9 0.2 5.4 1.8 0.6 0.7 1.3 1.4 1.9 2.1 1.1 1.1 1.6 2.3 1.5 3.8z" />
                <path
                    d="m100.73 119.84c-0.1 3.2-1.1003 5.1-3.3003 6.2s-4.4 0.8-6.3-0.7c-2.9-2.2-3.6-6.7-1.7-9.8 2.3-3.7 7.3-3.7 9.5 0.1 0.9 1.4 1.4003 3.2 1.8003 4.2z" />
                <path
                    d="m137.03 101.04c0 3-1.7 5.5-4.3 6.2s-5.4-0.5-6.8-3.1c-0.9-1.6-1.3-3.4-0.9-5.3004 0.5-2.4 1.9-4 4.3-4.6 2.3-0.6 4.2 0.2 5.8 1.9 1.3 1.3 1.8 3.1 1.9 4.9004z" />
                <path
                    d="m121.53 89.338c-3.3 0-6.3-3.1-6.3-6.5 0-3 2.3-5.3 5.3-5.2 3.9 0 6.9 2.6 6.9 5.8 0 3.1-2.7 5.9-5.9 5.9z" />
            </svg>
        </figure>
        <!-- Svg END -->
    
        <div class="container pt-4 mt-4">
            <div class="row align-items-center mb-2">
    
                <div class="col-lg-5 z-index-9">
                    <!-- Title -->
                    <h1 class="text-white">Accelerate your <span class="text-warning" title="Return on Investment">ROI</span> with <strong>BrandLayLo</strong></h1>
                    <!--Content -->
                    <p class="text-white mb-0">Buy an online business, become an acquisition entrepreneur, and invest in digital real estate.</p>
    
                    <!-- Button -->
                    <div class="my-4">
                        <a class="btn btn-warning mb-0">How it works?</a>
                        <a class="btn btn-white btn-white-shadow btn-round btn-lg ms-3 mb-0" data-glightbox=""
                            data-gallery="hero" href="https://www.youtube.com/embed/tXHviS-4ygo"><i
                                class="fas fa-play"></i></a>
                    </div>
    
                    <!-- Social -->
                    <div class="d-flex me-auto align-items-center mb-4 mb-md-0">
                        <!-- Social link -->
                        <div class="hstack gap-3 text-white">
                            <h6 class="text-white mb-0 me-3">Follow on:</h6>
                            <div> <a href="#" class="text-white"><i class="bi bi-exclamation-diamond fa-brands fa-fw fa fa-facebook"></i></a> </div>
                            <div> <a href="#" class="text-white"><i class="bi bi-exclamation-diamond fa-brands fa-fw fa fa-linkedin"></i></a> </div>
                            <div> <a href="#" class="text-white"><i class="bi bi-exclamation-diamond fa-brands fa-fw fa fa-twitter"></i></a> </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-lg-4 mt-auto position-relative">
    
                            <!-- Svg START -->
                            <figure class="position-absolute bottom-0 end-0 me-3 mb-7 d-none d-lg-block">
                                <svg width="100px" height="100px">
                                    <path class="fill-warning"
                                        d="M90.000,0.003 L100.000,0.003 L100.000,100.003 L-0.000,100.003 L-0.000,90.003 C-0.000,40.297 40.294,0.003 90.000,0.003 Z" />
                                </svg>
                            </figure>
                            <!-- Svg END-->
    
                            <!-- Svg START -->
                            <figure class="position-absolute bottom-0 end-0 mb-0 d-none d-lg-block">
                                <svg class="fill-dark opacity-2" width="123" height="64">
                                    <path
                                        d="M55.7,20.1c-0.4-0.3-0.6-0.6-0.9-0.7C44.6,13.2,33.9,7.9,22.2,4.8c-5.3-1.4-10.7-2-16.1-2.3C4.7,2.5,3.2,2.3,1.8,2.1 C1.3,2,0.7,1.8,0.3,1.5C0.1,1.3-0.1,0.8,0,0.5C0.1,0.2,0.6,0,0.9,0c13.3,0.4,26.3,2.5,38.4,8.3c6.2,3,12.3,6.1,18.1,9.8 c0.6,0.4,1.5,0.9,2.1,0.8c7.8-1.3,15.4,0,22.7,2.2c11.3,3.5,22.4,7.4,33.6,11.2c0.7,0.2,1.5,0.5,2.5,0.4 c-4.8-6.2-9.7-12.3-14.6-18.6c1.1-0.8,1.9-0.6,2.7-0.1c0.9,0.6,1.9,1.2,2.7,2c4.3,4.5,8.6,9,12.8,13.6c0.9,1,1.6,2.2,2.2,3.4 c1.1,2.4,0,4.3-2.6,4.7c-5.1,0.7-10.1,1.3-15.2,1.8c-1.5,0.2-2.4-0.4-2.6-1.5c-0.1-1,0.6-1.9,2.1-2.2c2.6-0.5,5.2-0.8,8.1-1.3 c-0.5-0.3-0.7-0.5-1-0.6c-11.3-3.4-22.6-6.8-34-10c-3.4-1-7.1-1.3-10.6-1.8c-1.4-0.2-2.9,0-4.7,0c0.6,0.7,1.1,1.2,1.5,1.6 c3.4,3,6.5,6.4,8.9,10.3c2.1,3.5,3.4,7.2,3.3,11.4c-0.1,1.4-0.2,2.9-0.6,4.3c-1.7,6.2-7.3,9.5-13.8,8.1c-8.1-1.6-18-9.7-18-21.4 c0-6.6,3.1-11.6,8.6-15.2C54.3,20.9,55,20.5,55.7,20.1z M75.4,44.4c-0.1-3.8-1.1-7-2.9-9.9c-2.7-4.7-6.5-8.5-10.6-11.9 c-0.9-0.8-1.8-0.8-2.9-0.5C53.2,24,49,30,49.3,35.9c0.3,8,7.1,16.2,15,17.9c5.3,1.2,9.4-1.4,10.7-6.6C75.2,46.1,75.3,45,75.4,44.4z" />
                                </svg>
                            </figure>
                            <!-- Svg END-->
    
                            <!-- Image -->
                            <img src="../../assets/images/people/hassanwithmac.jpeg" class="rounded-3 mb-0 mb-lg-9 mt-5 mt-lg-0 position-relative"
                                alt="hero">
                        </div>
    
                        <div class="col-lg-8 position-relative">
    
                            <!-- Svg START-->
                            <figure class="position-absolute top-50 start-100 translate-middle ms-n4 d-none d-lg-block">
                                <svg width="100px" height="100px">
                                    <path fill-rule="evenodd" class="fill-warning"
                                        d="M-0.000,-0.000 L10.000,-0.000 C59.706,-0.000 100.000,40.294 100.000,90.000 L100.000,100.000 L-0.000,100.000 L-0.000,-0.000 Z" />
                                </svg>
                            </figure>
                            <!-- Svg END-->
    
                            <div class="position-relative">
                                <!-- Svg START-->
                                <figure class="position-absolute bottom-0 start-0 mb-0 z-index-9">
                                    <svg class="fill-primary" width="47px" height="70.5px">
                                        <rect class="st0" width="23.5" height="23.5" />
                                        <rect x="23.5" y="23.5" class="st0" width="23.5" height="23.5" />
                                        <rect y="47" class="st0" width="23.5" height="23.5" />
                                    </svg>
                                </figure>
                                <!-- Svg END-->
    
                                <!-- Image -->
                                <img src="../../assets/images/people/poodle.jpeg" class="rounded-top-right-10" alt="hero">
                            </div>
    
                            <!-- Message Box -->
                            <div class="col-7 position-absolute top-0 start-0 ms-n9 d-none d-lg-block">
                                <div class="bg-white rounded-3 position-relative py-3 px-4">
                                    <h6>Keep updated</h6>
                                    <p class="mb-0">Get 20% off for every new subscription</p>
                                    <!-- Icon -->
                                    <small><i class="bi bi-patch-check-fill text-primary me-2 fa fa-solid fa-shop-lock"></i>increase your investment
                                        revenue</small>
                                    <!-- Icon -->
                                    <div
                                        class="icon-md bg-warning bg text-dark rounded-circle position-absolute top-0 start-100 translate-middle">
                                        <i class="fab fa-mailchimp fs-6"></i>
                                    </div>
                                </div>
                            </div>
    
                            <div class="hstack flex-wrap gap-3 mt-3 justify-content-lg-end">
                                <div class="bg-white bg-opacity-25 rounded-pill text-white py-2 px-3">
                                    <!-- Icon -->
                                    <i class="bi  me-2 fa-solid fa-shield-heart" style="color:white;"></i>Do it your-self approach
                                </div>
    
                                <div class="bg-white bg-opacity-25 rounded-pill text-white py-2 px-3 ms-lg-0">
                                    <!-- Icon -->
                                    <i class="bi me-2 fa-solid fa-truck-arrow-right "></i>Our team do anything
                                </div>
                            </div>
                        </div>
                    </div><!-- RoW END -->
                </div>
    
            </div><!-- RoW END -->
        </div>
    
    </section>
    <!-- =======================
    Hero banner END -->
</template>

<script>

export default{
    name:'HeroBanner'
}
</script>