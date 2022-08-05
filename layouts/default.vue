<template>
    <div class="relative">
    <Header class="top-0"></Header>
    <Nuxt/>
    <Footer></Footer>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default{
    components:{
        Footer,
        Header
    }
}
</script>