<template>
    <section class="bg-main font-quicksand bg-no-repeat bg-left-top bg-contain w-full">
        <main class="w-10/12 mx-auto py-40">
            <p class="text-[30px] font-bold ">All Pros</p>
            <div class="w-full pt-16">
                <div class="flex justify-between gap-14">
                    <div class="flex items-center border-[1px] bg-transparent border-[#E2E2E2] rounded relative w-3/5">
                        <label for="search">
                            <img class="absolute bottom-3 left-3 z-20 " src="../assets/images/search (3).svg" alt="">
                        </label>
                        <input type="text" class="relative bg-transparent px-10 py-2 z-10 w-full" id="search">
                    </div>
                    <div class="flex gap-8 w-2/5">
                        <div class="border-[1px] border-[#C7C9CB] w-full rounded">
                            <select class="hover:outline-none bg-transparent focus:outline-none px-6  py-2">
                            <option value="Rating" disabled selected hidden>Rating</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                            </select>
                        </div>
                        <div class="border-[1px] border-[#C7C9CB]  w-full rounded">
                            <select class="focus:outline-none bg-transparent hover:outline-none px-6 py-2">
                            <option value="Task count" disabled selected hidden>Task count</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="pt-9">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <p class="text-[#6F6F6F] font-bold">Services</p>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterCleaning = !filterCleaning"
                                        v-if="!filterCleaning" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterCleaning = !filterCleaning"
                                        v-if="filterCleaning" alt="">
                                    <p @click="filterCleaning = !filterCleaning">Cleaning</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterHomeRepair = !filterHomeRepair"
                                        v-if="!filterHomeRepair" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterHomeRepair = !filterHomeRepair"
                                        v-if="filterHomeRepair" alt="">
                                    <p @click="filterHomeRepair = !filterHomeRepair">Home Repair</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterBeauty = !filterBeauty"
                                        v-if="!filterBeauty" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterBeauty = !filterBeauty"
                                        v-if="filterBeauty" alt="">
                                    <p @click="filterBeauty = !filterBeauty">Beauty</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterBabysitter = !filterBabysitter"
                                        v-if="!filterBabysitter" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterBabysitter = !filterBabysitter"
                                        v-if="filterBabysitter" alt="">
                                    <p @click="filterBabysitter = !filterBabysitter">Babysitter</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterWindowCleaning = !filterWindowCleaning" v-if="!filterWindowCleaning" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterWindowCleaning = !filterWindowCleaning" v-if="filterWindowCleaning" alt="">
                                    <p @click="filterWindowCleaning=!filterWindowCleaning">Window cleaning</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterSpecialCare = !filterSpecialCare" v-if="!filterSpecialCare" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterSpecialCare = !filterSpecialCare" v-if="filterSpecialCare" alt="">
                                    <p @click="filterSpecialCare=!filterSpecialCare">Special Care</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <p class="text-[#6F6F6F] font-bold">By City</p>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterBaku = !filterBaku" v-if="!filterBaku" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterBaku = !filterBaku" v-if="filterBaku" alt="">
                                    <p @click="filterBaku=!filterBaku">Baku</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterSumgayit = !filterSumgayit" v-if="!filterSumgayit" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterSumgayit = !filterSumgayit" v-if="filterSumgayit" alt="">
                                    <p @click="filterSumgayit=!filterSumgayit">Sumgayit</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterQuba = !filterQuba" v-if="!filterQuba" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterQuba = !filterQuba" v-if="filterQuba" alt="">
                                    <p @click="filterQuba=!filterQuba">Quba</p>
                                </div>
                                <div class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filterSabirabad = !filterSabirabad" v-if="!filterSabirabad" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filterSabirabad = !filterSabirabad" v-if="filterSabirabad" alt="">
                                    <p @click="filterSabirabad=!filterSabirabad">Sabirabad</p>
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

export default {
    data() {
        return {

            filterCleaning: false,
            filterHomeRepair: false,
            filterBeauty: false,
            filterBabysitter: false,
            filterWindowCleaning: false,
            filterSpecialCare: false,
            filterBaku: false,
            filterSumgayit: false,
            filterQuba: false,
            filterSabirabad: false,
        }
    },
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>