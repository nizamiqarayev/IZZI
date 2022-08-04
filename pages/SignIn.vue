<template>
    <main class="rounded-[5px] bg-signInAndUpBg w-full  bg-no-repeat flex items-center justify-center">
        <div class="font-quicksand mx-[29.1875rem] mt-36 mb-48 p-8 h-fit bg-white border border-solid border-[#E4E4E4]">
            <h2 class="mr-80 whitespace-nowrap mb-7 font-quicksand font-bold text-[1.875rem] text-[#5920BC]">Sign In</h2>
            <form>
                <label for="loginEmail" class="">Email address</label>
                <input id="loginEmail" type="email" placeholder="elonmusk@gmail.com"
                    class="mt-3 w-full pl-6 h-12 border border-[#C7C9CB]" v-model="inputEmail" />
                <label for="loginPW" class="flex justify-between mt-4">
                    <p>Password</p>
                    <p class="text-[#5920BC]">Forgot password?</p>
                </label>

                <div class="flex flex-col items-end relative">
                    <input id="loginPW" ref="loginPW" :type="pwhidden ? 'text' : 'password'" 
                        class="mt-3 w-full pl-6 h-12 flex items-center border border-[#C7C9CB]
                         placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                         v-model="inputPW" />
                    <div class="flex justify-end relative bottom-[33px] items-center">
                        <div class="mr-4">
                            <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == true"><img
                                    src="../assets/images/signInAndUpImages/eyeclosed.svg" alt=""></div>
                            <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == false"><img
                                    src="../assets/images/signInAndUpImages/eyeopen.svg" alt=""></div>
                        </div>

                    </div>
                    


                </div>
                <div class="flex justify-center items-center">
                <button class="shadow-sm rounded-[4px] flex items-center justify-center bg-[#5920BC] text-white py-3 px-28">Sign in <img src="../assets/images/signInAndUpImages/arrowright.svg" alt=""></button>

                </div>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            pwhidden: false,
            pwplaceholdertext: "",
            pwplaceholderhidden:false,
            inputEmail: "",
            inputPW: ""
        }
    },
    computed: {
    },
    methods: {
        pwfocusfixer() {
            console.log('====================================');
            console.log(this.$refs.loginPW);
            console.log('====================================');
            this.$refs.loginPW.focus()
        },
    },

}
</script>

<style>
</style>