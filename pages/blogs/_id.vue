<template>
    <section class="w-full bg-main font-quicksand bg-no-repeat bg-contain bg-left-top">
        <main class="max-w-[65rem] mx-auto py-16 mb-32 flex flex-col gap-8">
            <div class="flex-1 w-full">
                <img class="w-full" :src="subblogs.coverPhoto" alt="">
            </div>
            <div class="flex gap-8">
                <div class="w-9/12 space-y-6">
                    <p class="font-bold text-2xl">{{ subblogs.title }} </p>
                    <div class="flex flex-1 items-center w-3/5 text-sm justify-between mt-4">
                        <div class="flex items-center gap-4 justify-between">
                            <img :src="subblogs.author.profilePhoto" class="h-6 w-6" alt="">
                            <p>{{ subblogs.author.first_name }} {{ subblogs.author.last_name }}</p>
                        </div>
                        <div>
                            <p>{{ date(subblogs.createdAt) }}</p>
                        </div>
                        <div>
                            <p>789 views</p>
                        </div>
                    </div>
                    <p>{{ subblogs.subBlogs[0].text }}</p>
                </div>
                <div class="flex w-3/12 flex-col gap-8">
                    <div class=" shadow-md" v-for="(blog, index) in blogs.data" :key="blog.id">
                        <div v-if="index < 3 && blog.id != params.id">
                            <nuxt-link :to="`${blog.id}`">
                                <img class="object-cover" :src="blog.coverPhoto" alt="">
                                <div class="p-3">
                                    <p class="mt-4 text-base font-bold text-[#222222]">{{ blog.title }}
                                    </p>
                                    <p class="mt-3 text-[#222222] h-16 truncate whitespace-normal text-xs text-bold">
                                        {{ blog.description }}</p>
                                    <div class="flex flex-1 items-center text-xs justify-between mt-4">
                                        <div class="flex items-center gap-4 justify-between">
                                            <img src="../../assets/images/homeimages/propfp.svg" class="h-6 w-6" alt="">
                                            <p>{{ blog.author.first_name }} {{ blog.author.last_name }}</p>
                                        </div>
                                        <div>
                                            <p>{{ date(blog.createdAt) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import axios from "axios"
import BlogChild from "../../components/BlogChild.vue"
export default {
    components: {
        BlogChild,
    },
    data() {
        return {
            params: this.$route.params
        }
    },

    async asyncData({ params }) {
        let { data } = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/blogs/${params.id}/`)
        let blogs = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/blogs/`)
        return { subblogs: data , blogs:blogs}
    },


    methods: {
        message(data) {
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
        filter_blogs(array) {
            return array.id != this.params.id
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>