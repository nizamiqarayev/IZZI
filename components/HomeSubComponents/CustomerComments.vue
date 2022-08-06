<template>
    <section class="font-quicksand mt-24 mb-24 max-w-[65rem] mx-auto">
        <div class="flex justify-between items-center w-full">
            <h3 class="text-3xl font-bold">What our customers say</h3>
            <nuxt-link to="blogs"
                class="flex items-center gap-2 justify-center border rounded-full border-[#5920BC] py-3 px-6">
                <p class="text-[#5920BC]"> Discover All Blogs</p>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>


            </nuxt-link>
        </div>
        <div class="w-full justify-center mt-9 flex items-center gap-4">
            <CustomerCommentsChild />
            <CustomerCommentsChild />
            <CustomerCommentsChild />

        </div>
    </section>
</template>

<script>
import CustomerCommentsChild from './CustomerCommentsChild.vue';
export default {
    components: { CustomerCommentsChild }
}
</script>

<style>
</style>