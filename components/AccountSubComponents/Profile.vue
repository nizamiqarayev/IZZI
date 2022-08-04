<template>
    <section class="flex items-center w-full bg-white px-8">
        <div class="flex items-center border-b border-b-gray ">
            <h2 class="mr-44 font-bold text-2xl pt-6 pb-4 ">Profile</h2>
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-3 ">
                    <p :class="onlineStatus ? 'text-gray-300' : 'text-[#5920BC]'">offline</p>
                    <div class="h-5 rounded-full w-8 px-1 hover:cursor-pointer border border-[#5920BC] flex items-center transition-all duration-100 "
                        :class="onlineStatus ? 'justify-end' : 'justify-start'" @click="onlineStatus = !onlineStatus"><img
                            class="transition-all" src="../../assets/images/accounticons/Vector.svg" alt=""></div>
                    <p :class="onlineStatus ? 'text-[#5920BC]' : 'text-gray-300'">online</p>
                </div>
                <div class="flex items-center gap-2 text-[#5920BC]">
                    <img src="../../assets/images/accounticons/edit.svg" alt="">
                    <p>Edit profile</p>
                </div>
                <img src="../../assets/images/accounticons/Exit.svg" alt="">
            </div>
        </div>
        <div class="pt-8">

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            onlineStatus: true,
        }
    },
}
</script>

<style>
</style>