<template>
    <section class="font-quicksand lg:max-w-[65rem] w-11/12 mx-auto mt-16">
        <div class="flex justify-between items-center ">
            <h3 class="text-3xl font-bold">Blogs</h3>
            <nuxt-link to="blogs"
                class="flex items-center gap-2 justify-center border rounded-full border-[#5920BC] py-3 px-6">
                <p class="text-[#5920BC]"> Discover All Blogs</p>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>


            </nuxt-link>
        </div>

        <div class="lg:w-full overflow-auto lg:justify-center mt-9 flex items-start gap-4">
            <div v-for="(blog, index) in blogs" :key="blog.id">
                <nuxt-link :to="`/blogs/${blog.id}`">
                    <BlogsChild class="w-96 lg:w-full" v-if="index < 3" :data="blog" />
                </nuxt-link>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
import BlogsChild from './BlogsChild.vue';
export default {
    components: { BlogsChild },
    data() {
        return {
            blogs: []
        }
    },
    async created() {
        const tempblog = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/blogs/`)
        this.blogs = tempblog.data

    }
}
</script>

<style>
</style>