<template>
    <header class="w-full flex justify-center items-center font-averta shadow-inner sticky bg-white z-40 h-20 ">
        <div class="w-10/12 px-4 py-4 flex justify-between">
            <div class="flex items-center">

                <nuxt-link to="/"> <img src="../assets/images/logo/logo .svg" class="mr-12 hover:cursor-pointer "
                        alt="">
                </nuxt-link>

                <nav class="hidden lg:flex lg:items-center lg:gap-8 lg:text-sm">
                    <nuxt-link v-if="this.$auth.$state.loggedIn" class="lg:hidden"
                        :to="this.$auth.$state.loggedIn == true ? '/orders' : '/signin'">
                        <p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Profile</p>
                    </nuxt-link>
                    <nuxt-link :to="this.$auth.$state.loggedIn == true ? '/orders' : '/signin'">
                        <p class="hover:text-[#5920BC] hover: hover:cursor-pointer whitespace-nowrap">My Orders</p>
                    </nuxt-link>

                    <nuxt-link to="/services">
                        <p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Services</p>
                    </nuxt-link>

                    <p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Help</p>
                </nav>
            </div>
            <div v-if="this.$auth.$state.loggedIn" class="hidden lg:block">
                <nuxt-link to="/Account">
                    <div class="flex items-center gap-3">
                        <img v-if="$auth.state.user.profilePhoto" :src="$auth.state.user.profilePhoto"
                            class="h-14 w-14 rounded-full object-top object-cover" alt="">
                        <img v-if="!$auth.state.user.profilePhoto" class="h-14 w-14" src="../assets/images/homeimages/propfp.svg" alt="">
                        <p
                            class="flex items-center hover:text-[#5920BC] h-8 px-3  rounded-md border border-transparent hover:border-gray-200 hover:shadow-inner ">
                            {{ this.$auth.$state.user.first_name }} {{ this.$auth.$state.user.last_name }}</p>
                    </div>
                </nuxt-link>
            </div>
            <div @click="menuButton = !menuButton" class="flex items-center lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5920BC"
                    class="block h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </div>
            <div v-if="this.$auth.$state.loggedIn == false" class="hidden lg:flex lg:items-center">
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
            <div :class="menuButton ? 'w-full opacity-100' : 'w-0 opacity-0'"
                class="fixed lg:hidden h-screen overflow-hidden top-20 transform transition-all duration-500 ease-out right-0 bg-white">
                <div v-if="this.$auth.$state.loggedIn"
                    class="w-full px-14 py-5 flex flex-col gap-7 border-b-2 border-b-[#e3dfdf]">
                    <div class="flex w-full gap-3 items-center ">
                        <div>
                            <img v-if="$auth.state.user.profilePhoto" :src="$auth.state.user.profilePhoto"
                                class="h-14 w-14 rounded-full object-top object-cover" alt="">
                            <img class="h-14 w-14 rounded-full" v-if="!$auth.state.user.profilePhoto" src="../assets/images/homeimages/propfp.svg"
                                alt="">
                        </div>
                        <div>
                            <p class="font-bold">{{ this.$auth.$state.user.first_name }} {{
                                    this.$auth.$state.user.last_name
                            }}</p>
                            <p class="">{{ this.$auth.$state.user.email }}</p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <nuxt-link to="/account">
                            <p @click="menuButtonclicker">Profile</p>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <p @click="logout()">Log out</p>
                        </nuxt-link>

                    </div>
                </div>
                <div v-if="this.$auth.$state.loggedIn == false"
                    class="w-full px-14 py-5 flex flex-col gap-7 border-b-2 border-b-[#e3dfdf]">

                    <div class="flex flex-col gap-3">
                        <nuxt-link to="/signin">
                            <p @click="menuButtonclicker">Sign in</p>
                        </nuxt-link>
                        <nuxt-link :to="`/signup`">
                            <p @click="menuButtonclicker">Sign up</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="w-full px-14 flex flex-col py-5 gap-3">
                    <nuxt-link :to="this.$auth.$state.loggedIn == true ? '/orders' : '/signin'">
                        <p @click="menuButtonclicker"
                            class="hover:text-[#5920BC] hover: hover:cursor-pointer whitespace-nowrap">My Orders</p>
                    </nuxt-link>

                    <nuxt-link to="/services">
                        <p @click="menuButtonclicker"
                            class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Services</p>
                    </nuxt-link>

                    <p @click="menuButtonclicker" class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">
                        Help</p>
                </div>
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
            menuButton: false,
        }
    },
    methods: {
        ...mapGetters('headerstore', ['getState']),
        menuButtonclicker() {
            this.menuButton = false
            console.log("menubutton", this.menuButton);
        },
        logout() {
            this.$auth.$state.loggedIn = false
            localStorage.clear()
            var cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    var p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    };
                    d.shift();
                }
            }

        }
    },

    computed: {
        headerstate() {
            try {
                if (this.$store.state.auth.loggedIn == true) {
                    this.signedIn = true
                }
                else {
                    this.signedIn = false
                }
            }
            catch (e) {
                this.signedIn = false
            }
            //    asda
            return this.signedIn
        }
    },
    mounted() {
        console.log(this.signedIn);
    },


}
</script>

<style>
</style>