    <template>
    <main class="flex flex-col lg:flex-row w-full lg:items-center lg:justify-center  bg-[#5920BC] bg-opacity-5 font-quicksand">
        <div class="flex mt-10 max-w-[65rem] bg-white p-6">
            <div class="pr-12 border-r w-[20rem] max-w-[20rem]">
                <h2 class="font-bold text-2xl text-[#222222]">{{ services.title }}</h2>
                <p class="mt-3 mb-7 text-[#999999 text-sm]">{{ services.description }}</p>
                <Bookingtaskers v-if="proselected" :selected="updaterselectedtaskerdata[0]"
                    :taskerdata="updaterselectedtaskerdata[1]" :hoursofwork="updaterselectedtaskerdata[2]"
                    :pricetype="updaterselectedtaskerdata[3]" :workPrice="updaterselectedtaskerdata[4]" />
                <button v-if="proselected"
                    class=" w-full hover:transition-all py-4  border rounded-md border-[#5920BC] #979797 flex items-center self-center justify-center hover:bg-[#5920BC] hover:text-white"
                    @click="summary = !summary">
                    <p>Summary</p>
                </button>
            </div>
            <div v-if="summary == false" class="pl-6 max-w-[45rem]">
                <div v-for="(choices, choiceindex) in services.serviceChoices" :key="choiceindex">
                    <h3 class="text-base">{{ choices.title }}</h3>
                    <div class="flex flex-wrap gap-y-4  items-center mt-4">
                        <div v-for="(option, index) in choices.options" :key="index + 300">
                            <input v-model="optionsdata[choiceindex].value"
                                @click="chosentaskersdatafilter(index, choiceindex)" class="hidden" :type="choices.type"
                                :key="index + 300" :id="option.id" :name="choices.title" :value="option">

                            <label
                                class="flex items-center flex-1  mr-4 px-6 py-3 border border-[#5920BC] whitespace-nowrap rounded-md"
                                :for="option.id">
                                <div v-if="choices.type == 'radio'">
                                    <svg v-show="optionsdata[choiceindex].value.title != option.title" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <svg v-show="optionsdata[choiceindex].value.title == option.title" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0404 8.20711C14.4309 7.81658 14.4309 7.18342 14.0404 6.79289C13.6498 6.40237 13.0167 6.40237 12.6261 6.79289L9.16659 10.2525L7.79036 8.87623C7.39983 8.4857 6.76667 8.4857 6.37615 8.87623C5.98562 9.26675 5.98562 9.89992 6.37615 10.2904L8.45948 12.3738C8.50829 12.4226 8.5609 12.4653 8.61635 12.5019C9.0045 12.7582 9.53198 12.7155 9.87369 12.3738L14.0404 8.20711Z"
                                            fill="#5920BC" />
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div v-if="choices.type == 'checkbox'">
                                    <svg v-show="dataForIconSwitch[choiceindex][index] == false" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <svg v-show="dataForIconSwitch[choiceindex][index] == true" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0404 8.20711C14.4309 7.81658 14.4309 7.18342 14.0404 6.79289C13.6498 6.40237 13.0167 6.40237 12.6261 6.79289L9.16659 10.2525L7.79036 8.87623C7.39983 8.4857 6.76667 8.4857 6.37615 8.87623C5.98562 9.26675 5.98562 9.89992 6.37615 10.2904L8.45948 12.3738C8.50829 12.4226 8.5609 12.4653 8.61635 12.5019C9.0045 12.7582 9.53198 12.7155 9.87369 12.3738L14.0404 8.20711Z"
                                            fill="#5920BC" />
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                </div>

                                <p class="ml-3">{{ option.title }}
                                </p>
                            </label>
                        </div>


                    </div>
                </div>
                <div class="mt-10 mb-2">
                    <div class="flex justify-between ">
                        <h3>Start Adress</h3>
                        <div class="flex">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http:www.w3.org/2000/svg">
                                <path
                                    d="M0.881735 9.85497C1.31689 12.0629 2.67214 13.9293 4.27595 15.4274C5.8763 16.9223 7.67363 18.0028 8.89211 18.6416C9.59264 19.009 10.4074 19.009 11.1079 18.6416C12.3264 18.0028 14.1237 16.9223 15.7241 15.4274C17.3279 13.9293 18.6831 12.0629 19.1183 9.85498C19.4903 7.96728 19.0938 5.69338 17.6879 3.90027C16.2997 2.1298 13.8642 0.75 10 0.75C6.1358 0.75 3.70031 2.1298 2.31213 3.90027C0.906188 5.69338 0.509686 7.96728 0.881735 9.85497Z"
                                    stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M7.41659 8.33333C7.41659 9.76007 8.57318 10.9167 9.99992 10.9167C11.4267 10.9167 12.5833 9.76007 12.5833 8.33333C12.5833 6.9066 11.4267 5.75 9.99992 5.75C8.57318 5.75 7.41659 6.9066 7.41659 8.33333Z"
                                    stroke="#5920BC" stroke-width="1.5" />
                            </svg>
                            <p class="ml-2">Map</p>
                        </div>

                    </div>
                    <div class="relative">
                        <input type="text"
                            class="border border-[#C7C9CB] rounded-md focus:outline-none w-full py-4 pl-14"
                            placeholder="Start Adress" v-model="startlocation" />
                        <svg class="absolute top-5 left-6" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http:www.w3.org/2000/svg">
                            <path
                                d="M0.881735 9.85497C1.31689 12.0629 2.67214 13.9293 4.27595 15.4274C5.8763 16.9223 7.67363 18.0028 8.89211 18.6416C9.59264 19.009 10.4074 19.009 11.1079 18.6416C12.3264 18.0028 14.1237 16.9223 15.7241 15.4274C17.3279 13.9293 18.6831 12.0629 19.1183 9.85498C19.4903 7.96728 19.0938 5.69338 17.6879 3.90027C16.2997 2.1298 13.8642 0.75 10 0.75C6.1358 0.75 3.70031 2.1298 2.31213 3.90027C0.906188 5.69338 0.509686 7.96728 0.881735 9.85497Z"
                                stroke="#5920BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M7.41659 8.33333C7.41659 9.76007 8.57318 10.9167 9.99992 10.9167C11.4267 10.9167 12.5833 9.76007 12.5833 8.33333C12.5833 6.9066 11.4267 5.75 9.99992 5.75C8.57318 5.75 7.41659 6.9066 7.41659 8.33333Z"
                                stroke="#5920BC" stroke-width="1.5" />
                        </svg>
                    </div>


                </div>
                <div class="flex w-full">
                    <div class="w-full mt-10 relative flex justify-between">
                        <div>
                            <h3 class="mb-2" @click="calendarshow = !calendarshow">Task start date</h3>
                            <div>
                                <vc-date-picker v-model="date" :value="startdatecomputed" mode="date">
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <input class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                                            :value="inputValue" v-on="inputEvents" />
                                    </template>
                                </vc-date-picker>
                                <p v-show="dateErrormsg != ''">{{ dateErrormsg }}</p>
                            </div>
                        </div>

                        <div>
                            <h3 class="mb-2">Start Time</h3>
                            <vc-date-picker v-model="starttime" mode="time" is24hr>
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                                        :value="inputValue" v-on="inputEvents" />
                                </template>
                            </vc-date-picker>
                        </div>

                        <div>
                            <h3 class="mb-2">End Time</h3>

                            <vc-date-picker v-model="endtime" mode="time" is24hr>
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                                        :value="inputValue" v-on="inputEvents" />
                                </template>
                            </vc-date-picker>
                        </div>


                    </div>
                </div>
                <div class="mt-10">
                    <h3>Explain your issue</h3>
                    <textarea v-model="detail" placeholder="Leave your message for PRO"
                        class=" mt-2 pt-6 pl-6 border border-[#C7C9CB] w-full focus:outline-none h-24">
                        </textarea>
                </div>
                <div class="w-full flex items-center justify-start mt-4">
                    <div class=" flex items-center px-12 py-3 bg-[#F9F9F9] rounded-lg">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                            <path d="M16.0059 13.9976L12.0059 9.99756L8.00586 13.9976" stroke="#222222"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0059 9.99756V18.9976" stroke="#222222" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M20.3953 16.3875C21.3707 15.8558 22.1412 15.0144 22.5852 13.9962C23.0292 12.9779 23.1215 11.8408 22.8475 10.7642C22.5735 9.68769 21.9488 8.73305 21.072 8.05099C20.1952 7.36892 19.1162 6.99828 18.0053 6.99754H16.7453C16.4426 5.82678 15.8785 4.73988 15.0953 3.81854C14.3121 2.89719 13.3302 2.16539 12.2234 1.67815C11.1167 1.19091 9.91388 0.960901 8.70545 1.00542C7.49701 1.04995 6.3144 1.36784 5.24651 1.93521C4.17862 2.50257 3.25324 3.30465 2.53995 4.28112C1.82666 5.2576 1.34402 6.38308 1.12831 7.57294C0.912601 8.76279 0.969437 9.98607 1.29454 11.1508C1.61965 12.3155 2.20457 13.3914 3.00533 14.2975"
                                stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.0059 13.9976L12.0059 9.99756L8.00586 13.9976" stroke="#222222"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="ml-3">Upload Attachment</p>
                    </div>

                </div>
                <div class="w-full mt-10">
                    <h3>Choose a Pro</h3>
                    <div class="grid grid-cols-2 gap-x-5 gap-y-4 w-full ">
                        <div class="flex flex-col p-3 items-start justify-center border border-[#C7C9CB1F] rounded-md shadow-inner"
                            v-for="(tasker, index) in chosenTaskersdisplayer" :key="tasker.id">
                            <Bookingtaskers :selected="false" :taskerdata="tasker" :hoursofwork="hoursOfWork"
                                :pricetype="chosenTaskersPriceType[index]" :workPrice="chosenTaskersPrices[index]" />
                            <button
                                class=" w-full hover:transition-all py-4  border rounded-md border-[#5920BC] #979797 flex items-center self-center justify-center hover:bg-[#5920BC] hover:text-white"
                                @click="dataSetterForSelected(true, tasker, hoursOfWork, chosenTaskersPriceType[index], chosenTaskersPrices[index])">
                                <p>Select</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="summary == true" class="pl-6">
                <Bookingsummary @return="function () {
                    summary = !summary
                    selectedtaskerdata = []
                    proselected= !proselected    
                
                }" :tasker="selectedtaskerdata[1]" :serviceChoices="servicesdata.serviceChoices"
                    :totalAmount="updaterselectedtaskerdata[4]*this.hoursOfWork"
                    :serviceChoicesOptionValue="optionsdata" :location="startlocation" :startDate="date"
                    :starttime="starttime" :subService="this.params.id" :detail="detail" />

            </div>
            <div v-if="needsSignIn == true">
                <ModuleSignIn />
            </div>

        </div>
    </main>
