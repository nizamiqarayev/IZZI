<template>
    <main class=" bg-signInAndUpBg w-full  bg-no-repeat flex items-center justify-center">
        <div class="mx-[29.1875rem] mt-28 mb-48 p-8 h-96 bg-white">
            <h2 class="mr-80">Sign In</h2>
            <form>
                <label for="loginEmail">Email address</label>
                <input id="loginEmail" type="email" placeholder="elonmusk@gmail.com"
                    class="w-full pl-6 h-12 border border-[#C7C9CB]" v-model="inputEmail" />
                <label for="loginPW" class="flex justify-between">
                    <p>Password</p>
                    <p>Forgot password?</p>
                </label>

                <div>
                    <input id="loginPW" ref="loginPW" @focus="pwplaceholderhidden = !pwplaceholderhidden" @blur="pwplaceholderhidden = !pwplaceholderhidden"
                        :type="pwhidden ? 'password' : 'text'" class="w-full z-10 pl-6 h-12 flex items-center border border-[#C7C9CB]"
                         v-model="inputPW" :placeholder="inputPW"  :class="pwhidden ? '' : ''" />
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

            </form>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            pwhidden: true,
            pwplaceholderhidden:false,
            inputEmail: "",
            inputPW: "",
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