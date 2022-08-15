<template>
    <div class="p-2">
        <div class="flex items-center"><img src="../../assets/images/headerpfp/Oval.svg" alt="">
            <div>
                <h3>{{ taskerdata.user.first_name }} {{ taskerdata.user.last_name }}</h3>
                <div v-html="ratingdisplay" class="flex"></div>
            </div>
        </div>
        <div>{{ taskerdata.bio }}</div>
        <div class="py-4 flex justify-between">
            <nuxt-link to="#">view profile</nuxt-link>
            <p v-show="this.workPrice!=null">{{pricecalculation}}<span v-if="pricetype=='hourlyPrice'">$/hour</span>
            <span v-if="pricetype=='fixedPrice'">$</span>
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
        console.log(this.taskerdata);

    },
    computed: {
        pricecalculation() {
            if (this.selected) {
                if (this.pricetype=='hourlyPrice') {
                    return this.workPrice*this.hoursofwork
                }
                
            }
            else {
                return this.workPrice
            }
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