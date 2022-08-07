<template>
    <section class="w-full bg-main font-quicksand bg-no-repeat bg-contain bg-left-top">
        <div class="max-w-[65rem] mx-auto ">
            <div class="w-full py-20">
                <p class="font-bold text-3xl mb-8">All Blogs</p>
                <div class="grid grid-cols-3 gap-4">
                    <div class=" shadow-md" v-for="item in 8">
                        <img src="../assets/images/homeimages/Rectangle 936.svg" alt="">
                        <div class="p-3">
                            <p class="mt-4 text-xl font-bold text-[#222222]">My Most-Worn Handbags At Every Budget</p>
                            <p class="mt-3 text-[#222222] text-sm text-bold">I love splurging on some amazing designer bags but also finding
                                cute I love splurging on…</p>
                            <div class="flex items-center justify-between mt-4">
                                <div class="flex items-center gap-4 justify-between">
                                    <img src="../assets/images/homeimages/propfp.svg" class="h-6 w-6" alt="">
                                    <p>Elon Musk</p>
                                </div>
                                <div>
                                    <p>06 SEP 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="../assets/images/logo/Frame 2.svg" alt="">
        </div>
    </section>
</template>

<script>
export default{
    name:'Blogmain'
}
</script>