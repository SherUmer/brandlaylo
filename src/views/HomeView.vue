<template>
  <main>
    <header-section />
    <hero-banner />
    <services />
    <about />
    <testimonials />
    <ActionBox />
    <Stepper />
    <Pricing />
    <Clients />
  </main>
  <footer-section />
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/PartialComponents/HeaderSection.vue'
import HeroBanner from '@/components/HomeComponents/HeroBanner.vue'
import Services from '@/components/HomeComponents/Services.vue'
import About from '@/components/HomeComponents/About.vue'
import Testimonials from '@/components/HomeComponents/Testimonials.vue'
import ActionBox from '@/components/HomeComponents/ActionBox.vue'
import Stepper from '@/components/HomeComponents/Stepper.vue'
import Pricing from '@/components/HomeComponents/Pricing.vue'
import Clients from '@/components/HomeComponents/Clients.vue'
import FooterSection from '@/components/PartialComponents/FooterSection.vue'


export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    HeroBanner,
    Services,
    About,
    Testimonials,
    ActionBox,
    Stepper,
    Pricing,
    Clients,
    FooterSection
}
}
</script>
