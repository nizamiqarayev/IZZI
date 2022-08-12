<template>
    <section v-if="subblogs" class="w-full bg-main font-quicksand bg-no-repeat bg-contain bg-left-top">
        <main class="max-w-[65rem] mx-auto py-16 mb-32 flex flex-col gap-8">
            <div class="flex-1 w-full">
                <img class="w-full" src="../assets/images/image 1410.jpg" alt="">
            </div>
            <div class="flex gap-8">
            <div class="w-9/12 space-y-6">
                <p class="font-bold text-2xl">{{message(subblogs.data)}}}</p>
                <div class="flex flex-1 items-center w-3/5 text-sm justify-between mt-4">
                            <div class="flex items-center gap-4 justify-between">
                                <img src="../assets/images/homeimages/propfp.svg" class="h-6 w-6" alt="">
                                <!-- <p>{{subblogs.author}} {{subblogs.author}}</p> -->
                            </div>
                            <div>
                                <!-- <p>{{date(subblogs.createdAt)}}</p> -->
                            </div>
                            <div>
                                 <p>789 views</p>
                            </div>
                        </div>
                <!-- <p>{{subblogs[0].subblog[0].text}}</p> -->
            </div>
            <div class="flex w-3/12 flex-col gap-8">
                <div class=" shadow-md" >
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
    data(){
        return{
            subblogs:{}
        }
    },

    created() {
        this.subblogs = this.$axios.get("blogs/"+this.$route.query.blogid+'/')
        console.log('this.subblogs',this.subblogs);
    },
    methods:{
        message(data){
            console.log(data);
        },
        date(date) {
            let month
            const new_date = new Date(date);
            switch (new_date.getMonth()) {
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
            return new_date.getDate() + " " + month + " " + new_date.getFullYear()

        },
    }
}
</script>