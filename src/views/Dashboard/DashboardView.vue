<script>
import DashboardComponent from '@/components/DashboardComponents/DashboardComponent.vue'
import { Button } from 'bootstrap'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { auth } from '@/Database/db'
import { computed } from "vue";
import HeaderSection from '@/components/PartialComponents/HeaderSection.vue'
import HeroBanner from '@/components/HomeComponents/HeroBanner.vue'

export default {
  components: { DashboardComponent, Button, HeaderSection, HeroBanner },
  name: 'DashboardView',
  setup() {
    const store = useStore()
    const router = useRouter()

    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });

    const user = computed(() => {
      return store.getters.user;
    });

    if (user) {
      console.log(user);
      console.log('user exists')
    } else {
      router.push('/');
      console.log(user.value.loggedIn);
      console.log('user does not exist.')
    }

    return { user }
  }
}
</script>