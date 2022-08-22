<template>
    <div class="lg:flex-1 lg:w-full flex flex-col p-3 items-start border rounded-md">
        <div class="flex w-full">
            <div class="">
                <img v-if="tasker.user.profilePhoto" :src="tasker.user.profilePhoto" class="h-14 w-14 rounded-full object-top object-cover" alt="">
                    <img v-if="!tasker.user.profilePhoto" class="h-14 w-14 rounded-full shrink-0 " src="../../assets/images/homeimages/propfp.svg" alt="">
            </div>
            <div class="w-full pl-2">
                <div class="flex w-full justify-between">
                    <p>{{ tasker.user.first_name }} {{ tasker.user.last_name }}</p>
                    <img src="../../assets/images/homeimages/Verified.svg" alt="">
                </div>
                <div class="flex items-center justify-start">
                    <svg v-for="index in parseInt(this.tasker.rating)" :key="index + 500" width="12" height="12"
                        viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.45665 1.0996C5.67906 0.649501 6.32094 0.649501 6.54335 1.0996L7.71305 3.4668C7.80131 3.64541 7.9717 3.76924 8.16883 3.79802L10.7845 4.17994C11.2816 4.25252 11.4797 4.86368 11.1196 5.21402L9.22867 7.05385C9.08553 7.19312 9.0202 7.39396 9.05399 7.59079L9.50024 10.1899C9.58523 10.6849 9.06572 11.0626 8.62106 10.829L6.28186 9.60012C6.10539 9.50742 5.89461 9.50741 5.71814 9.60012L3.37894 10.829C2.93428 11.0626 2.41477 10.6849 2.49976 10.1899L2.94601 7.59079C2.97981 7.39396 2.91447 7.19312 2.77133 7.05385L0.880399 5.21402C0.520326 4.86368 0.71836 4.25252 1.21548 4.17994L3.83117 3.79802C4.0283 3.76924 4.19869 3.64541 4.28695 3.4668L5.45665 1.0996Z"
                            fill="#FFC107" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full mt-2 mb-4 ">
            <p class="w-full">{{ tasker.bio }}
            </p>
        </div>
        <div class="w-7/12 mb-4  self-center flex items-center justify-center gap-4">
            <hr class="w-full border-[#5920BC]" />
            <p class="whitespace-nowrap">Top Skills</p>
            <hr class="w-full border-[#5920BC]" />

        </div>

        <div class="flex gap-y-2 w-full gap-x-5">
            {{ reset_array() }}
            <div v-for="(skill, index) in tasker.skills" :key="skill.id"
                v-show="subService_unique.includes(skill.subService.title) == false"
                class="bg-[#5920BC0D] w-full flex justify-around py-2 px-2 border-[1px] border-[#5920BC] rounded">
                <p class="text-sm">{{ skill.subService.title }}</p>
                <p class="text-sm">{{ skill.price }} ₼</p>
                {{ subServiceunique(skill, index) }}
            </div>
        </div>
        <button class="w-full py-4 mt-9 border text-[#5929BC] hover:text-white transition-all duration-200 hover:bg-[#5929BC]">Book Now</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subService_unique: [],
        }
    },
    props: {
        tasker: Object
    },
    created() {
    },
    methods: {
        reset_array() {
            this.subService_unique = []
        },
        subServiceunique(skill, index) {
            this.subService_unique.push(skill.subService.title)
        },
    }
}
</script>

<style>
</style>