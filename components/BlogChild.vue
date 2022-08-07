<template>
    <section class="w-full bg-main font-quicksand bg-no-repeat bg-contain bg-left-top">
        <main class="max-w-[65rem] mx-auto py-16 mb-32 flex flex-col gap-8">
            <div class="flex-1 w-full">
                <img class="w-full" src="../assets/images/image 1410.jpg" alt="">
            </div>
            <div class="flex gap-8">
            <div class="w-9/12 space-y-6">
                <p class="font-bold text-2xl">My Most-Worn Handbags At Every Budget</p>
                <div class="flex flex-1 items-center w-3/5 text-sm justify-between mt-4">
                            <div class="flex items-center gap-4 justify-between">
                                <img src="../assets/images/homeimages/propfp.svg" class="h-6 w-6" alt="">
                                <p>Elon Musk</p>
                            </div>
                            <div>
                                <p>06 SEP 2021</p>
                            </div>
                            <div>
                                 <p>789 views</p>
                            </div>
                        </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br><br>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br><br>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br><br>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="flex w-3/12 flex-col gap-8">
                <div class=" shadow-md" v-for="item in 2">
                    <img src="../assets/images/homeimages/Rectangle 936.svg" alt="">
                    <div class="p-3">
                        <p class="mt-4 text-base font-bold text-[#222222]">My Most-Worn Handbags At Every Budget</p>
                        <p class="mt-3 text-[#222222] text-xs text-bold">I love splurging on some amazing designer bags but also finding
                            cute I love splurging on…</p>
                        <div class="flex flex-1 items-center text-xs justify-between mt-4">
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
        </main>
    </section>
</template>

<script>
export default{


}
</script>