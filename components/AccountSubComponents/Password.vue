<template>
    <section class="w-full bg-white lg:px-8 px-4 font-averta min-h-[70vh] shadow-md">
        <div class="py-2 flex  justify-between border-b-2">
            <h2 class="text-2xl font-bold">Change Password</h2>
        </div>
        <div> 
            <form>
                <div class="flex items-center justify-between border-b mt-4 pb-4">
                    <label class="whitespace-nowrap">Enter current password</label>
                    <input v-model="old_password"
                        class="  border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                        type="password">
                </div>
                <div class="flex items-center justify-between border-b mt-4 pb-4">
                    <label class="whitespace-nowrap">Enter new password</label>
                    <input v-model="new_password"
                        class="  border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                        type="password">
                </div>
                <div class="flex items-center justify-between border-b mt-4 pb-4">
                    <label class="whitespace-nowrap">Confirm new password</label>
                    <input v-model="new_password2"
                        class="  border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                        type="password">
                </div>
                <div class="flex items-center justify-end gap-4 py-4">
                    <button class="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Cancel</button>
                    <button @click="changePassword" class="py-2 px-4 border bg-[#5920BC] text-white border-gray-300 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {   
    data(){
        return{
            old_password:'',
            new_password:'',
            new_password2:'',
        }
    },
    methods:{
        changePassword(){
            const config = {
            headers: { Authorization: `${this.$auth.$state.accesslocal}` }
        }
            this.$axios.patch(`https://izzi-api-rest.herokuapp.com/api/v1/auth/changePassword/${this.$auth.$state.user.id}/`,
            {
                old_password:this.old_password,
                password:this.new_password,
                password2:this.new_password2

            },config
            )
        }
    }

}
</script>

<style>
</style>