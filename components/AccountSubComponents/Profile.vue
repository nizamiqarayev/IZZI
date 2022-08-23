<template>
    <section class="flex flex-col justify-start items-center w-full bg-white lg:px-8 px-4 min-h-[70vh] shadow-md">
        <div
            class="flex lg:flex-row flex-col gap-4 lg:gap-0 w-full justify-between items-center py-2 border-b-2 border-b-gray ">
            <h2 class=" font-bold text-2xl">Profile</h2>
            <div class="flex items-center gap-8">
                <div v-if="editprofile == false" class="flex items-center gap-3 ">
                    <p @click="onlineStatus = !onlineStatus" :class="onlineStatus ? 'text-gray-300' : 'text-[#5920BC]'"
                        class="cursor-pointer">
                        Offline</p>
                    <div class="h-5 rounded-full relative w-8 px-1 hover:cursor-pointer border border-[#5920BC] flex items-center transition-all duration-100 "
                        @click="onlineStatus = !onlineStatus">
                        <img class="transition-all mx-auto relative "
                            :class="onlineStatus ? 'translate-x-2' : '-translate-x-2'"
                            src="../../assets/images/accounticons/Vector.svg" alt="">
                    </div>
                    <p @click="onlineStatus = !onlineStatus" :class="onlineStatus ? 'text-[#5920BC]' : 'text-gray-300'"
                        class="cursor-pointer">
                        Online</p>
                </div>
                <div v-if="editprofile == false" @click="editprofile = !editprofile"
                    class="flex items-center gap-2 text-[#5920BC]">
                    <img src="../../assets/images/accounticons/edit.svg" alt="">
                    <p class="cursor-pointer">Edit profile</p>
                </div>
                <div v-if="editprofile" @click="updateUser"
                    class="flex items-center gap-2 text-[#EF4444]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5649 5.4178C12.6974 5.28534 12.8546 5.18027 13.0277 5.10858C13.2007 5.0369 13.3862 5 13.5735 5C13.7609 5 13.9464 5.0369 14.1194 5.10858C14.2925 5.18027 14.4497 5.28534 14.5822 5.4178C14.7147 5.55026 14.8197 5.70751 14.8914 5.88057C14.9631 6.05364 15 6.23913 15 6.42645C15 6.61377 14.9631 6.79926 14.8914 6.97233C14.8197 7.14539 14.7147 7.30265 14.5822 7.4351L7.7738 14.2435L5 15L5.75649 12.2262L12.5649 5.4178Z"
                            stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M0.6 10C0.6 12.0451 0.710362 13.6475 0.990163 14.9065C1.26845 16.1587 1.7063 17.034 2.33614 17.6639C2.96597 18.2937 3.84135 18.7316 5.09353 19.0098C6.35252 19.2896 7.95494 19.4 10 19.4C12.0451 19.4 13.6475 19.2896 14.9065 19.0098C16.1587 18.7316 17.034 18.2937 17.6639 17.6639C18.2937 17.034 18.7316 16.1587 19.0098 14.9065C19.2896 13.6475 19.4 12.0451 19.4 10C19.4 7.95494 19.2896 6.35252 19.0098 5.09353C18.7316 3.84135 18.2937 2.96597 17.6639 2.33614C17.034 1.7063 16.1587 1.26845 14.9065 0.990164C13.6475 0.710361 12.0451 0.6 10 0.6C7.95494 0.6 6.35252 0.710361 5.09353 0.990164C3.84135 1.26845 2.96597 1.7063 2.33614 2.33614C1.7063 2.96597 1.26845 3.84135 0.990163 5.09353C0.710362 6.35252 0.6 7.95494 0.6 10Z"
                            stroke="#EF4444" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p class="cursor-pointer">Save Editing</p>
                </div>
                <img v-if="editprofile == false" @click="logout()" class="cursor-pointer"
                    src="../../assets/images/accounticons/Exit.svg" alt="">
            </div>
        </div>
        <div v-if="editprofile == false" class="pt-8 w-full items-center pb-28 ">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <img class="h-14 w-14" src="../../assets/images/headerpfp/Oval.svg" alt="">
                    <div>
                        <h3 class="font-bold text-xl">{{ first_name }}
                            {{ last_name }}</h3>
                        <p class="text-sm">{{ email }}</p>
                    </div>
                </div>
                <div class="space-y-4">
                    <p>Joined 27.01.2021</p>
                    <p>+994506707504</p>
                </div>
            </div>
        </div>
        <div v-if="editprofile" class="w-full">
            <div class="w-full">
                <div class="flex w-full items-center justify-between border-b mt-4 pb-4">
                        <label class="whitespace-nowrap">First Name:</label>
                        <input v-model="first_name1"
                            class="  border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                            type="text">
                    </div>
                    <div class="flex w-full items-center justify-between border-b mt-4 pb-4">
                        <label class="whitespace-nowrap">Last Name:</label>
                        <input v-model="last_name1"
                            class="  border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                            type="text">
                    </div>
                    <div class="flex w-full items-center justify-between border-b mt-4 pb-4">
                        <label class="whitespace-nowrap">E-mail:</label>
                        <input v-model="email1"
                            class="  border-[#C7C9CB] w-2/5 border-[1px] focus:border-purple-500 focus:outline-none py-2 rounded-lg px-6 placeholder:font-password placeholder:text-xs placeholder:text-[#C4C4C4]"
                            type="text">
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            first_name1: "",
            last_name1: "",
            email1: "",
            editprofile: false,
            onlineStatus: true,
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$cookie.get('localhost');
            this.$auth.$state.loggedIn = false
            this.$auth.$state.user ={}
            this.$router.push('/signin')
        },
        updateUser(){
            let user={
                first_name:this.first_name1,
                last_name:this.last_name1,
                email:this.email1,
                profilePhoto:null
            }
            console.log(user);
            const config = {
            headers: { Authorization: `${this.$auth.$state.accesslocal}` }
        }
            let success=this.$axios.put(`https://izzi-api-rest.herokuapp.com/api/v1/auth/updateUser/${this.$auth.$state.user.id}/`,
            user,config
            )
            console.log(success);
            this.logout()
        }
    },
    created() {
        if (this.$auth.$state.user.first_name !== undefined) {
            this.first_name = this.$auth.$state.user.first_name

        }
        if (this.$auth.$state.user.last_name !== undefined) {
            this.last_name = this.$auth.$state.user.last_name

        }
        if (this.$auth.$state.user.email !== undefined) {
            this.email = this.$auth.$state.user.email

        }
    },
}
</script>

<style>
</style>