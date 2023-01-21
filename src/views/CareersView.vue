<template>
    <main>
        <header-section  style="background-color:#197467"/>
    <CareerComponent/>
    </main>
    <footer-section />
</template>
<script>
import HeaderSection from '@/components/PartialComponents/HeaderSection.vue';
import CareerComponent from '@/components/CareerComponents/CareerComponent.vue';
import FooterSection from '@/components/PartialComponents/FooterSection.vue';
export default {
    name:'Careers',
    components:{
        HeaderSection,
        CareerComponent,
        FooterSection
    }
}
</script>
<style scoped>

</style>