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

                <div>
                    <input id="loginPW" ref="loginPW" @focus="pwplaceholderhidden = !pwplaceholderhidden" @blur="pwplaceholderhidden = !pwplaceholderhidden"
                        :type="pwhidden ? 'password' : 'text'" class="mt-3 w-full z-10 pl-6 h-12 flex items-center border border-[#C7C9CB]"
                         v-model="inputPW" :placeholder="pwplaceholdertext"  :class="pwhidden ? 'tracking-widest text-3xl' : ''" />
                    <div class="flex w-full justify-end relative bottom-[33px] items-center">
                        <!-- <div @click="pwfocusfixer()">

                            <div class="flex gap-2 pl-6" :class="pwplaceholderhidden ? 'invisible' : 'visible'">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                                <img class="hover:cursor-text" src="../assets/images/signInAndUpImages/hiddenpw.svg"
                                    alt="">
                            </div>
                        </div> -->
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
            pwhidden: true,
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