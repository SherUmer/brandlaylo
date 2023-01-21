<template>
    <!-- =======================
    Testimonial START -->
    <section class="py-0">
        <div class="container">
            <div class="row align-items-center">
    
                <div class="col-lg-3">
                    <!-- Title -->
                    <h2 class="mb-3">What our clients say</h2>
                    <!-- Content -->
                    <p>Smile spoke total few great had never their too Amongst moments do in arrived at my</p>
                    <!-- Button -->
                    <a class="btn btn-primary" href="#">Read Client Stories</a>
                </div>
    
                <div class="col-lg-9">
                    <!-- Tiny slider START -->
                    <div class="tiny-slider arrow-round arrow-gray arrow-hover">
                        <div class="tiny-slider-inner my-3" data-autoplay="true" data-edge="20" data-arrow="true" data-dots="false"
                            data-items-xl="3" data-items-md="2" data-items-sm="1">
                            <VueTinySlider :options="options" ref="TestimonialSlider" @indexChanged="onIndexChange">
                                <div class="testimonial-item">
                                    <!-- Card START -->
                                    <div class="card card-body card-bg-scale-border rounded-4 rounded-bottom-right-0 px-3 py-4">
                                        <!-- Card header START -->
                                        <div class="card-header pb-0">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-lg flex-shrink-0">
                                                    <!-- Avatar -->
                                                    <img class="avatar-img rounded-circle" src="../../assets/images/people/01.jpeg"
                                                        alt="avatar">
                                                </div>
                                                <div class="ms-3 flex-shrink-1">
                                                    <!-- Card title -->
                                                    <h6 class="mb-1">Frances Guerrero</h6>
                                                    <!-- Card sub-title -->
                                                    <span class="mb-2 fw-bold small">Australia</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card header END -->
                                        <!-- Card Body START -->
                                        <div class="card-body pt-0">
                                            <!-- Ratting -->
                                            <ul class="list-inline my-2">
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-half text-warning"></i>
                                                </li>
                                            </ul>
                                            <!-- Content -->
                                            <p class="card-text">He moonlights difficult engrossed it, sportsmen. Interested has
                                                all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment
                                                alteration to. Place</p>
                                        </div>
                                        <!-- Card body END -->
                                    </div>
                                    <!--Card END  -->
                                </div>
                    
                                <div class="testimonial-item">
                                    <!-- Card START -->
                                    <div class="card card-body card-bg-scale-border rounded-4 rounded-bottom-right-0 px-3 py-4">
                                        <!-- Card header START -->
                                        <div class="card-header pb-0">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-lg flex-shrink-0">
                                                    <!-- Avatar -->
                                                    <img class="avatar-img rounded-circle" src="../../assets/images/people/02.jpeg"
                                                        alt="avatar">
                                                </div>
                                                <div class="ms-3 flex-shrink-1">
                                                    <!-- Card title -->
                                                    <h6 class="mb-1">Louis Ferguson</h6>
                                                    <!-- Card sub-title -->
                                                    <span class="mb-2 fw-bold small">America</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card header END -->
                                        <!-- Card Body START -->
                                        <div class="card-body pt-0">
                                            <!-- Ratting -->
                                            <ul class="list-inline my-2">
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-half text-warning"></i>
                                                </li>
                                            </ul>
                                            <!-- Content -->
                                            <p class="card-text">For who thoroughly her boy estimating conviction. Removed
                                                demands expense account in outward tedious do. Particular way thoroughly
                                                unaffected projection favorable</p>
                                        </div>
                                        <!-- Card body END -->
                                    </div>
                                    <!--Card END  -->
                                </div>
                    
                                <div class="testimonial-item">
                                    <!-- Card START -->
                                    <div class="card card-body card-bg-scale-border rounded-4 rounded-bottom-right-0 px-3 py-4">
                                        <!-- Card header START -->
                                        <div class="card-header pb-0">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-lg flex-shrink-0">
                                                    <!-- Avatar -->
                                                    <img class="avatar-img rounded-circle" src="../../assets/images/people/03.jpeg"
                                                        alt="avatar">
                                                </div>
                                                <div class="ms-3 flex-shrink-1">
                                                    <!-- Card title -->
                                                    <h6 class="mb-1">Carolyn Ortiz</h6>
                                                    <!-- Card sub-title -->
                                                    <span class="mb-2 fw-bold small">London</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card header END -->
                                        <!-- Card Body START -->
                                        <div class="card-body pt-0">
                                            <!-- Ratting -->
                                            <ul class="list-inline my-2">
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-half text-warning"></i>
                                                </li>
                                            </ul>
                                            <!-- Content -->
                                            <p class="card-text">Rooms oh fully taken by worse do. Points afraid but may end law
                                                lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel I
                                                do we attack highest</p>
                                        </div>
                                        <!-- Card body END -->
                                    </div>
                                    <!--Card END  -->
                                </div>
                    
                                <div class="testimonial-item">
                                    <!-- Card START -->
                                    <div class="card card-body card-bg-scale-border rounded-4 rounded-bottom-right-0 px-3 py-4">
                                        <!-- Card header START -->
                                        <div class="card-header pb-0">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-lg flex-shrink-0">
                                                    <!-- Avatar -->
                                                    <img class="avatar-img rounded-circle" src="../../assets/images/people/04.jpeg"
                                                        alt="avatar">
                                                </div>
                                                <div class="ms-3 flex-shrink-1">
                                                    <!-- Card title -->
                                                    <h6 class="mb-1">Samuel Bishop</h6>
                                                    <!-- Card sub-title -->
                                                    <span class="mb-2 fw-bold small">India</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Card header END -->
                                        <!-- Card Body START -->
                                        <div class="card-body pt-0">
                                            <!-- Ratting -->
                                            <ul class="list-inline my-2">
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-fill text-warning"></i>
                                                </li>
                                                <li class="list-inline-item me-0"><i class="bi bi-star-half text-warning"></i>
                                                </li>
                                            </ul>
                                            <!-- Content -->
                                            <p class="card-text">Perceived end knowledge certainly day sweetness why cordially.
                                                Ask a quick six seven offer see among. Handsome met debating sir dwelling age
                                                material. As style</p>
                                        </div>
                                        <!-- Card body END -->
                                    </div>
                                    <!--Card END  -->
                                </div>
                            </VueTinySlider>
                    
                        </div>
                    </div>
                    <!-- Tiny slider END -->
                </div>
    
            </div><!-- Row END -->
        </div>
    </section>
    <!-- =======================
    Testimonial END -->

</template>



<script>

import { ref, onMounted } from "vue";
import VueTinySlider from "@mentorkadriu/vue-tiny-slider";

export default {
    name:'Testimonials',
    components: { VueTinySlider },
    setup() {
        // Optional: Create a ref to hold the slider value
        const TestimonialSlider = ref(null);

        // https://github.com/ganlanyuan/tiny-slider#options
        const options = {
            "loop": true,
            "controls": false,
            "responsive": {
                "500": {
                    "items": 1
                },
                "900": {
                    "items": 3
                }
            },
            "swipeAngle": false,
            'mouseDrag': true,
            "speed": 300
        }
        onMounted(() => {
            // Get slider instance
            console.log(TestimonialSlider.value.getSlider());
        });


        function onIndexChange(info) {
            console.log(info);
        }

        return {
            onIndexChange,
            options,
            TestimonialSlider,
        };
    },
}
</script>
<style scoped>
.tiny-slider{
    padding-top: 100px;
    padding-bottom: 100px;
}
.testimonial-item{
    padding:10px;
}
</style>