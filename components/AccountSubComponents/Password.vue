<template>
    <section class="w-full bg-white px-8 font-quicksand  shadow-md">
        <div class="py-2 flex  justify-between border-b-2">
            <h2 class="text-2xl font-semibold">Change Password</h2>
        </div>
        <div>
            <form>
                <div class="flex items-center justify-between border-b mt-4 pb-4">
                    <label class="whitespace-nowrap">Enter current password</label>
                    <input
                        class=" mr-32 border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                        type="password">
                </div>
                <div class="flex justify-between items-center justify-between border-b mt-4 pb-4">
                    <label class="whitespace-nowrap">Enter new password</label>
                    <input
                        class=" mr-32 border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                        type="password">
                </div>
                <div class="flex justify-between items-center justify-between border-b mt-4 pb-4">
                    <label class="whitespace-nowrap">Confirm new password</label>
                    <input
                        class=" mr-32 border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                        type="password">
                </div>
                <div class="flex items-center justify-end gap-4 py-4">
                    <button class="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Cancel</button>
                    <button class="py-2 px-4 border bg-[#5920BC] text-white border-gray-300 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
</style>