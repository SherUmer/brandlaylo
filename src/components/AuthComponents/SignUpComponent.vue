<template>
    <section class="p-0 align-items-center">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-lg-5 col-xl-4 d-md-flex align-items-center bg-light vh-lg-100">
                    <div class="w-100 p-3 p-lg-5 py-5">
                        <div class="justify-content-center align-self-center">
                            <!-- Logo START -->
                            <router-link class="navbar-brand" to="./">
                                <h3>BrandLayLo.com</h3>
                                <!-- <img class="navbar-brand-item" src="assets/images/logo-dark.svg" alt="logo"> -->
                            </router-link>
                            <!-- Logo END -->
                        </div>
                        <h4 class="mb-0">We connect you with the world largest community</h4>
                        <ul class="list-group list-group-borderless mt-4">
                            <li class="list-group-item"><i class="fas fa-check me-2"></i>Connect with your community via
                                formax</li>
                            <li class="list-group-item"><i class="fas fa-check me-2"></i>Discover the best experience with
                                fellowship</li>
                            <li class="list-group-item"><i class="fas fa-check me-2"></i>Create your wishlist and enjoy to
                                best experience</li>
                        </ul>
    
                        <!-- Avatars -->
                        <div class="my-4 d-flex align-items-center">
                            <ul class="avatar-group mb-0">
                                <li class="avatar">
                                    <!-- Image -->
                                    <img class="avatar-img rounded-circle flex-shrink-0" src="../../assets/images/people/01.jpeg"
                                        alt="avatar">
                                </li>
                                <li class="avatar">
                                    <!-- Image -->
                                    <img class="avatar-img rounded-circle flex-shrink-0" src="../../assets/images/people/02.jpeg"
                                        alt="avatar">
                                </li>
                                <li class="avatar">
                                    <!-- Image -->
                                    <img class="avatar-img rounded-circle flex-shrink-0" src="../../assets/images/people/03.jpeg"
                                        alt="avatar">
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
                                <h4>Sign up for your account!</h4>
                                <p>Join us today! Create your account easily with less information.</p>
                                <!-- Form START -->
                                <!-- <div class="alert alert-danger" :class="errorClass" style="">Your passwords do not match</div> -->
                                
                                <transition name="toast">
                                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                                </transition>
                                
                                <form @submit.prevent="SignUp">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail2" class="form-label">Email address</label>
                                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail2"
                                            aria-describedby="emailHelp" placeholder="E-mail">
                                        <div id="emailHelp" class="form-text">Email address well never share your email with
                                            anyone else.</div>
                                    </div>
    
                                    <div class="mb-3">
                                        <label for="exampleInputPassword2"  class="form-label">Password</label>
                                        <input type="password" v-model="password" class="form-control" id="exampleInputPassword2"
                                            placeholder="********">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword3"  class="form-label">Confirm Password</label>
                                        <input type="password" v-model="confirmPassword" class="form-control" id="exampleInputPassword3"
                                            placeholder="********">
                                    </div>
    
                                    <div class="d-grid mb-3">
                                        <button type="submit" class="btn btn-primary mb-0">Signup</button>
                                    </div>
                                </form>
                                <!-- Form END -->
    
                                <div class="row g-4">
                                    <div class="col-lg-6 d-grid">
                                        <!-- Button -->
                                        <a href="#" class="btn bg-facebook mb-0"><i
                                                class="fab fa-facebook-f me-2"></i>Facebook</a>
                                    </div>
                                    <div class="col-lg-6 d-grid">
                                        <!-- Button -->
                                        <a href="#" class="btn bg-google mb-0"><i class="fab fa-google me-2"></i>
                                            google</a>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <span>Already have an account?</span>
                                    <router-link to="sign-in" class="text-primary fw-bold"> Signin here</router-link>
                                </div>
    
                            </div>
    
                        </div>
                    </div><!-- Row END -->
    
                </div><!-- Row END -->
                <!-- Right END -->
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


export default {
    name: "SignUpComponent",
    setup() {
        const email = ref('')
        const password = ref('')
        const confirmPassword = ref('')
        const error = ref(null)

        // const triggerToast = () => {
        //     setTimeout(() => {
        //         console.log('coimung form itmedout')
        //         error.value = false
        //         error = null
        //     }, 3000)
        // }

        const store = useStore()
        const router = useRouter()

        const SignUp = async () => {
                    try {
                        if(password.value == confirmPassword.value){
                            await store.dispatch('SignUp', {
                                email: email.value,
                                password: password.value
                            }).then(()=>{
                                console.log('user was signed up successfully !!! ')
                            })
                            router.push('/')
                        }else{
                            error.value = 'Your passwords do not match !'
                            setTimeout(() => error.value = false, 3000);
                        }
                    }
                    catch (err) {
                        console.log(err.message)
                        if (err.message == 'Firebase: Error (auth/email-already-in-use).'){
                            error.value = "This email address already exists, Try Sign-In instead"
                        } else if(err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                            error.value = "Your Password should be at least 6 characters long"
                        }else{
                            error.value = err.message
                        }
                        setTimeout(() => error.value = false, 3000);
                        
                    }
        }
       
        return { SignUp, email, password,confirmPassword, error}
    }
}
</script>
<style>
.toast-enter-from,.toast-leave-to{
    opacity:0;
    transform:translateY(-60px);
}
.toast-enter-to,.toast-leave-from{
opacity:1;
transform:translateY(0);
}
.toast-enter-active,.toast-leave-active{
transition: all 0.3s ease;
}
</style>