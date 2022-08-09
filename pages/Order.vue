<template>
    <section class="w-full font-quicksand bg-main flex gap-10">
        <main class="max-w-[65rem] mx-auto flex items-center">
            <div class="w-full flex-1 flex flex-col p-6 bg-white border-[1px] rounded-md border-[#C7C9CB1F]">
                <p class="font-bold">Orders</p>
                <div @click="selectedMenu = 1" :class="selectedMenu == 1 ? 'border-[#5920BC]' : ''"
                    class="hover:cursor-pointer hover:border-[#5920BC] py-4 border-b-[1px] ">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Other.svg" alt=""><span>All Services</span>
                    </p>
                </div>
                <div @click="selectedMenu = 2" :class="selectedMenu == 2 ? 'border-[#5920BC]' : ''"
                    class="hover:cursor-pointer hover:border-[#5920BC] py-4 border-b-[1px]">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/CheckedOrders.svg" alt=""><span>Completed</span>
                    </p>
                </div>
                <div @click="selectedMenu = 3" :class="selectedMenu == 3 ? 'border-[#5920BC]' : ''"
                    class="hover:cursor-pointer hover:border-[#5920BC] py-4 border-b-[1px]">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Close.svg" alt=""><span class="text-[#FF663A]">Cancelled</span>
                    </p>
                </div>
            </div>
            <div  class="bg-white ">
                
            </div>
        </main>
    </section>
</template>

<script>

export default {

    data() {
        return {
            selectedMenu: 1,
            range: {
                start:null,
                end: null
            }

        }
    },
    
   
    methods:{
    
    }
}
</script>
