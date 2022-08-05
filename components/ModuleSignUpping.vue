<template>
<div>
    <main class="rounded-[5px] bg-signInAndUpBg w-full min-h-[70vh] bg-no-repeat flex items-center justify-center">
        <div class="font-quicksand rounded-md mx-auto px-8 py-6 border-[1px] border-[#E4E4E4] bg-white">
            <h2 class="whitespace-nowrap mb-7 font-quicksand font-bold text-[1.875rem] text-[#5920BC]">Sign Up</h2>
            <form action="">
                <div class="flex flex-col w-full mt-4">
                    <label for="E-mail">Email address</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" placeholder="elonmusk@gmail.com" type="email">
                </div>
                <div class="flex flex-col w-full mt-4 relative">
                    <label for="Password">Password</label>
                    <div class="h-fit flex flex-col items-end">
                        <input class="mt-3 border-[#C7C9CB] w-full border-[1px] py-3 px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                         placeholder="12345678" type="password" :type="pwhidden ? 'text' : 'password'">
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
                        <input class="mt-3 border-[#C7C9CB] w-full border-[1px] py-3 px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]" 
                         placeholder="12345678" type="password" :type="cpwhidden ? 'text' : 'password'">
                        <div class="flex justify-end relative bottom-[33px] items-center">
                            <div class="mr-4">
                                <div class="" @click="cpwhidden = !cpwhidden" v-if="cpwhidden == true"><img
                                        src="../assets/images/signInAndUpImages/eyeclosed.svg" alt=""></div>
                                <div class="" @click="cpwhidden = !cpwhidden" v-if="cpwhidden == false"><img
                                        src="../assets/images/signInAndUpImages/eyeopen.svg" alt=""></div>
                            </div>
                        </div>
                    </div>
               </div>
            <div class="bg-[#5920BC] rounded-lg flex justify-center items-center gap-1 py-3 px-20 my-6 mx-16">
                <button class="text-base text-white" type="submit">Sing Up</button>
                <div class=" flex flex-1 items-center"><img src="../assets/images/signInAndUpImages/arrowright.svg" alt=""></div>
            </div>
            </form>
        </div>
    </main>
</div>
</template>

<script>

export default{

    name:'ModuleSignupping',
    data(){
        return{
        pwhidden:false,
        cpwhidden:false,
        }
    },
}
</script>