<template>
    <div class="max-w-3xl  pr-8">
        <div class="flex gap-20 pb-7 border-b ">
            <div class="flex flex-col gap-y-6">
                <div class="flex justify-between">
                    <div class="flex gap-x-4">
                        <div>
                            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3 0H13C14.6569 0 16 1.34315 16 3V19C16 19.8134 15.0806 20.2865 14.4188 19.8137L8 15.228L1.58124 19.8137C0.950887 20.264 0.0869751 19.8563 0.00612714 19.1138L0 19V3C0 1.34315 1.34315 0 3 0ZM13.1166 2.00673L13 2H3C2.44772 2 2 2.44772 2 3V17.057L7.41876 13.1863C7.73169 12.9627 8.14132 12.9404 8.47359 13.1192L8.58124 13.1863L14 17.057V3C14 2.48716 13.614 2.06449 13.1166 2.00673Z"
                                    fill="#5920BC" />
                            </svg>

                        </div>
                        <div class="space-y-3">
                            <p v-for="(choice, index) in serviceChoices" :key="choice.id">{{ choice.title }}</p>
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="flex items-center  gap-x-4">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.881735 9.85497C1.31689 12.0629 2.67214 13.9293 4.27595 15.4274C5.8763 16.9223 7.67363 18.0028 8.89211 18.6416C9.59264 19.009 10.4074 19.009 11.1079 18.6416C12.3264 18.0028 14.1237 16.9223 15.7241 15.4274C17.3279 13.9293 18.6831 12.0629 19.1183 9.85498C19.4903 7.96728 19.0938 5.69338 17.6879 3.90027C16.2997 2.1298 13.8642 0.75 10 0.75C6.1358 0.75 3.70031 2.1298 2.31213 3.90027C0.906188 5.69338 0.509686 7.96728 0.881735 9.85497Z"
                                stroke="#5920BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M7.41659 8.33333C7.41659 9.76007 8.57318 10.9167 9.99992 10.9167C11.4267 10.9167 12.5833 9.76007 12.5833 8.33333C12.5833 6.9066 11.4267 5.75 9.99992 5.75C8.57318 5.75 7.41659 6.9066 7.41659 8.33333Z"
                                stroke="#5920BC" stroke-width="1.5" />
                        </svg>
                        <p>Start Adress</p>
                    </div>
                    <div class="flex items-center gap-x-4">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="10" stroke="#5920BC" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M11 5V11L15 13" stroke="#5920BC" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p>Task start date and Time</p>
                    </div>
                </div>
            </div>

            <div class=" w-[40%] pb-7">
                <div class="">
                    <div class="flex flex-col gap-3" v-for="(choicevalue, index) in dataforvalue" :key="choicevalue.id">
                        <div class="flex flex-col gap-y-3" v-if="isArr[index] == false">
                            <p v-for="(value, titleindex) in choicevalue" :key="titleindex">{{ value[0] }}</p>
                        </div>
                        <div class="flex flex-col gap-y-3" v-if="isArr[index] == true">
                            <p v-for="(value, index) in choicevalue" :key="index"><span
                                    v-for="(title, titleindex) in value" :key="titleindex">{{ title }}</span></p>
                        </div>
                    </div>
                </div>
                <div class="mt-6 mb-6 break-all">
                    <p class="">{{ location }}</p>
                </div>
                <div>
                    <p>{{ startDate.getDate() }}/{{ startDate.getMonth() }}/{{ startDate.getFullYear() }}
                        {{ starttime.getHours() }}:{{ starttime.getMinutes() }}</p>
                </div>
            </div>

        </div>
        <div>
            <p>Task detail</p>
            <div>{{ detail }}</div>
        </div>
        <div class="flex items-center justify-between">
            <div class="py-4 px-6 border rounded-md hover:cursor-pointer" @click="$emit('return')">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.875488 6.125C0.392239 6.125 0.000489235 6.51675 0.000489235 7C0.000489235 7.43932 0.324249 7.80302 0.746187 7.86551L0.875488 7.875H13.1255C13.6087 7.875 14.0005 7.48325 14.0005 7C14.0005 6.56068 13.6767 6.19698 13.2548 6.13449L13.1255 6.125H0.875488Z"
                        fill="#5920BC" />
                    <path
                        d="M7.61872 0.256282C7.31118 -0.0512563 6.83167 -0.0820101 6.48974 0.16402L6.38128 0.256282L0.256281 6.38128C-0.0512567 6.68882 -0.0820103 7.16833 0.16402 7.51026L0.256281 7.61872L6.38128 13.7437C6.72299 14.0854 7.27701 14.0854 7.61872 13.7437C7.92626 13.4362 7.95701 12.9567 7.71098 12.6147L7.61872 12.5063L2.11313 6.99913L7.61872 1.49372C7.92626 1.18618 7.95701 0.706671 7.71098 0.364739L7.61872 0.256282Z"
                        fill="#5920BC" />
                </svg>
            </div>
            <div class="py-4 px-20 bg-[#5920BC] flex items-center hover:cursor-pointer" @click="submitorder()">
                <p class="text-white mr-2">Complete Task </p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.125 6.125C13.6082 6.125 14 6.51675 14 7C14 7.43932 13.6762 7.80302 13.2543 7.86551L13.125 7.875H0.875C0.391751 7.875 0 7.48325 0 7C0 6.56068 0.323761 6.19698 0.745699 6.13449L0.875 6.125H13.125Z"
                        fill="white" />
                    <path
                        d="M6.38177 0.256282C6.68931 -0.0512563 7.16882 -0.0820101 7.51075 0.16402L7.61921 0.256282L13.7442 6.38128C14.0517 6.68882 14.0825 7.16833 13.8365 7.51026L13.7442 7.61872L7.61921 13.7437C7.2775 14.0854 6.72348 14.0854 6.38177 13.7437C6.07423 13.4362 6.04348 12.9567 6.28951 12.6147L6.38177 12.5063L11.8874 6.99913L6.38177 1.49372C6.07423 1.18618 6.04348 0.706671 6.28951 0.364739L6.38177 0.256282Z"
                        fill="white" />
                </svg>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { isArray } from 'util';

