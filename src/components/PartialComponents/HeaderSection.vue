<template>
    <header class="navbar-dark navbar-transparent">
        <!-- Logo Nav START -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <!-- Logo START -->
                <router-link class="navbar-brand" to="/">
                    <strong>BrandLayLo.com</strong>
                    <!-- <img class="navbar-brand-item" src="assets/images/logo.svg" alt="logo"> -->
                </router-link>
                <!-- Logo END -->
                <!-- Responsive navbar toggler -->
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <!-- Main navbar START -->
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-nav-scroll mx-auto">
    
                        <!-- Nav item 2 About -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="aboutMenu" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Browse</a>
                            <!-- Dropdown menu -->
                            <ul class="dropdown-menu" aria-labelledby="aboutMenu">
                                <li> <router-link class="dropdown-item" to="about">Popular Brands</router-link> </li>
                                <li> <router-link class="dropdown-item" to="about">Websites</router-link> </li>
                                <li> <router-link class="dropdown-item" to="about">Apps</router-link> </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown dropdown-mega position-static">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Popular</a>
                            <div class="dropdown-menu shadow">
                                <div class="mega-content px-4">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                                <h4>Popular</h4>
                                                <div class="list-group">
                                                    <!-- <ul class="dropdown-menu" aria-labelledby="aboutMenu"> -->
                                                        <li> <router-link class="dropdown-item" to="about">Popular Brands</router-link> </li>
                                                        <li> <router-link class="dropdown-item" to="about">Websites</router-link> </li>
                                                        <li> <router-link class="dropdown-item" to="about">Apps</router-link> </li>
                                                    <!-- </ul> -->
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                                <h4>Famous Investments</h4>
                                                <div class="card">
                                                    <img src="../../assets/images/01.jpeg" class="img-fluid" alt="image">
                                                    <div class="card-body">
                                                        <p class="card-text">Top Property in Exchange...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                                <h4>Special Offers</h4>
                                                <p>Description goes here...</p>
                                            </div>
                                            <div class="col-12 col-sm-4 col-md-3 py-4">
                                                <h4>Physical Shops</h4>
                                                <div class="list-group">
                                                    <!-- <ul class="dropdown-menu" aria-labelledby="aboutMenu"> -->
                                                    <li> <router-link class="dropdown-item" to="about">Grocery Shop in G/13</router-link> </li>
                                                    <li> <router-link class="dropdown-item" to="about">Barbar Business in G/13-3</router-link> </li>
                                                    <li> <router-link class="dropdown-item" to="about">Transport Bus Running Business</router-link> </li>
                                                    <!-- </ul> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
    
                        <li class="nav-item"><router-link class="nav-link" to="careers">Careers</router-link></li>
    
                        <!-- Nav item 4 Component-->
                        <li class="nav-item"><router-link class="nav-link" to="pricing">Pricing</router-link></li>
                    </ul>
                </div>
                <!-- Main navbar END -->
    
                <!-- Nav right START -->
                <div class="d-none d-sm-block" v-if="!user.loggedIn">
                    <!-- Nav Button -->
                    <router-link to="search" class="btn btn-link text-white mb-0"><i class="fa fa-search"></i> Search</router-link>
                    <router-link to="sign-in" class="btn btn-link text-white mb-0">Login</router-link>
                    <router-link to="sign-up" class="btn btn-dark mb-0 mx-2">Sign up</router-link>
                </div>
                <div class="d-none d-sm-block" v-else>
                    <!-- Nav Button -->
                    <router-link to="search" class="btn btn-link text-white mb-0"><i class="fa fa-search"></i> Search</router-link>
                    <button @click.prevent="signOut" class="btn btn-dark mb-0 mx-2">Sign out</button>
                </div>
                <!-- Nav right END -->
    
            </div>
        </nav>
        <!-- Logo Nav END -->
    </header>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import {auth} from '../../Database/db.js'

export default {
    name: "HeaderSection",

    setup() {
        const store = useStore()
        const router = useRouter()
        
        auth.onAuthStateChanged(user => {
            store.dispatch("fetchUser", user);
        });
        
        const user = computed(() => {
            return store.getters.user;
        });
        
        const signOut = async () => {
            await store.dispatch('logOut')
            router.push('/sign-in')
        }
        
        return { user, signOut }
    }


}
</script>
<style scoped>
.navbar .megamenu {
    padding: 1rem;
}
.navbar-expand-lg .navbar-nav .dropdown-menu{
    left:0;
}
.navbar h4{
    font-size:1.2rem;
}
.dropdown-item:hover,
.dropdown-item:focus{
    padding-left:0;
    font-weight: bold;
}

/* ============ desktop view ============ */
@media all and (min-width: 992px) {

    .navbar .has-megamenu {
        position: static !important;
    }

    .navbar .megamenu {
        left: 0;
        right: 0;
        width: 100%;
        margin-top: 0;
    }

}

/* ============ desktop view .end// ============ */

/* ============ mobile view ============ */
@media(max-width: 991px) {

    .navbar.fixed-top .navbar-collapse,
    .navbar.sticky-top .navbar-collapse {
        overflow-y: auto;
        max-height: 90vh;
        margin-top: 10px;
    }
}

/* ============ mobile view .end// ============ */
</style>
