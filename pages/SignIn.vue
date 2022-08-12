<template>
    <ModuleSignIn />
</template>

<script>
import ModuleSignInVue from '../components/ModuleSignIn.vue';
 
export default {
    components: {
        ModuleSignInVue
    },
    data() {
        return {
            pwhidden: false,
            pwplaceholdertext: "",
            pwplaceholderhidden:false,
            inputEmail: "",
            inputPW: ""
        }
    },
    computed: {
    },
    methods: {
        pwfocusfixer() {
            console.log('====================================');
            console.log(this.$refs.loginPW);
            console.log('====================================');
            this.$refs.loginPW.focus()
        },
    },
    mounted(){
        window.scrollTo(0,0)
    }

}
</script>

<style>
</style>