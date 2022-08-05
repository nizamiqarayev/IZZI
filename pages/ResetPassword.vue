<template>
    <div class="min-h-[100vh] font-quicksand flex flex-col gap-5 items-center justify-center">
        <main class="flex items-center justify-center">
            <div class="border-[1px] mx-auto  border-[#E4E4E4] p-[42px] rounded flex-col">
                <p class="text-3xl font-bold pr-20">Reset Password</p>
                <form action="" class="">
                    <div class="flex flex-col gap-2 mt-6 mb-8 w-full">
                        <label for="Email">Email address</label>
                        <input type="email" class="w-full rounded border-[1px] border-[#E4E4E4] px-6 py-[12px]" placeholder="elonmusk@gmail.com">
                    </div>
                    <button class="w-full rounded py-[13px] bg-[#5920BC] text-white">Send link</button>
                </form>
            </div>
        </main>
        <p>Do you have an account? <span class="cursor-pointer text-[#5920BC]">Sign in</span></p>
    </div>

</template>

<script>

export default {
    name:"reset",

}
</script>