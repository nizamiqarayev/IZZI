<template>
    <section class="bg-main font-quicksand bg-no-repeat bg-left-top bg-contain w-full">
        <main class="w-10/12 mx-auto py-40">
            <p class="text-[30px] font-bold ">All Pros</p>
            <div class="w-full pt-16">
                <div class="flex justify-between gap-14">
                    <div class="flex items-center border-[1px] bg-transparent border-[#E2E2E2] rounded relative w-3/5">
                        <label for="search">
                            <img class="absolute bottom-3 left-3 z-20 " src="../assets/images/search (3).svg" alt="">
                        </label>
                        <input type="text" class="relative bg-transparent px-10 py-2 z-10 w-full" id="search">
                    </div>
                    <div class="flex gap-8 w-2/5">
                        <div class="border-[1px] border-[#C7C9CB] w-full rounded">
                            <select class="hover:outline-none bg-transparent focus:outline-none px-6  py-2">
                                <option value="Rating" disabled selected hidden>Rating</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </div>
                        <div class="border-[1px] border-[#C7C9CB]  w-full rounded">
                            <select class="focus:outline-none bg-transparent hover:outline-none px-6 py-2">
                                <option value="Task count" disabled selected hidden>Task count</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 pt-9 ">
                    <div class="w-3/12">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <p class="text-[#6F6F6F] font-bold">Services</p>
                                <div v-for="(service,index) in services.data" :key="service.id" class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filter_services[index].filter = !filter_services[index].filter"
                                        v-if="!filter_services[index].filter" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filter_services[index].filter = !filter_services[index].filter"
                                        v-if="filter_services[index].filter" alt="">
                                    <p @click="filter_services[index].filter = !filter_services[index].filter">{{service.title}}</p>
                                </div>

                            </div>
                            <div class="flex flex-col gap-2">
                                <p class="text-[#6F6F6F] font-bold">By City</p>
                                <div v-for="(city,index) in cities.data" :key="city.id" class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" @click="filter_cities[index].filter = !filter_cities[index].filter"
                                        v-if="!filter_cities[index].filter" alt="">
                                    <img src="../assets/images/Checked.svg" @click="filter_cities[index].filter = !filter_cities[index].filter"
                                        v-if="filter_cities[index].filter" alt="">
                                    <p @click="filter_cities[index].filter = !filter_cities[index].filter">{{city.name}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-9/12 grid grid-cols-2 gap-5">
                        <div v-for="tasker in taskers" :key="tasker.id"
                            class="border-[1px] border-slate-400 rounded p-3 flex flex-col">
                            <div class="flex gap-1 relative">
                                <div class="relative">
                                    <img src="../assets/images/homeimages/propfp.svg" alt="">
                                    <img v-if="tasker.supervisor" class="absolute bottom-0 right-0"
                                        src="../assets/images/headerpfp/Group 26285.svg" alt="">
                                </div>
                                <div class="flex">
                                    <div class="flex flex-col justify-center items-start">
                                        <div class="flex flex-col">
                                            <p class="font-bold">{{ tasker.user.first_name }} {{ tasker.user.last_name
                                            }}
                                            </p>
                                        </div>
                                        <div class="flex gap-2 w-full self-end">
                                            <div class="flex gap-[2px]">
                                                <img class="h-4 w-4" v-for="item in Number(tasker.rating)" :key="item"
                                                    src="../assets/images/headerpfp/Vector.svg" alt="">
                                            </div>
                                            <p class="text-[#FFC107] text-xs">{{ tasker.rating }}</p>
                                            <p class="text-[#979797] text-xs">({{ tasker.completedTaskCount }})</p>
                                        </div>
                                    </div>
                                </div>
                                <img v-if="tasker.topTasker" class="absolute top-0 right-0"
                                    src="../assets/images/headerpfp/Group 26286.svg" alt="">
                            </div>
                            <div class="py-1">
                                <p class="text-sm text-[#999999]">{{ tasker.bio }}</p>
                            </div>
                            <div class="text-[#5920BC] flex py-2 items-center gap-2 w-full justify-center">
                                <hr class="w-1/4 border-[#5920BC]">
                                <p class="font-bold">Top Skills</p>
                                <hr class="w-1/4 border-[#5920BC]">
                            </div>
                            <div class="grid grid-cols-2 gap-y-2 gap-x-5">
                                <div v-for="(skill, index) in tasker.skills" :key="skill.id" v-if="index < 4"
                                    class="bg-[#5920BC0D] flex justify-around py-2 px-2 border-[1px] border-[#5920BC] rounded">
                                    <p class="text-sm">{{ skill.option.title }}</p>
                                    <p class="text-sm">{{ skill.price }} ₼</p>
                                </div>
                            </div>
                            <div class="mt-4 mb-2 py-4 px-12 text-center border-[1px] border-[#5920BC40]">
                                <p class="text-[#5920BC]">Book Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            services:[],
            cities:[],
            filter_services: [
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },


            ],
            filter_cities: [
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },
                {
                    filter: false
                },


            ],
        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    async created(){
    this.services = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/services/`)
    this.cities = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/cities/`)
    },
    async asyncData({ }) {
        let { data } = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/taskers/`)
        return { taskers: data}
    },
    methods:{
        message(data){
            console.log(data);
        }
    }
}
</script>