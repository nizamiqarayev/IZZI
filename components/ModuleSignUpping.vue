<template>
    <div
        class="bg-signInAndUpBg bg-top bg-no-repeat lg:bg-contain flex justify-center items-center relative font-averta">
        <main class="rounded-[5px] min-h-[100vh] w-full mt-[36px] mb-[20vh] relative flex items-center justify-center">
            <div
                class="rounded-md lg:w-4/12 w-9/12 mx-auto px-8 text-sm lg:text-base py-6 border-[1px] border-[#E4E4E4] bg-white">
                <h2 class="whitespace-nowrap mb-7 font-averta font-bold text-[1.875rem] text-[#5920BC]">Sign Up</h2>
                <form action="">
                    <div class="flex flex-col w-full mt-2 lg:mt-4">
                        <label for="F_name">First Name</label>
                        <input v-model="f_name" class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6"
                            placeholder="Firstname" type="text">
                    </div>
                    <div class="flex flex-col w-full mt-2 lg:mt-4">
                        <label for="L_name">Last Name</label>
                        <input v-model="l_name" class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6"
                            placeholder="Lastname" type="text">
                    </div>
                    <div class="flex flex-col w-full mt-2 lg:mt-4">
                        <label for="E-mail">Email address</label>
                        <input v-model="email" class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6"
                            :class="emailtrue ? '' : 'border-red-500 border-2'" placeholder="elonmusk@gmail.com"
                            type="email">
                        <span class="text-red-500" v-if="msg.email">*{{ msg.email }}</span>

                    </div>
                    <div class="flex flex-col w-full mt-2 lg:mt-4 relative">
                        <label for="Password">Password</label>
                        <div class="h-fit flex flex-col items-end">
                            <input v-model="pwfirst" @keypress="pwvalid = true"
                                :class="pwvalid ? '' : 'border-red-500 border-2'"
                                class="mt-3 border-[#C7C9CB] w-full border-[1px] py-3 px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                                placeholder="12345678" :type="pwhidden ? 'text' : 'password'">
                            <password-meter class="w-full" :password="pwfirst" @score="onScore" />

                            <div class="flex justify-end relative bottom-[2.9rem] items-center">
                                <div class="mr-4">
                                    <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == true"><img
                                            src="../assets/images/signInAndUpImages/eyeclosed.svg" alt=""></div>
                                    <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == false"><img
                                            src="../assets/images/signInAndUpImages/eyeopen.svg" alt=""></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="flex flex-col w-full  relative">
                        <label for="Confirm Password">Confirm Password</label>
                        <div class="h-12 flex flex-col items-end">
                            <input v-model="pwconfirm" @keypress="pwvalid = true"
                                :class="pwvalid ? '' : 'border-red-500 border-2'"
                                class="mt-3 border-[#C7C9CB] w-full border-[1px] py-3 px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                                placeholder="12345678" :type="pwhidden ? 'text' : 'password'">
                            <div class="flex justify-end relative bottom-[33px] items-center">
                                <div class="mr-4">
                                    <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == true"><img
                                            src="../assets/images/signInAndUpImages/eyeclosed.svg" alt=""></div>
                                    <div class="" @click="pwhidden = !pwhidden" v-if="pwhidden == false"><img
                                            src="../assets/images/signInAndUpImages/eyeopen.svg" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button @click="passwordChecker"
                        class="text-base bg-[#5920BC] py-3 px-10 justify-center my-6 lg:mx-auto lg:w-7/12 w-full rounded-lg  flex items-center gap-2 text-white"
                        type="button">Sign Up<img src="../assets/images/signInAndUpImages/arrowright.svg"
                            alt=""></button>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import passwordMeter from "vue-simple-password-meter";

export default {
    components: { passwordMeter },

    name: 'ModuleSignupping',
    data() {
        return {
            pwhidden: false,
            f_name: "",
            l_name: "",
            email: "",
            pwfirst: "",
            pwconfirm: "",

            msg: [],
            pwStrength: 0,
            emailtrue: true,
            pwvalid: true
        }
    },
    watch: {
        email(value) {
            this.email = value;
            this.validateEmail(value);
        }
    },
    methods: {
        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.emailtrue=true
                this.msg['email'] = '';
            } else {
                this.emailtrue = false
                this.msg['email'] = 'Please enter a valid email address';
            }
        },
        onScore({ score, strength }) {
            this.pwStrength = score
            console.log(score); // from 0 to 4
            console.log(strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure' 
            this.score = score;
        },
        async passwordChecker() {
            if (this.pwfirst == this.pwconfirm && this.pwStrength >= 3 && this.emailtrue == true) {
                const data = { 'first_name': this.f_name, 'last_name': this.l_name, 'email': this.email, 'password': this.pwfirst }
                try {
                    const response = await this.$axios.post('auth/register/', data)
                    console.log(response);
                    if (response.statusText == 'Created') {
                        this.$router.push('signin')
                    }
                }
                catch (e) {
                    if (e.response.status == 400) {
                        this.pwvalid = false
                    }

                }


            } else {
                this.pwvalid = false
            }
        }
    }

}
</script>