<template>
    <section class="py-4">
        <div class="container">
    
            <div class="row align-items-center">
                <div class="col-12">
                    <!-- Slider START -->
                    <div class="my-slider">
                        <div class="my-slider-inner carousel" data-arrow="false" data-autoplay="true" data-edge="2"
                            data-dots="false" data-gutter="80" data-items-xl="6" data-items-lg="5" data-items-md="4"
                            data-items-sm="3" data-items-xs="2">
                            <VueTinySlider  :options="options" ref="slider" @indexChanged="onIndexChange">
                            <div class="item"> <img src="../../assets/images/client/google.svg" class="grayscale p-3" alt="">
                            </div>
                            <div class="item"> <img src="../../assets/images/client/microsoft.svg" class="grayscale p-3" alt="">
                            </div>
                            <div class="item"> <img src="../../assets/images/client/envato.svg" class="grayscale p-3" alt="">
                            </div>
                            <div class="item"> <img src="../../assets/images/client/linkedin.svg" class="grayscale p-3" alt="">
                            </div>
                            <div class="item"> <img src="../../assets/images/client/paypal.svg" class="grayscale p-3" alt="">
                            </div>
                            <div class="item"> <img src="../../assets/images/client/pinterest.svg" class="grayscale p-3" alt="">
                            </div>
                            <div class="item"> <img src="../../assets/images/client/uber.svg" class="grayscale p-3" alt=""> </div>
                        </VueTinySlider>
                        </div>
                        <!-- Slider END -->
                    </div>
                </div><!-- Row END -->
            </div>
        </div>
        
    </section>
    
        <!-- <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div> -->
    
    
</template>


<script>

import { ref, onMounted } from "vue";
import VueTinySlider from "@mentorkadriu/vue-tiny-slider";
export default {
    name:'Clients',
    components: { VueTinySlider },
    setup() {
        // Optional: Create a ref to hold the slider value
        const slider = ref(null);

        // https://github.com/ganlanyuan/tiny-slider#options
        const options = {
            "loop": true,
            "controls":false,
            "responsive": {
                "500": {
                    "items": 3
                },
                "900": {
                    "items": 6
                }
                
            },
            "swipeAngle": false,
            'mouseDrag':true,
            "speed": 300
        }
        onMounted(() => {
            // Get slider instance
            console.log(slider.value.getSlider());
        });


        function onIndexChange(info) {
            console.log(info);
        }

        return {
            onIndexChange,
            options,
            slider,
        };
    },
}
</script>
<style scoped>

</style>>
<!-- /* @import 'tiny-slider/src/tiny-slider'; */
/* .item{
max-width:14%;
float:left;
} */ -->