<template>
  <BlogChild></BlogChild>
</template>

<script>
export default {

  created() {
    console.log(this.$route.query.blogid);
  },
  mounted(){
        window.scrollTo(0,0)
    }
}
</script>

<style>
</style>