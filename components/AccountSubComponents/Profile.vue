<template>
    <section class="flex flex-col justify-start items-center w-full bg-white lg:px-8 px-4 min-h-[70vh] shadow-md">
        <div class="flex lg:flex-row flex-col gap-4 lg:gap-0 w-full justify-between items-center py-2 border-b-2 border-b-gray ">
            <h2 class=" font-bold text-2xl">Profile</h2>
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-3 ">
                    <p :class="onlineStatus ? 'text-gray-300' : 'text-[#5920BC]'">offline</p>
                    <div class="h-5 rounded-full relative w-8 px-1 hover:cursor-pointer border border-[#5920BC] flex items-center transition-all duration-100 "
                        @click="onlineStatus = !onlineStatus">
                        <img class="transition-all mx-auto relative "
                            :class="onlineStatus ? 'translate-x-2' : '-translate-x-2'"
                            src="../../assets/images/accounticons/Vector.svg" alt="">
                    </div>
                    <p :class="onlineStatus ? 'text-[#5920BC]' : 'text-gray-300'">online</p>
                </div>
                <div class="flex items-center gap-2 text-[#5920BC]">
                    <img src="../../assets/images/accounticons/edit.svg" alt="">
                    <p class="cursor-pointer">Edit profile</p>
                </div>
                <img @click="logout()" class="cursor-pointer" src="../../assets/images/accounticons/Exit.svg" alt="">
            </div>
        </div>
        <div class="pt-8 w-full items-center pb-28 ">
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
    </section>
</template>

<script>
export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",

            onlineStatus: true,
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$auth.$state.loggedIn = false
            var cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    var p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    };
                    d.shift();
                }

                // this.$router.push('/')


            }
        }
    },
    created() {
        if (this.$auth.$state.user.first_name !== undefined) {
            this.first_name = this.$auth.$state.user.first_name

        }
        if (this.$auth.$state.user.last_name !== undefined) {
            this.last_name  = this.$auth.$state.user.last_name

        }
        if (this.$auth.$state.user.email !== undefined) {
            this.email = this.$auth.$state.user.email

        }
    },
}
</script>

<style>
</style>