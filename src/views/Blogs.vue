<template>
    <main>
        <header-section style="background-color:#197467" />
    <BlogsComponent />
    </main>
    <footer-section />
</template>
<script>
import HeaderSection from '@/components/PartialComponents/HeaderSection.vue';
import BlogsComponent from '@/components/Blogs/BlogsComponent.vue';
import FooterSection from '@/components/PartialComponents/FooterSection.vue';
export default {
    name:'Blogs',
    components:{
        HeaderSection, BlogsComponent, FooterSection
    }
}
</script>