<template>
    <section class="w-full bg-main font-quicksand bg-no-repeat bg-contain bg-left-top">
        <div class="max-w-[65rem] mx-auto ">
            <div class="w-full py-20">
                <p class="font-bold text-3xl mb-8">All Blogs</p>
                <div class="grid grid-cols-3 gap-4">
                    <div class="flex flex-col h-full shadow-md" v-for="blog in blogs.data" :key="blog.id">
                        <nuxt-link :to="`blogs/${blog.id}`">
                            <img class="h-36 object-cover" :src="blog.coverPhoto" alt="">
                            <div class="p-3 flex flex-col flex-1 justify-between">
                                <div>
                                    <p class="mt-4 text-xl font-bold text-[#222222]">{{ blog.title }}</p>
                                </div>
                                <div class="flex flex-col justify-between">
                                    <p class="mt-3 text-[#222222] h-16 truncate whitespace-normal text-sm text-bold">{{
                                            blog.description
                                    }}</p>
                                    <div class="flex items-center justify-between mt-4">
                                        <div class="flex items-center gap-4 justify-between">
                                            <img src="../../assets/images/homeimages/propfp.svg" class="h-6 w-6" alt="">
                                            <p>{{ blog.author.first_name }} {{ blog.author.last_name }}</p>
                                        </div>
                                        <div>
                                            <p>{{ date(blog.createdAt) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="../../assets/images/logo/Frame 2.svg" alt="">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Blogmain',
    data() {
        return {
            blogs: {}
        }
    },
    async mounted() {
        this.blogs = await this.$axios.get("blogs/")
        window.scrollTo(0, 0)
    },
    methods: {

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