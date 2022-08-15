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
                            <select v-model="rating" class="hover:outline-none bg-transparent focus:outline-none px-6  py-2">
                                <option value="Rating" disabled selected hidden>Rating</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </div>
                        <div class="border-[1px] border-[#C7C9CB]  w-full rounded">
                            <select v-model="task_count" class="focus:outline-none bg-transparent hover:outline-none px-6 py-2">
                                <option value="Task count" disabled selected hidden>Task count</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                            {{message(rating)}}
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 pt-9 ">
                    <div class="w-3/12">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <p class="text-[#6F6F6F] font-bold">Services</p>
                                <div v-for="(service, index) in services.data" :key="service.id"
                                    v-on:click="IDselector_service(index)" class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" v-if="!filter_services[index].filter"
                                        alt="">
                                    <img src="../assets/images/Checked.svg" v-if="filter_services[index].filter" alt="">
                                    <p>
                                        {{ service.title }}</p>
                                    {{ getServiceid(index) }}
                                </div>

                            </div>
                            <div v-if="cities" class="flex flex-col gap-2">
                                <p class="text-[#6F6F6F] font-bold">By City</p>
                                <div v-for="(city, index) in cities.data" :key="city.id"
                                    v-on:click="IDselector_city(index)" class="flex gap-2">
                                    <img src="../assets/images/Squircle.svg" v-if="!filter_cities[index].filter" alt="">
                                    <img src="../assets/images/Checked.svg" v-if="filter_cities[index].filter" alt="">
                                    <p>{{ city.name }}</p>
                                    {{ getCityid(city, index) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-9/12  flex flex-col justify-center items-center" v-if="filteredEntries.length==0">
                        <img src="../assets/images/Job hiring 1.svg" alt="">
                        <p>There is no aviable pro for this service :(</p>
                        </div>
                    <div v-if="filteredEntries.length !=0" class="w-9/12 grid grid-cols-2 gap-5">
                        <div v-for="tasker in filteredEntries" :key="tasker.id"
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
            services: [],
            cities: [],
            filter_services: [
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
                    filter: false
                },
                {
                    id: null,
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
            filter_taskers: [],
            selectedID_services: 100,
            selectedID_cities: 100,
            allserviceIDs: [],
            count_service: 100,
            count_city: 100,
            rating:'Rating',
            task_count:'Task count',


        }
    },
    mounted() {
        window.scrollTo(0, 0)


    },
    async created() {
        console.log('created isledi');
        this.services = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/services/`)
        this.cities = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/cities/`)
    },
    async asyncData({ }) {
        let { data } = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/taskers/`)
        return { taskers: data }
    },
    methods: {
        message(data) {
            console.log(data);
        },
        getServiceid(index) {
            // this.count++
            this.filter_services[index].id = this.services.data[index].id

        },
        getCityid(city, index) {
            this.filter_cities[index].id = city.id
        },
        IDselector_service(index) {
            console.log("index", index, "count_Service", this.count_service);
            if (index != this.count_service) {
                this.selectedID_services = this.filter_services[index].id
                for (let i = 0; i < this.filter_services.length; i++) {
                    this.filter_services[i].filter = false
                }
                this.filter_services[index].filter = true;
                this.count_service = index
            } else {
                this.filter_services[index].filter = false;
                this.selectedID_services = 100
                this.count_service = 100
            }


        },
        IDselector_city(index) {

            if (index != this.count_city) {
                this.selectedID_cities = this.filter_cities[index].id
                for (let i = 0; i < this.filter_cities.length; i++) {
                    this.filter_cities[i].filter = false
                }
                this.filter_cities[index].filter = true;
                this.count_city = index
            } else {
                this.filter_cities[index].filter = false;
                this.selectedID_cities = 100
                this.count_city = 100
            }


        },
    },
    computed: {
        filteredEntries() {
            this.filter_taskers = this.taskers
            if (this.selectedID_services !=100 || this.selectedID_cities !=100) {
                return this.filter_taskers.filter((el) => {
                    let service_check = el.skills.map((element, index, array) => {
                        return this.selectedID_services == element.subService.id
                    })
                    let city_check = el.workCities.map((element, index, array) => {
                        return this.selectedID_cities == element.id
                    })
                    let result_service
                    let result_city
                    if (this.selectedID_cities==100) {
                        result_city = true
                    } else {
                        result_city = city_check.some(element => {
                            if (element == true) {
                                return true;
                            }
                        });
                    }
                    if (this.selectedID_services == 100) {
                        result_service = true
                    } else {
                        result_service = service_check.some(element => {
                            if (element == true) {
                                return true;
                            }
                        });
                    }
                    console.log("service", result_service,"ServiceId",this.selectedID_services);
                    console.log("city", result_city,"CityID",this.selectedID_cities);
                    if (result_city && result_service) {

                        return true
                    } else {
                        return false
                    }
                })
            } else {
                return this.taskers
            }

        },


    }
}
</script>