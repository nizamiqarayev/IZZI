<template>
    <header class="w-full flex justify-center items-center">
        <div class="w-full px-56 flex justify-between">
            <div class="flex ">
                <img src="../assets/logo .svg" alt="">
                <nav class="flex">
                    <p>My Orders</p>
                    <p>Services</p>
                    <p>Help</p>
                </nav>
            </div>
            <div v-if="signedIn == true"></div>
            <div v-if="signedIn == false" class="flex">
            <nuxt-link to="/signin" class="mr-8">Sign In</nuxt-link>
                        <nuxt-link to="/signin" class="bg-[#5920BC]">
                            <img src="../assets/User.svg" alt="">
                            <p>Sign In</p></nuxt-link>

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