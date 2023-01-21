<template>
    <HeaderSection style="background-color:#197467;" />
    <PricingComponent />
    <FaqComponent />
    <FeaturedComponent />
    <FooterSection />
</template>

<script>
import HeaderSection from '@/components/PartialComponents/HeaderSection.vue'
import PricingComponent from '@/components/PricingComponents/PricingComonent.vue'
import FaqComponent from '@/components/PricingComponents/FaqComponent.vue'
import FeaturedComponent from '@/components/PricingComponents/FeaturedComponent.vue'
import FooterSection from '@/components/PartialComponents/FooterSection.vue'
export default {
    name: 'PricingView',
    components:{HeaderSection,PricingComponent,FaqComponent,FeaturedComponent,FooterSection
}
}
</script>
<style>
PricingComponent{
    margin-top:100px;
}
</style>