<template>
    <div>
        <div class="flex items-center"><img src="../../assets/images/headerpfp/Oval.svg" alt="">
            <div>
                <h3>{{ taskerdata.user.first_name }} {{ taskerdata.user.last_name }}</h3>
                <div v-html="ratingdisplay" class="flex"></div>
            </div>
        </div>
        <div>{{taskerdata.bio}}</div>
        <div class="py-4"><nuxt-link to="#">view profile</nuxt-link>
        <p></p></div>
    </div>
</template>

<script>
export default {
    props: {
        taskerdata: Object,
        dataforprice: Array
    },
    data() {
        return {
            ratingdisplay: "",
        }
    },
    mounted() {
        // console.log("taskerdata");
        // console.log('====================================');
        // console.log(this.taskerdata);
        // console.log(this.dataforprice);
        // console.log('====================================');
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