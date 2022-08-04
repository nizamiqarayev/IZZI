<template>
    <main class="rounded-[5px] bg-signInAndUpBg w-full min-h-[70vh] bg-no-repeat flex items-center justify-center">
        <div class="font-quicksand rounded-md mx-auto px-8 py-6 border-[1px] border-[#E4E4E4] bg-white">
            <h2 class="whitespace-nowrap mb-7 font-quicksand font-bold text-[1.875rem] text-[#5920BC]">Sign Up</h2>
            <form action="">
                <div class="flex flex-col w-full mt-4">
                    <label for="E-mail">Email address</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" placeholder="elonmusk@gmail.com" type="text">
                </div>
                <div class="flex flex-col w-full mt-4">
                    <label for="Password">Password</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]" placeholder="12345678" type="password">
                </div>
                <div class="flex flex-col w-full mt-4">
                    <label for="">Confirm Password</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]" placeholder="12345678" type="password">
                </div>
            </form>
            <div class="bg-[#5920BC] rounded-lg flex justify-center items-center gap-1 py-3 px-20 my-6 mx-16">
                <button class="text-base text-white" type="submit">Sing Up</button>
                <img src="../assets/images/signInAndUpImages/arrowright.svg" alt=""></img>
            </div>
        </div>
    </main>
</template>

<script>

export default{

    name:'Signupping',
    data(){
        return{

        }
    },
    methods:{
        password(){
            
        }
    }
}
</script>