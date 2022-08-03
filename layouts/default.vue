<template>
    <div class="">
    <Header></Header>
    <Nuxt class="relative top-20"/>
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