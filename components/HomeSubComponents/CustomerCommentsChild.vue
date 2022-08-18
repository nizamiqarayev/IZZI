<template>
    <div class="flex-1 max-w-md flex flex-col p-3 h-44 items-start border rounded-md">
        <div class="flex w-full">
            <div class="">
                <img src="../../assets/images/homeimages/propfp.svg" alt="">
            </div>
            <div class="w-full pb-2 px-2">
                <div class="flex w-full justify-between">
                    <p class=" ">{{ data.title }}</p>
                </div>
                <div class="flex items-center justify-start">
                    <img src="../../assets/images/homeimages/Vector.svg" alt="">
                    <img src="../../assets/images/homeimages/Vector.svg" alt="">
                    <img src="../../assets/images/homeimages/Vector.svg" alt="">
                    <img src="../../assets/images/homeimages/Vector.svg" alt="">
                    <img src="../../assets/images/homeimages/Vector.svg" alt="">
                </div>
            </div>
        </div>
        <div class="w-full">
            <p class="w-full h-20 overflow-y-ellipsis overflow-x-hidden text-ellipsis">{{data.description}}</p>
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