<template>
    <div class="bg-signInAndUpBg bg-top bg-no-repeat flex justify-center items-center relative font-quicksand">
        <main class="rounded-[5px] min-h-[100vh] w-full mt-[36px] mb-[20vh] relative flex items-center justify-center">
            <div class="font-quicksand rounded-md mx-auto px-8 py-6 border-[1px] border-[#E4E4E4] bg-white">
                <h2 class="whitespace-nowrap mb-7 font-quicksand font-bold text-[1.875rem] text-[#5920BC]">Sign Up</h2>
                <form action="">
                    <div class="flex flex-col w-full mt-4">
                        <label for="F_name">First Name</label>
                        <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" placeholder="Firstname" type="text">
                    </div>
                    <div class="flex flex-col w-full mt-4">
                        <label for="L_name">Last Name</label>
                        <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" placeholder="Lastname" type="text">
                    </div>
                    <div class="flex flex-col w-full mt-4">
                        <label for="E-mail">Email address</label>
                        <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" placeholder="elonmusk@gmail.com"
                            type="email">
                    </div>
                    <div class="flex flex-col w-full mt-4 relative">
                        <label for="Password">Password</label>
                        <div class="h-fit flex flex-col items-end">
                            <input v-model="pwfirst" @keypress="pwvalid = true" :class="pwvalid ? '':'border-red-500 border-2'"
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
                    <div class="flex flex-col w-full  relative">
                        <label for="Confirm Password">Confirm Password</label>
                        <div class="h-12 flex flex-col items-end">
                            <input v-model="pwconfirm" @keypress="pwvalid = true" :class="pwvalid ? '':'border-red-500 border-2'"
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
                        <button @click="passwordChecker" class="text-base bg-[#5920BC] gap-1 py-3 px-20 my-6 mx-16 rounded-lg  flex items-center gap-2 text-white"  type="button">Sing Up<img
                                src="../assets/images/signInAndUpImages/arrowright.svg" alt=""></button>
                </form>
            </div>
        </main>
    </div>
</template>

<script>

export default {

    name: 'ModuleSignupping',
    data() {
        return {
            pwhidden: false,
            pwfirst: "",
            pwconfirm: "",
            pwvalid: true
        }
    },
    methods: {
        passwordChecker() {
            if (this.pwfirst == this.pwconfirm && this.pwfirst.length>7){
                    console.log("amogus");

            } else {
                this.pwvalid = false
            }
        }
    }

}
</script>