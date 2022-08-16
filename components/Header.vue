<template>
    <header class="w-full flex justify-center items-center font-quicksand shadow-inner sticky bg-white z-40 h-20 ">
        <div class="w-10/12 px-4 py-4 flex justify-between">
            <div class="flex items-center">
                <nuxt-link to="/"> <img src="../assets/images/logo/logo .svg" class="mr-12 hover:cursor-pointer "
                        alt="">
                </nuxt-link>
                <nav class="flex items-center gap-8 text-sm">
                   <nuxt-link to="/orders">
                       <p class="hover:text-[#5920BC] hover: hover:cursor-pointer whitespace-nowrap">My Orders</p>
                   </nuxt-link> 
                    <nuxt-link to="/services"><p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Services</p></nuxt-link>
                    
                    <p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Help</p>
                </nav>
            </div>
            <div v-if="headerstate == true">
                <nuxt-link to="Account">
                    <div class="flex items-center gap-3">
                        <img src="../assets/images/headerpfp/Oval.svg" alt="">
                        <p
                            class="flex items-center hover:text-[#5920BC] h-8 px-3  rounded-md border border-transparent hover:border-gray-200 hover:shadow-inner ">
                            Elon Musk</p>
                    </div>
                </nuxt-link>
            </div>
            <div v-if="headerstate == false" class="flex items-center">
                <nuxt-link to="/signin" class="mr-8 text-[#5920BC] hover:text-[#220c48]">Sign In</nuxt-link>
                <nuxt-link to="/signup"
                    class="bg-[#5920BC] hover:bg-[#220c48] flex gap-4 px-6 py-3 rounded-[3px] text-white">
                    <img src="../assets/images/logo/User.svg" alt="">
                    <p class="">Sign up</p>
                </nuxt-link>
                <!-- <div v-if="signedIn == true"></div>
            <div v-if="signedIn == false" class="flex items-center">
            <nuxt-link to="/signin" class="mr-8 text-[#5920BC] hover:text-[#220c48]">Sign In</nuxt-link>
                        <nuxt-link to="/signup" class="bg-[#5920BC] hover:bg-[#220c48] flex gap-4 px-6 py-3 rounded-[3px] text-white">
                            <img src="../assets/images/logo/User.svg" alt="">
                            <p class="">Sign up</p></nuxt-link>

            </div> -->

            </div>
        </div>
    </header>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name: "Header",
    props: {
        signedInProp: Boolean,
    },
    data() {
        return {
            signedIn: this.$store.state.auth.loggedIn,
        }
    },
    methods: {
        ...mapGetters('headerstore', ['getState'])
    },

    computed: {
        headerstate() {
            try {
                 if (this.$store.state.auth.loggedIn==true) {
                this.signedIn=true
            }
            else {
                this.signedIn=false
            }
            }
            catch (e) {
                this.signedIn=false
            }
        //    asda
            return this.signedIn
        }
    },
    mounted() {
        console.log( this.signedIn);
    },


}
</script>

<style>
</style>