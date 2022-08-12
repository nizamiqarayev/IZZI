<template>
    <div class="min-h-[100vh] flex mt-5 font-quicksand items-center justify-center">
        <main class="flex items-center justify-center">
            <div class="border-[1px] mx-auto  border-[#E4E4E4] p-[42px] rounded flex-col">
                <p class="text-3xl font-bold pr-8">Set New Password</p>
                <form action="" class="">
                    <div class="flex flex-col gap-2 mt-6 mb-4 w-full">
                        <label for="Password">New Password</label>
                        <input type="password" class="w-full rounded border-[1px] border-[#E4E4E4] px-6 py-[12px]">
                    </div>
                    <div class="flex flex-col gap-2 mt-6 mb-8 w-full">
                        <label for="Password">Confirm New Password</label>
                        <input type="password" class="w-full rounded border-[1px] border-[#E4E4E4] px-6 py-[12px]">
                    </div>
                    <button class="w-full rounded py-[13px] bg-[#5920BC] text-white">Confirm</button>
                </form>
            </div>
        </main>
    </div>

</template>

<script>

export default {
    name:"setpassword",
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>