export default {
    props: {
        serviceChoices: Object,
        serviceChoicesOptionValue: Array,
        location: String,
        startDate: Date,
        starttime: Date,
        detail: String,
        totalAmount: Number,
        subService: Number,
        tasker: Object,
    },
    data() {
        return {
            dataforvalue: [],
            isArr: [],
            dataforsubmit: {
                customer: [],
                tasker: [],
                options: [],
                reference: [],
                subService: [],
                startDate: [],
                address: "",
                detail: [],
                totalAmount: 0,
            }
        }
    },
    methods: {
        titledisplay(choiceindex, index) {
            console.log('====================================');
            console.log("bs");
            console.log(this.serviceChoicesOptionValue[choiceindex].value[index]);
            console.log('====================================');
            return this.serviceChoicesOptionValue[choiceindex].value[index]
        },
        async submitorder() {
            console.log('====================================');
            console.log(this.$store.state.auth.accesslocal);
            console.log('====================================');
            this.$axios.setHeader('Authorization', this.$store.state.auth.accesslocal)
            console.log(this.dataforsubmit);
            this.$axios.post("orders/", this.dataforsubmit).then(response => {
                console.log(response.data.success)
                if (response.data.success == "true") {
                    this.$router.push("/orders/")
                }
            }
            )


        }
    },
    mounted() {
        console.log('====================================');
        console.log(this.serviceChoices);
        console.log('====================================');
        console.log(this.tasker);
        console.log('====================================');
        console.log('====================================');
        console.log('====================================');
        console.log(this.serviceChoicesOptionValue);
        console.log('====================================');
        console.log('====================================');
        console.log(this.location);
        console.log('====================================');
        console.log('====================================');
        console.log(this.startDate);
        const newdate = this.startDate
        console.log('====================================');
        console.log('====================================');
        console.log(this.starttime.getHours());
        console.log(this.starttime.getMinutes());
        newdate.setHours(this.starttime.getHours())
        newdate.setMinutes(this.starttime.getMinutes())
        console.log(newdate);
        console.log('====================================');
        console.log('====================================');
        console.log(this.detail);
        console.log('====================================');
        console.log('====================================');
        console.log();
        console.log('====================================');
        this.dataforsubmit.customer = this.$store.state.auth.user.id

        this.dataforsubmit.subService = this.subService
        this.dataforsubmit.startDate = newdate
        this.dataforsubmit.detail = this.detail
        this.dataforsubmit.address = this.location
        this.dataforsubmit.tasker = this.tasker.id
        this.dataforsubmit.totalAmount = this.totalAmount


        let temparr = []

        var reference = "";
        while (reference.length < 5) {
            var r = Math.floor(Math.random() * 9) + 1;

            if (reference.indexOf(r) === -1) reference = reference + `${r}`;
        }
        console.log(reference);
        this.dataforsubmit.reference = reference

        for (let i = 0; i < this.serviceChoicesOptionValue.length; i++) {

            this.isArr.push(Array.isArray(this.serviceChoicesOptionValue[i].value))

            const tempdataforvalue = []

            if (this.isArr[i] == true) {
                for (let y = 0; y < this.serviceChoicesOptionValue[i].value.length; y++) {
                    tempdataforvalue.push(this.serviceChoicesOptionValue[i].value[y].title)
                    this.dataforsubmit.options.push(this.serviceChoicesOptionValue[i].value[y].id)
                }
            }
            else if (this.isArr[i] == false) {

                tempdataforvalue.push(this.serviceChoicesOptionValue[i].value.title)
                this.dataforsubmit.options.push(this.serviceChoicesOptionValue[i].value.id)

            }

            temparr.push(tempdataforvalue)

        }
        this.dataforvalue.push(temparr)

    },

}
</script>

<style>
</style>