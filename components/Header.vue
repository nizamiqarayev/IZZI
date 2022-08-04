<template>
    <header class="w-full flex justify-center items-center font-quicksand shadow-inner fixed bg-white z-40 h-20 ">
        <div class="w-full px-56 py-4 flex justify-between">
            <div class="flex ">
                <img src="../assets/images/logo/logo .svg" class="mr-12 hover:cursor-pointer " alt="">
                <nav class="flex items-center gap-8 text-sm">
                    <p class="hover:text-[#5920BC] hover: hover:cursor-pointer whitespace-nowrap">My Orders</p>
                    <p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Services</p>
                    <p class="hover:text-[#5920BC] hover:cursor-pointer whitespace-nowrap">Help</p>
                </nav>
            </div>
            <div v-if="signedIn == true"></div>
            <div v-if="signedIn == false" class="flex items-center">
            <nuxt-link to="/signin" class="mr-8 text-[#5920BC] hover:text-[#220c48]">Sign In</nuxt-link>
                        <nuxt-link to="/signup" class="bg-[#5920BC] hover:bg-[#220c48] flex gap-4 px-6 py-3 rounded-[3px] text-white">
                            <img src="../assets/images/logo/User.svg" alt="">
                            <p class="">Sign up</p></nuxt-link>

            </div>

        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        signedInProp:Boolean,
    },
    data() {
        return {
            signedIn:false,
        }
    },

}
</script>

<style>
</style>