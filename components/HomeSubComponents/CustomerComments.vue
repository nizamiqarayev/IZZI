<template>
    <section class="font-quicksand mt-24 mb-24 max-w-[65rem] mx-auto">
        <div class="flex justify-between items-center w-full">
            <h3 class="text-3xl font-bold">What our customers say</h3>
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