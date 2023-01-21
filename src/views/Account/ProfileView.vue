<template>
    <main>
        <HeaderSectionVue />
<h5 class="bold">Profile View</h5>
    </main>
    
</template>

<script>
import HeaderSectionVue from '@/components/PartialComponents/HeaderSection.vue';
export default {
    name: 'Profile View',
    methods:{
        loaded(){
            console.log('Profile view should only load once user is logged in!')
        }
        
    },
    components:{
        HeaderSectionVue
    }

}
</script>