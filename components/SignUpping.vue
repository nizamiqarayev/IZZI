<template>
    <main class="rounded-[5px] bg-signInAndUpBg w-full  bg-no-repeat flex items-center justify-center">
        <div class="font-quicksand w-1/3 px-8 py-6 border-[1px] border-[#E4E4E4] bg-white">
            <h2 class="whitespace-nowrap mb-7 font-quicksand font-bold text-[1.875rem] text-[#5920BC]">Sign Up</h2>
            <form action="">
                <div class="flex flex-col w-full mt-4">
                    <label for="E-mail">Email address</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" placeholder="elonmusk@gmail.com" type="text">
                </div>
                <div class="flex flex-col w-full mt-4">
                    <label for="Password">Password</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6 placeholder:text- placeholder:text-[#C4C4C4]" placeholder="........" type="password">
                </div>
                <div class="flex flex-col w-full mt-4">
                    <label for="">Confirm Password</label>
                    <input class="mt-3 border-[#C7C9CB] border-[1px] py-3 px-6" type="text">
                </div>
            </form>
            <button type="submit"></button>
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