<template>
    <section class="w-full bg-main font-quicksand bg-no-repeat bg-contain bg-left-top">
        <main class="max-w-[65rem] mx-auto py-16 mb-32 flex flex-col gap-8">
            <div class="flex-1 w-full">
                <img class="w-full" :src="subblogs.coverPhoto" alt="">
            </div>
            <div class="flex lg:flex-row p-6 flex-col gap-8">
                <div class="lg:w-9/12 w-full space-y-6">
                    <p class="font-bold text-2xl">{{ subblogs.title }} </p>
                    <div class="flex flex-1 items-center w-3/5 text-sm justify-between mt-4">
                        <div class="flex items-center gap-4 justify-between">
                            <img v-if="subblogs.author.profilePhoto" :src="subblogs.author.profilePhoto"
                                class="h-8 w-8 rounded-full object-top object-cover" alt="">
                            <img v-if="!subblogs.author.profilePhoto" class="h-8 w-8"
                                src="../../assets/images/homeimages/propfp.svg" alt="">
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
                <div class="flex w-full justify-around lg:justify-start lg:w-3/12 lg:flex-col gap-8">
                    <div class="shadow-md w-full" v-for="(blog, index) in blogs.data" :key="blog.id"
                        v-if="index < 3 && blog.id != params.id">
                        <div>
                            <nuxt-link :to="`${blog.id}`">
                                <img class="object-cover h-56 " :src="blog.coverPhoto" alt="">
                                <div class="p-3">
                                    <p class="mt-4 text-base font-bold text-[#222222]">{{ blog.title }}
                                    </p>
                                    <p class="mt-3 text-[#222222] h-16 truncate whitespace-normal text-xs text-bold">
                                        {{ blog.description }}</p>
                                    <div class="flex flex-1 items-center text-xs justify-between mt-4">
                                        <div class="flex items-center gap-4 justify-between">
                                            <img v-if="blog.author.profilePhoto" :src="blog.author.profilePhoto"
                                                class="h-8 w-8 rounded-full object-top object-cover" alt="">
                                            <img v-if="!blog.author.profilePhoto" class="h-8 w-8"
                                                src="../../assets/images/homeimages/propfp.svg" alt="">
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
        return { subblogs: data, blogs: blogs }
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