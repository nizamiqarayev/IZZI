<template>
    <main class="rounded-[5px] bg-signInAndUpBg w-full lg:bg-contain bg-no-repeat flex items-center justify-center">
        <div
            class="font-averta w-10/12 lg:w-fit text-sm lg:text-base mx-auto mt-36 mb-48 p-8 h-fit bg-white border border-solid border-[#E4E4E4]">
            <h2 class="mr-80 whitespace-nowrap mb-7 font-averta font-bold text-2xl lg:text-4xl text-[#5920BC]">Sign In
            </h2>
            <label for="loginEmail" class="">Email address</label>
            <input id="loginEmail" type="email" placeholder="elonmusk@gmail.com"
                class="mt-3 w-full pl-6 h-12 border border-[#C7C9CB]" v-model="inputEmail"
                :class="correct ? 'border-[#C7C9CB]' : 'border-red-600'" />
            <label for="loginPW" class="flex justify-between mt-4">
                <p>Password</p>
                <nuxt-link to="/resetpassword" class="text-[#5920BC]">Forgot password?</nuxt-link>
            </label>

            <div class="flex flex-col items-end relative">
                <input @change="correct = true" id="loginPW" ref="loginPW" :type="pwhidden ? 'text' : 'password'" class="mt-3 w-full pl-6 mb-3 h-12 flex items-center border border-[#C7C9CB]
                         placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]" v-model="inputPW"
                    placeholder="00000000" :class="correct ? 'border-[#C7C9CB]' : 'border-red-600'" />
                <div class="flex justify-end absolute top-[27px] items-center">
                    <div class="mr-4">
                        <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == true"><img
                                src="../assets/images/signInAndUpImages/eyeclosed.svg" alt=""></div>
                        <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == false"><img
                                src="../assets/images/signInAndUpImages/eyeopen.svg" alt=""></div>
                    </div>

                </div>

                <p v-show="correct == false" class="mb-3 text-red-600">Incorrect email or password</p>

            </div>
            <div class="flex justify-center items-center">
                <button @click="signin()"
                    class="shadow-sm rounded-[4px] flex items-center justify-center lg:gap-2 bg-[#5920BC] text-white py-3 px-11 lg:px-28">
                    <p>Sign
                        in</p> <img class="" src="../assets/images/signInAndUpImages/arrowright.svg" alt="">
                </button>

            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            pwhidden: false,
            pwplaceholdertext: "",
            pwplaceholderhidden: false,
            inputEmail: "",
            inputPW: "",
            correct: true,
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
        async signin() {
            const data = { 'email': this.inputEmail, 'password': this.inputPW }
            try {
                const response = await this.$auth.loginWith('local', { data: data })
                console.log(response);
                await this.$auth.$storage.setUniversal('email', response.data.email)
                await this.$auth.setUserToken(response.data.access, response.data.refresh)
            
            }
            catch (e) {
                this.correct = false
                console.log(e.response);
                console.log(this.$store.state.auth);
            }
        }
    },

}
</script>

<style>
</style>