<template>
    <div class="flex-1 max-w-md flex flex-col gap-y-6 p-6 bg-[#F9F8FF] items-start border rounded-md">
        <div class="flex w-full">
            <div class="">
                <img v-if="data.author.profilePhoto" :src="data.author.profilePhoto" class="h-14 w-14 rounded-full object-top object-cover" alt="">
                    <img v-if="!data.author.profilePhoto" src="../../assets/images/homeimages/propfp.svg" alt="">
            </div>
            <div class="w-full pb-2 px-2">
                <div class="flex w-full justify-between">
                    <p class=" ">{{ data.author.first_name }} {{ data.author.last_name }}</p>
                </div>
                <div class="flex items-center justify-start">
                    <svg v-for="index in parseInt(data.rating)"
                        :key="index + Math.floor((Math.random() * 1000) + 1)" width="12" height="12" viewBox="0 0 12 11"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.45665 1.0996C5.67906 0.649501 6.32094 0.649501 6.54335 1.0996L7.71305 3.4668C7.80131 3.64541 7.9717 3.76924 8.16883 3.79802L10.7845 4.17994C11.2816 4.25252 11.4797 4.86368 11.1196 5.21402L9.22867 7.05385C9.08553 7.19312 9.0202 7.39396 9.05399 7.59079L9.50024 10.1899C9.58523 10.6849 9.06572 11.0626 8.62106 10.829L6.28186 9.60012C6.10539 9.50742 5.89461 9.50741 5.71814 9.60012L3.37894 10.829C2.93428 11.0626 2.41477 10.6849 2.49976 10.1899L2.94601 7.59079C2.97981 7.39396 2.91447 7.19312 2.77133 7.05385L0.880399 5.21402C0.520326 4.86368 0.71836 4.25252 1.21548 4.17994L3.83117 3.79802C4.0283 3.76924 4.19869 3.64541 4.28695 3.4668L5.45665 1.0996Z"
                            fill="#FFC107" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full">
            <p class="w-full line-clamp-4">{{ data.text }}</p>
        </div>



    </div>
</template>

<script>
export default {
    props: {
        data: Object
    },
    created() {
        console.log('====================================');
        console.log(this.data);
        console.log('====================================');

    },

}
</script>

<style>
</style>