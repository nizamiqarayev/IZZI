<template>
    <div class=" flex flex-col justify-between" :class="selected ? 'max-w-[80%]' : 'w-full h-full'">
        <div class="flex items-center">
            <div>
                <img v-if="taskerdata.user.profilePhoto" :src="taskerdata.user.profilePhoto" class="h-14 w-14 rounded-full object-top object-cover" alt="">
                    <img v-if="!taskerdata.user.profilePhoto" class="h-14 w-14 rounded-full shrink-0 " src="../../assets/images/homeimages/propfp.svg" alt="">
            
            </div>
            <div class="ml-3">
                <h3>{{ taskerdata.user.first_name }} {{ taskerdata.user.last_name }}</h3>
                <div class="flex items-center gap-2">
                    <div class="flex">
                        <svg v-for="index in parseInt(this.taskerdata.rating)"
                            :key="index + Math.floor((Math.random() * 1000) + 1)" width="12" height="12"
                            viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.45665 1.0996C5.67906 0.649501 6.32094 0.649501 6.54335 1.0996L7.71305 3.4668C7.80131 3.64541 7.9717 3.76924 8.16883 3.79802L10.7845 4.17994C11.2816 4.25252 11.4797 4.86368 11.1196 5.21402L9.22867 7.05385C9.08553 7.19312 9.0202 7.39396 9.05399 7.59079L9.50024 10.1899C9.58523 10.6849 9.06572 11.0626 8.62106 10.829L6.28186 9.60012C6.10539 9.50742 5.89461 9.50741 5.71814 9.60012L3.37894 10.829C2.93428 11.0626 2.41477 10.6849 2.49976 10.1899L2.94601 7.59079C2.97981 7.39396 2.91447 7.19312 2.77133 7.05385L0.880399 5.21402C0.520326 4.86368 0.71836 4.25252 1.21548 4.17994L3.83117 3.79802C4.0283 3.76924 4.19869 3.64541 4.28695 3.4668L5.45665 1.0996Z"
                                fill="#FFC107" />
                        </svg>

                    </div>
                    <p class="text-[#FFC107]">{{ this.taskerdata.rating }}</p>
                    <p class="text-[#979797]">({{ this.taskerdata.completedTaskCount }})</p>
                </div>


                <!-- <div v-html="ratingdisplay" class="flex"></div> -->
            </div>
        </div>
        <div class="my-4 w-auto break-normal h-auto">
            <p class="">{{ taskerdata.bio }}</p>
        </div>
        <div class="max-w-full py-4 flex justify-between items-center">
            <nuxt-link to="#" class="whitespace-nowrap text-[#5920BC]">view profile</nuxt-link>
            <p v-show="this.workPrice != null">{{ pricecalculation }}<span class="whitespace-nowrap"
                    v-if="pricetype == 'hourlyPrice'">$ / per
                    hour</span>
                <span class="w-full" v-if="pricetype == 'fixedPrice'">$</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        taskerdata: Object,
        workPrice: Number,
        pricetype: String,
        hoursofwork: Number,
        selected: Boolean,
    },
    data() {
        return {
            ratingdisplay: "",
        }
    },
    watch: {
        taskerdata() {
            console.log("taskerdata");
            console.log('====================================');
            console.log(this.taskerdata);
        },
        workPrice() {
            console.log(this.workPrice);
            console.log('====================================');
        },
        pricetype() {
            console.log(this.pricetype);
            console.log('====================================');
        }
    },
    mounted() {
        console.log("taskerdata");
        console.log('====================================');
        console.log(this.taskerdata.rating);

    },
    computed: {
        pricecalculation() {
            return this.workPrice

            // if (this.selected) {
            //     if (this.pricetype == 'hourlyPrice') {
            //         return this.workPrice * this.hoursofwork
            //     }
            //     else {
            //         return this.workPrice

            //     }

            // }
            // else {
            // }
        }
    },


    methods: {
        rating() {
            for (let i = 0; i < 5; i++) {
                if (i <= parseInt(this.taskerdata.rating)) {
                    this.ratingdisplay += '<span class="fa fa-star" style="color:yellow;"></span>';
                } else {
                    this.ratingdisplay += '<span class="fa fa-star unchecked"></span>';
                }
            }
        },
    },
    created() {
        this.rating()

    },
}
</script>

<style>
</style>