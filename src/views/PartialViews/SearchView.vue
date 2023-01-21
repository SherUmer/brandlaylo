<template>
    <HeaderSection style="background-color:#197467" />
    <main style="min-height:100vh">
    <SearchComponent style="padding-top:200px;" />
    </main>
    <FooterSection />
</template>

<script>
import SearchComponent from '@/components/PartialComponents/SearchComponent.vue'
import HeaderSection from '@/components/PartialComponents/HeaderSection.vue'
import FooterSection from '@/components/PartialComponents/FooterSection.vue';

export default {
    name:'SearchView',
    components:{
        SearchComponent, HeaderSection, FooterSection
    }
}
</script>