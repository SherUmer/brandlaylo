import { createStore } from 'vuex'
import { collection, addDoc,setDoc,doc } from "firebase/firestore"
import {auth,db} from '../Database/db.js'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const store =  createStore({
    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.data = payload
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        }
    },
    actions: {
        async SignUp(context, { email, password }) {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                
                context.commit('SET_USER', response.user)
                
                console.log(response.user.uid)

                const uid = response.user.uid

                await setDoc(doc(db, "users", uid), { 
                    email: response.user.email, 
                    uid: uid 
                })

            } else {
                throw new Error('Unable to SignUp user')
            }
        },
        async signin(context, { email, password }) {
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
                
            } else {
                throw new Error('signin failed')
            }
        },
        async logOut(context) {
            await signOut(auth)
            context.commit('SET_USER', null)
        },
        async fetchUser(context, user) {
            context.commit("SET_LOGGED_IN", user !== null);
            if (user) {
                context.commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                context.commit("SET_USER", null);
            }
        }
    }
})

export default store