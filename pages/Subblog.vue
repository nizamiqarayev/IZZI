<template>
  <BlogChild></BlogChild>
</template>

<script>
export default {

  created() {
    console.log(this.$route.query.blogid);
  },
}
</script>

<style>
</style>