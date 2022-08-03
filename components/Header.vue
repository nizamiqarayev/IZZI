<template>
    <header class="w-full flex justify-center items-center font-quicksand">
        <div class="w-full px-56 py-4 flex justify-between">
            <div class="flex ">
                <img src="../assets/logo .svg" class="mr-12" alt="">
                <nav class="flex items-center gap-8 ">
                    <p class=" whitespace-nowrap">My Orders</p>
                    <p class=" whitespace-nowrap">Services</p>
                    <p class=" whitespace-nowrap">Help</p>
                </nav>
            </div>
            <div v-if="signedIn == true"></div>
            <div v-if="signedIn == false" class="flex items-center">
            <nuxt-link to="/signin" class="mr-8 text-[#5920BC]">Sign In</nuxt-link>
                        <nuxt-link to="/signin" class="bg-[#5920BC] flex gap-4 px-6 py-3 rounded-[3px] text-white">
                            <img src="../assets/User.svg" alt="">
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