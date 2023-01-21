<template>
    <main>
        <SignUpComponent/>
        <!-- <h1>This is sign up view ?</h1> -->
    </main>
</template>

<script>

import SignUpComponent from '@/components/AuthComponents/SignUpComponent.vue'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../../Database/db.js'

export default {
    name:'SignUp',
    components:{
        SignUpComponent
    }
}
</script>

