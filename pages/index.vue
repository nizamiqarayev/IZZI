<template>
    <Home />
</template>

<script>
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';
export default {
  name: "IndexPage",
  components: { SignIn, SignUp },
  mounted(){
        window.scrollTo(0,0)
    }
}
</script>
