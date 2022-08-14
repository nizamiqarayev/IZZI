<template>
    <div>
        <div class="flex items-center"><img src="../../assets/images/headerpfp/Oval.svg" alt="">
            <div>
                <h3>{{ taskerdata.user.first_name }} {{ taskerdata.user.last_name }}</h3>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
    props: {
        taskerdata: Object,
    },
    mounted() {
        console.log("taskerdata");
        console.log('====================================');
        console.log(this.taskerdata);
        console.log('====================================');
    },
}
</script>

<style>
</style>