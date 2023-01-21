<template>
    <section class="p-0 align-items-center">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Left START -->
                <div class="col-md-12 col-lg-5 col-xl-4 d-md-flex align-items-center bg-light vh-lg-100">
                    <div class="w-100 p-3 p-lg-5 py-5">
                        <div class="justify-content-center align-self-center">
                            <!-- Logo START -->
                            <router-link class="navbar-brand" to="./">
                                <!-- <img class="navbar-brand-item" src="assets/images/logo-dark.svg" alt="logo"> -->
                                <h3>BrandLayLo.com</h3>
                            </router-link>
                            <!-- Logo END -->
                        </div>
                        <h4 class="mb-0">We connect you with the world largest community</h4>
                        <ul class="list-group list-group-borderless mt-4">
                            <li class="list-group-item"><i class="fas fa-check me-2"></i>Connect with your community via
                                formax</li>
                            <li class="list-group-item"><i class="fas fa-check me-2"></i>Discover the best experience
                                with
                                fellowship</li>
                            <li class="list-group-item"><i class="fas fa-check me-2"></i>Create your wishlist and enjoy
                                to
                                best experience</li>
                        </ul>
                        <!-- Avatars -->
                        <div class="my-4 d-flex align-items-center">
                            <ul class="avatar-group mb-0">
                                <li class="avatar">
                                    <!-- Image -->
                                    <img class="avatar-img rounded-circle flex-shrink-0"
                                        src="../../assets/images/people/01.jpeg" alt="avatar">
                                </li>
                                <li class="avatar">
                                    <!-- Image -->
                                    <img class="avatar-img rounded-circle flex-shrink-0"
                                        src="../../assets/images/people/02.jpeg" alt="avatar">
                                </li>
                                <li class="avatar">
                                    <!-- Image -->
                                    <img class="avatar-img rounded-circle flex-shrink-0"
                                        src="../../assets/images/people/03.jpeg" alt="avatar">
                                </li>
                            </ul>
                            <div class="list-unstyled ms-3">4k+ Customers joined us, now it's your turn.</div>
                        </div>
                    </div>
                </div>
                <!-- Left END -->

                <!-- Right START -->
                <div class="col-md-12 col-lg-8 col-xl-8 mx-auto my-5">
                    <div class="row h-100">
                        <div class="col-12 col-md-10 col-lg-5 text-start mx-auto d-flex align-items-center">
                            <div class="w-100">
                                <!-- Title -->
                                <h4>Sign in to your account!</h4>
                                <p>Join us today! Create your account easily with less information.</p>
                                <!-- Form START -->
                                <div v-if="error" class="alert alert-danger">{{error}}</div>

                                <form @submit.prevent="SignIn">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail" class="form-label">Email address</label>
                                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail"
                                            aria-describedby="emailHelp" placeholder="E-mail">
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone
                                            else.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <label for="exampleInputPassword" class="form-label">Password</label>
                                            <router-link to="password-recovery"
                                                class="text-dark text-primary-hover">Password
                                                lost? Click Here.</router-link>
                                        </div>
                                        <input type="password" v-model="password" class="form-control" id="exampleInputPassword"
                                            placeholder="********">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck">
                                        <label class="form-check-label" for="exampleCheck">keep me signed in</label>
                                    </div>
                                    <div class="d-grid mb-3">
                                        <button type="submit" class="btn btn-primary mb-0">Signin</button>
                                    </div>
                                </form>
                                <!-- Form END -->
                                <div class="mt-3 text-center">
                                    <span>Don't have an account?</span>
                                    <router-link to="sign-up" class="text-primary fw-bold">Signup here</router-link>
                                </div>
                            </div>
                        </div>
                    </div><!-- Left END -->
                </div><!-- Right END -->
            </div><!-- Row END -->
        </div>
    </section>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: "SignInComponent",
    setup() {
        const email = ref('')
        const password = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const SignIn = async () => {
            try {
                await store.dispatch('signin', {
                    email: email.value,
                    password: password.value
                })
                router.push('/')
            }
            catch (err) {
                console.log(err.message)
                if (err.message == 'Firebase: Error (auth/wrong-password).'){
                    error.value = 'Invalid Password.'
                    setTimeout(() => error.value = false, 3000);    
                } else if (err.message == 'Firebase: Error (auth/user-not-found).'){
                    error.value = 'This email does not exist.'  
                    setTimeout(() => error.value = false, 3000);  
                } else if (err.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
                    error.value = 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'    
                    setTimeout(() => error.value = false, 3000);
                }else{
                    error.value = err.message
                    setTimeout(() => error.value = false, 3000);
                }
            }
        }
        return { SignIn, email, password, error }
    }
};
</script>