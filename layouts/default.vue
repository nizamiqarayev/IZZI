<template>
    <div class="relative">

        <Header class="top-0"></Header>
        <transition name="slide-fade">
            <Nuxt />
        </transition>
        <Footer class=""></Footer>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
    components: {
        Footer,
        Header
    },
    transition: {
        name: 'home',
        mode: 'out-in'
    },
}
</script>
<style >
.home-enter-active,
.home-leave-active {
    transition: opacity 2s;
}

.home-enter,
.home-leave-active {
    opacity: 0;
}

.slide-fade-enter {
    transform: translateY(15px);
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 1.5s ease;
}

.slide-fade-leave-to {
    transform: translateY(-15px);
    opacity: 0;
}
</style>