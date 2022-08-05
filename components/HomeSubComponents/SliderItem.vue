<template>
  <div>
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col"><h2>{{data.title}}</h2><h3>{{data.name}}</h3></div>
        <div></div>
        <div></div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    data: this.$store.state.homestore
  }
  },
created() {
  console.log(this.data);
},
}
</script>

<style>

</style>