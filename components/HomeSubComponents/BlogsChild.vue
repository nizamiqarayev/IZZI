<template>
    <div class="font-quicksand  shadow-md max-w-md h-[31.25rem]">
        <img :src="data.coverPhoto" class="object-cover h-52" alt="">
        <div class="p-3 flex flex-col justify-between h-72">
            <div class="h-32">
                <p class="mt-4 text-xl font-bold text-[#222222]">{{ data.title }}</p>
                <p
                    class="mt-3 text-[#222222] text-bold  line-clamp-5 ">
                    {{ data.description }}</p>

            </div>
            <div class="flex items-center justify-between mt-4">
                <div class="flex gap-4 items-center justify-between">
                    <img src="../../assets/images/homeimages/propfp.svg" class="h-6 w-6" alt="">
                    <p>{{ data.author.first_name }} {{ data.author.last_name }}</p>
                </div>
                <div>
                    <p>{{ getMonth() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object

    },
    data() {
        return {
            date: new Date(this.data.createdAt)
        }
    },
    created() {
    },
    methods: {
        getMonth() {


            let month

            switch (this.date.getMonth()) {
                case (0):
                    month = "JAN";
                    break;
                case (1):
                    month = "FEB";
                    break;
                case (2):
                    month = "MAR";
                    break;
                case (3):
                    month = "APR";
                    break;
                case (4):
                    month = "MAY";
                    break;
                case (5):
                    month = "JUN";
                    break;
                case (6):
                    month = "JUL";
                    break;
                case (7):
                    month = "AUG";
                    break;
                case (8):
                    month = "SEP";
                    break;
                case (9):
                    month = "OCT";
                    break;
                case (10):
                    month = "NOV";
                    break;
                case (11):
                    month = "DEC";
                    break;
            }
            return this.date.getDate() + " " + month + " " + this.date.getFullYear()


        },
        getDay() {
            var month = this.date.getDate();
            return month < 10 ? '0' + month : '' + month;

        },

    },

}
</script>

<style>
</style>