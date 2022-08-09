<template>
    <section class="w-full font-quicksand bg-main flex h-96 gap-10">
        <main class="max-w-[65rem] mx-auto">
            <div class="w-full flex flex-col bg-white border-[1px] rounded-md border-[#C7C9CB1F]">
                <p class="font-bold pl-6 pt-6">Orders</p>
                <div @click="selectedMenu = 1" class="hover:cursor-pointer py-4 border-b-[1px] ">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Close.svg" alt=""><span>All Services</span>
                    </p>
                </div>
                <div @click="selectedMenu = 2" class="hover:cursor-pointer py-4 border-b-[1px]">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Checked.svg" alt=""><span>Completed</span>
                    </p>
                </div>
                <div @click="selectedMenu = 3" class="hover:cursor-pointer py-4 border-b-[1px]">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Other.svg" alt=""><span>Cancelled</span>
                    </p>
                </div>
            </div>
            <div>

            </div>
        </main>
    </section>
</template>

<script>
export default {

    data() {
        return {
            selectedMenu: 1,
        }
    },
}
</script>