</template>

    <script>
import axios from 'axios';
import Bookingtaskers from '../../components/booking/bookingtaskers.vue';
import Bookingsummary from '../../components/booking/bookingsummary.vue';
import ModuleSignIn from '../../components/ModuleSignIn.vue';
export default {
    components: { Bookingtaskers, Bookingsummary, ModuleSignIn },
    data() {
        return {
            summary: false,
            needsSignIn: false,
            proselected: false,


            date: new Date(),
            dateErrormsg: "",

            starttime: new Date(),
            endtime: new Date(),

            hoursOfWork: 0,

            detail: '',

            calendarshow: false,
            justloaded: false,
            params: this.$route.params,
            taskers: {},
            chosenTaskers: [],
            calculatedPrices: [],
            priceTypes: [],
            fullprices: [],



            startlocation: "",

            taskersdisplaydata: {},
            optionsdata: [],
            optionsdatahelper: [],
            servicesdata: {},
            lengthofoptions: 0,
            prices: [],
            dataForIconSwitch: [],

            timezone: '',

            selectedtaskerdata: [],

        }
    },
    watch: {


        date(newDate, oldDate) {
            this.dateErrormsg = ""
            if (newDate.getDate() - oldDate.getDate() < 1) {
                this.dateErrormsg = "Date should be at least 1 day ahead"
            }
            this.starttime.setDate(newDate.getDate())
            this.endtime.setDate(newDate.getDate())

        },
        starttime(newHour, oldHour) {



        },
        endtime(newTime, oldTime) {
            if (newTime.getHours() <= this.starttime.getHours()) {
                console.log('====================================');
                this.hoursOfWork = 24 - Math.abs(newTime.getHours() - this.starttime.getHours())
                console.log(this.hoursOfWork);

                this.endtime.setDate(this.date.getDate() + 1)
                for (let index = 0; index < this.calculatedPrices.length; index++) {
                    this.calculatedPrices[index] = this.calculatedPrices * this.hoursOfWork
                }
                console.log('====================================');
            }
            else {
                console.log('====================================');
                this.hoursOfWork = Math.abs(newTime.getHours() - this.starttime.getHours())
                console.log(this.hoursOfWork);
                console.log('====================================');
            }
        }
    },
    computed: {
        updaterselectedtaskerdata() {
            console.log("computingdata", this.selectedtaskerdata);
            return this.selectedtaskerdata
        },
        startdatecomputed() {
            return this.date
        },
        services() {
            return this.servicesdata
        },
        chosenTaskersdisplayer() {
            return this.chosenTaskers
        },
        chosenTaskersPrices() {
            return this.calculatedPrices
        },
        chosenTaskersPriceType() {
            return this.priceTypes
        },

        optionsdatadisplay() {
            return this.optionsdata
        },

    },
    methods: {
        dataSetterForSelected(selected, taskerdata, hoursOfWork, pricetype, workprice) {
            this.proselected = false
            console.log('====================================');
            console.log(this.optionsdata);
            console.log('====================================');
            let optionsfullselected=true
            for (let optionsloop = 0; optionsloop < this.optionsdata.length; optionsloop++) {
                if (this.optionsdata[optionsloop].value.length == 0) {
                    alert("Please select one of the choice in Choice:" + optionsloop)
                    optionsfullselected=false
                }

            }
            if (this.startlocation == "") {
                alert("Please add a location")

            }
            if (this.detail == "") {
                alert("Please add aditional information")

            }
            if (this.$store.state.auth.loggedIn == false) {
                alert("You must be signed in")
                this.$router.push("/signin")
            }
            if (taskerdata != null && this.startlocation.length != 0 && this.detail.length != 0 && this.$store.state.auth.loggedIn &&optionsfullselected) {
                this.selectedtaskerdata[0] = selected
                this.selectedtaskerdata[1] = taskerdata
                this.selectedtaskerdata[2] = hoursOfWork
                this.selectedtaskerdata[3] = pricetype
                this.selectedtaskerdata[4] = workprice
                console.log("thingy working");

                this.proselected = true
            }
        },

        starttimecalculator() {
            console.log('====================================');
            console.log(this.starttime);
            console.log('====================================');
        },

        chosentaskersdatafilterstart() {
            this.chosenTaskers = []

            for (let l = 0; l < this.taskers.data.length; l++) {
                for (let index = 0; index < this.taskers.data[l].skills.length; index++) {
                    if (this.taskers.data[l].skills[index].subService.id == this.params.id) {

                        this.chosenTaskers.push(this.taskers.data[l])
                        break;
                    }
                }
            }
            this.chosenTaskers.sort(function (a, b) {
                return b.rating - a.rating;
            });

            return this.chosenTaskers

        },
        iconhandler(choiceindex, dataplaceholderindex) {
            this.dataForIconSwitch[dataplaceholderindex][choiceindex] = !this.dataForIconSwitch[dataplaceholderindex][choiceindex]

        },
        async chosentaskersdatafilter(choiceindex, dataplaceholderindex) {
            this.iconhandler(choiceindex, dataplaceholderindex)


            this.chosenTaskers = []
            for (let l = 0; l < this.taskers.data.length; l++) {
                for (let index = 0; index < this.taskers.data[l].skills.length; index++) {
                    if (this.taskers.data[l].skills[index].subService.id == this.params.id) {

                        this.chosenTaskers.push(this.taskers.data[l])
                        break;
                    }
                }
            }


            let filterables = [];

            for (let i = 0; i < this.optionsdata.length; i++) {
                for (let y = 0; y < this.servicesdata.serviceChoices[i].options.length; y++) {
                    if (this.servicesdata.serviceChoices[i].options[y].taskerFiltering == true) {
                        filterables.push(true)
                        break;
                    }
                    else {
                        filterables.push(false)
                        break;
                    }
                }
            }
            await setTimeout(() => {
                let temparr = []
                let tempprices = []

                if (this.servicesdata.serviceChoices[dataplaceholderindex].type == "radio") {
                    for (let z = 0; z < filterables.length; z++) {

                        const tempoptions = this.optionsdata[z]

                        if (filterables[z] == true && this.optionsdata[z].value.title != '') {

                            for (let k = 0; k < this.chosenTaskers.length; k++) {
                                for (let f = 0; f < this.chosenTaskers[k].skills.length; f++) {

                                    if (String(this.chosenTaskers[k].skills[f].option.title) == String(this.optionsdata[z].value.title)) {
                                        let price = this.chosenTaskers[k].skills[f].price



                                        const tempobj = {
                                            tasker: this.chosenTaskers[k],
                                            price: price,
                                            type: this.chosenTaskers[k].skills[f].priceType
                                        }
                                        temparr.push(tempobj)

                                        break;
                                    }
                                }
                            }
                        }

                    }


                    temparr.sort(function (a, b) {
                        return b.tasker.rating - a.tasker.rating;
                    });

                    const secondarytemparr = []
                    temparr.forEach(element => {
                        secondarytemparr.push(element.tasker)
                    });
                    const secondarytemparrforprices = []
                    temparr.forEach(element => {
                        secondarytemparrforprices.push(element.price)
                    });
                    const secondarytemparrpricetypes = []
                    temparr.forEach(element => {
                        secondarytemparrpricetypes.push(element.type)
                    });


                    this.calculatedPrices = secondarytemparrforprices
                    this.priceTypes = secondarytemparrpricetypes

                    this.chosenTaskers = secondarytemparr

                }
                else if (this.servicesdata.serviceChoices[dataplaceholderindex].type == "checkbox") {

                    for (let z = 0; z < filterables.length; z++) {


                        this.chosentaskersdatafilterstart()


                        if (filterables[z] == true && this.optionsdata[z].value.length > 0) {

                            for (let k = 0; k < this.chosenTaskers.length; k++) {
                                const tempoptionsarr = []
                                const tempoptionstitlearr = []
                                for (let f = 0; f < this.chosenTaskers[k].skills.length; f++) {
                                    tempoptionsarr.push(this.chosenTaskers[k].skills[f])
                                    tempoptionstitlearr.push(this.chosenTaskers[k].skills[f].option.title)
                                    if (this.hasSubArray(tempoptionstitlearr, this.optionsdata[z].value)) {

                                        console.log('====================================');
                                        console.log(this.chosenTaskers[k].skills[f].priceType);
                                        console.log('====================================');

                                        let price = 0;

                                        for (let pricelooper = 0; pricelooper < tempoptionsarr.length; pricelooper++) {
                                            price = price + tempoptionsarr[pricelooper].price

                                        }
                                        let fullprice
                                        if (this.chosenTaskers[k].skills[f].priceType == "hourlyPrice") {
                                            fullprice = price * this.hoursOfWork
                                        }

                                        const tempobj = {
                                            tasker: this.chosenTaskers[k],
                                            price: price,
                                            type: this.chosenTaskers[k].skills[f].priceType,
                                        }
                                        temparr.push(tempobj)

                                        break;
                                    }
                                }
                            }
                        }
                        else if (filterables[z] == true && this.optiondata[z].value.length == 0) {

                            const temptaskers = this.chosentaskersdatafilterstart()
                            for (let f = 0; f < this.chosenTaskers[k].skills.length; f++) {
                                const tempobj = {
                                    tasker: temptaskers[k],
                                    price: temptaskers[k].skills[f].option.price
                                }
                                temparr.push(tempobj)
                            }

                        }



                        temparr.sort(function (a, b) {
                            return b.tasker.rating - a.tasker.rating;
                        });
                        console.log('====================================');
                        console.log(temparr);
                        console.log('====================================');

                        const secondarytemparr = []
                        temparr.forEach(element => {
                            secondarytemparr.push(element.tasker)
                        });
                        const secondarytemparrforprices = []
                        temparr.forEach(element => {
                            secondarytemparrforprices.push(element.price)
                        });

                        const secondarytemparrpricetypes = []
                        temparr.forEach(element => {
                            secondarytemparrpricetypes.push(element.type)
                        });
                        this.priceTypes = secondarytemparrpricetypes


                        this.calculatedPrices = secondarytemparrforprices
                        this.chosenTaskers = secondarytemparr
                    }
                    return this.chosenTaskers

                }
            }, 200)






        },
        hasSubArray(master, sub) {

            const result = sub.every(val => master.includes(val.title));
            return result
        }
    },
    async created() {


        this.date.setDate(this.date.getDate() + 1)
        this.starttime.setDate(this.date.getDate())
        this.starttime.setHours(this.starttime.getHours() + 1)

        this.endtime.setDate(this.date.getDate())
        this.endtime.setHours(this.starttime.getHours() + 1)
        this.hoursOfWork = 1

        this.servicesdata = await axios.get(`https:izzi-api-rest.herokuapp.com/api/v1/subServices/${this.params.id}/`)
        this.servicesdata = this.servicesdata.data
        console.log('====================================');
        console.log(this.servicesdata);
        console.log('====================================');
        for (let index = 0; index < this.servicesdata.serviceChoices.length; index++) {
            let tempobj
            if (this.servicesdata.serviceChoices[index].type == "checkbox")
                tempobj = {
                    id: index,
                    value: [],
                }
            else if (this.servicesdata.serviceChoices[index].type == "radio") {
                tempobj = {
                    id: index,
                    value: '',
                }
            }
            const temparrforicon = []

            for (let i = 0; i < this.servicesdata.serviceChoices[index].options.length; i++) {
                temparrforicon.push(false)
            }

            this.dataForIconSwitch.push(temparrforicon)
            this.optionsdata.push(tempobj)
        }


        this.lengthofoptions = this.optionsdata.length
        this.taskers = await axios.get(`https:izzi-api-rest.herokuapp.com/api/v1/taskers`)
        console.log('====================================');
        console.log(this.taskers);
        console.log('====================================');
        this.chosentaskersdatafilterstart()
        this.justloaded = true
    },
    // mounted() {
    //     if()
    // }


}
</script>

    <style>
    </style>