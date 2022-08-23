    <template>
    <main class="flex items-center w-full justify-center lg:pb-10  bg-[#5920BC] bg-opacity-5 font-quicksand">
        <div
            class="relative flex flex-col  lg:flex-row px-[5%] max-w-full lg:mt-10 lg:max-w-[90%] lg:w-[80%] bg-white lg:p-6 ">
            <div
                class="lg:sticky top-20 border-b  lg:border-b-0 w-full mb-4 h-fit lg:mb-0 lg:w-full lg:max-w-[25%] lg:pl-6">
                <h2 class="font-bold text-center lg:text-left text-2xl text-[#222222]">{{ services.title }} </h2>
                <p class="mt-3 text-[#999999] text-sm mb-4">{{ services.description }}</p>
                <transition name="slide-fade">
                    <div>
                        <Bookingtaskers class="hidden lg:flex" v-if="proselected"
                            :selected="updaterselectedtaskerdata[0]" :taskerdata="updaterselectedtaskerdata[1]"
                            :hoursofwork="updaterselectedtaskerdata[2]" :pricetype="updaterselectedtaskerdata[3]"
                            :workPrice="updaterselectedtaskerdata[4]" />
                        <button v-if="proselected && summary == false"
                            class="hidden w-10/12 hover:transition-all py-4 mt-4 mb-4  border rounded-md border-[#5920BC] #979797 lg:flex items-center self-center justify-center hover:bg-[#5920BC] hover:text-white"
                            @click="summary = !summary">
                            <p>Summary</p>
                        </button>
                    </div>
                </transition>
            </div>
            <div v-if="summary == false" class="lg:pl-6 w-full lg:max-w-[73%] lg:border-l">
                <div class="mb-8" v-for="(choices, choiceindex) in services.serviceChoices" :key="choiceindex + 1000">
                    <h3 class="text-base">{{ choices.title }}</h3>
                    <div class="flex flex-wrap gap-y-4 gap-x-4 lg:gap-x-2 lg:w-full lg:items-center lg:mt-4">
                        <div v-for="(option, index) in choices.options" :key="index + 300"
                            class="w-[45%] min-w-fit lg:w-auto ">
                            <input @change="correctdata[choiceindex] = true" v-model="optionsdata[choiceindex].value"
                                @click="chosentaskersdatafilter(index, choiceindex, filterables[choiceindex])"
                                class="hidden" :type="choices.type" :key="index + 2000" :id="option.id"
                                :name="choices.title" :value="option">

                            <label
                                :class="[(correctdata[choiceindex] == false ? 'border-red-500' : 'border-[#5920BC]'), (optionsdata[choiceindex].value.title == option.title ? 'border-opacity-100' : 'border-opacity-40'), (dataForIconSwitch[choiceindex][index] == true ? 'border-opacity-100' : 'border-opacity-40')]"
                                class="hover:cursor-pointer flex items-center min-w-full flex-1 text-sm lg:justify-center   lg:text-base px-7  mr-4 lg:px-6 py-3 border border-[#5920BC]  whitespace-nowrap rounded-md"
                                :for="option.id">
                                <div v-if="choices.type == 'radio'">
                                    <svg :class="optionsdata[choiceindex].value.title == option.title ? 'opacity-100' : 'opacity-40'"
                                        v-show="optionsdata[choiceindex].value.title != option.title" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            :stroke="correctdata[choiceindex] == false ? '#ff0000' : '#5920BC'"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <svg :class="optionsdata[choiceindex].value.title == option.title ? 'opacity-100' : 'opacity-40'"
                                        v-show="optionsdata[choiceindex].value.title == option.title" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0404 8.20711C14.4309 7.81658 14.4309 7.18342 14.0404 6.79289C13.6498 6.40237 13.0167 6.40237 12.6261 6.79289L9.16659 10.2525L7.79036 8.87623C7.39983 8.4857 6.76667 8.4857 6.37615 8.87623C5.98562 9.26675 5.98562 9.89992 6.37615 10.2904L8.45948 12.3738C8.50829 12.4226 8.5609 12.4653 8.61635 12.5019C9.0045 12.7582 9.53198 12.7155 9.87369 12.3738L14.0404 8.20711Z"
                                            :fill="correctdata[choiceindex] == false ? '#ff0000' : '#5920BC'" />
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            :stroke="correctdata[choiceindex] == false ? '#ff0000' : '#5920BC'"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <div v-if="choices.type == 'checkbox'">
                                    <svg :class="dataForIconSwitch[choiceindex][index] == false ? 'opacity-40' : ''"
                                        v-show="dataForIconSwitch[choiceindex][index] == false" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            :stroke="correctdata[choiceindex] == false ? '#ff0000' : '#5920BC'"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <svg :class="dataForIconSwitch[choiceindex][index] == true ? 'opacity-100' : ''"
                                        v-show="dataForIconSwitch[choiceindex][index] == true" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0404 8.20711C14.4309 7.81658 14.4309 7.18342 14.0404 6.79289C13.6498 6.40237 13.0167 6.40237 12.6261 6.79289L9.16659 10.2525L7.79036 8.87623C7.39983 8.4857 6.76667 8.4857 6.37615 8.87623C5.98562 9.26675 5.98562 9.89992 6.37615 10.2904L8.45948 12.3738C8.50829 12.4226 8.5609 12.4653 8.61635 12.5019C9.0045 12.7582 9.53198 12.7155 9.87369 12.3738L14.0404 8.20711Z"
                                            :fill="correctdata[choiceindex] == false ? '#ff0000' : '#5920BC'" />
                                        <path
                                            d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
                                            :stroke="correctdata[choiceindex] == false ? '#ff0000' : '#5920BC'"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>

                                <p class="ml-1 lg:ml-3 ">{{ option.title }}
                                </p>
                            </label>
                        </div>


                    </div>
                    <p class="text-red-500" v-show="correctdata[choiceindex] == false">*Please select one of these
                        options</p>

                </div>
                <div class="mt-10 mb-2 w-full space-y-3">
                    <div class="flex justify-between ">
                        <h3>Start Address</h3>
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
                        <input type="text" @change="eligibleLocation = true"
                            class="border hover:cursor-pointer border-[#C7C9CB] rounded-md focus:outline-none w-full py-4 pl-14"
                            placeholder="Start Address" v-model="startlocation" />
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
                    <p class="text-red-500" v-show="eligibleLocation == false">Please Add the task location</p>

                </div>
                <div class="flex w-full">
                    <div class="w-full mt-10 relative flex flex-wrap lg:flex-nowrap gap-x-4 gap-y-3 items-start justify-start">
                        <div class="w-full lg:w-[25%] flex flex-col justify-center items-start">
                            <h3 class="mb-2" @click="calendarshow = !calendarshow">Task start date</h3>
                            <div class="relative w-3/4">
                                <vc-date-picker class="relative" v-model="date" :value="startdatecomputed" mode="date">
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <svg class="absolute top-[0.0625rem] left-3 " width="20" height="20"
                                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12.3076L7.5 12.3076" stroke="#5920BC" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M5 15.3848L7.5 15.3848" stroke="#5920BC" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M6.66667 0.019043C7.08088 0.019043 7.41667 0.354829 7.41667 0.769043V1.609C8.19753 1.55967 9.05628 1.53827 10 1.53827C10.9437 1.53827 11.8025 1.55967 12.5833 1.609V0.769043C12.5833 0.354829 12.9191 0.019043 13.3333 0.019043C13.7475 0.019043 14.0833 0.354829 14.0833 0.769043V1.75215C17.9562 2.27109 19.4412 3.85009 19.8622 7.71135C19.8885 7.95236 19.9106 8.20226 19.9289 8.46135C19.946 8.70291 19.9598 8.95245 19.9705 9.21022C19.9907 9.69962 20 10.2187 20 10.769C20 11.3192 19.9908 11.8381 19.9705 12.3274C19.9598 12.5853 19.946 12.835 19.9289 13.0767C19.9107 13.3348 19.8887 13.5837 19.8625 13.8238C19.413 17.9534 17.7475 19.4737 13.2479 19.8785C13.0069 19.9002 12.7576 19.9187 12.5 19.9342C12.2574 19.9488 12.0073 19.9608 11.7496 19.9703C11.2016 19.9906 10.6191 19.9998 10 19.9998C1.765 19.9998 0 18.3706 0 10.769C0 10.2187 0.00925232 9.69962 0.0295424 9.21022C0.0402293 8.95245 0.0539782 8.70291 0.0710503 8.46135C0.0893617 8.20226 0.111496 7.95236 0.137775 7.71135C0.558801 3.85009 2.04375 2.27109 5.91667 1.75215V0.769043C5.91667 0.354829 6.25245 0.019043 6.66667 0.019043ZM5.91667 3.26724C4.69766 3.44636 3.8658 3.73203 3.27875 4.1293C2.45712 4.68531 1.89646 5.63102 1.64747 7.71135H18.3525C18.1035 5.63102 17.5429 4.68531 16.7212 4.1293C16.1342 3.73203 15.3023 3.44636 14.0833 3.26724V3.84597C14.0833 4.26018 13.7475 4.59597 13.3333 4.59597C12.9191 4.59597 12.5833 4.26018 12.5833 3.84597V3.1132C11.8343 3.06305 10.9789 3.03827 10 3.03827C9.0211 3.03827 8.16565 3.06305 7.41667 3.1132V3.84597C7.41667 4.26018 7.08088 4.59597 6.66667 4.59597C6.25245 4.59597 5.91667 4.26018 5.91667 3.84597V3.26724ZM17.92 13.8693C18.069 13.8511 18.2137 13.837 18.3524 13.8262C18.1372 15.6208 17.6906 16.5606 17.0707 17.1328C16.4147 17.7383 15.3132 18.1703 13.2609 18.3706C13.2703 18.2833 13.2814 18.1937 13.2945 18.1024C13.4391 17.0943 13.8138 15.9616 14.6754 15.1663C15.5467 14.362 16.8005 14.0061 17.92 13.8693ZM11.8097 17.8894C11.7807 18.0916 11.7599 18.286 11.7454 18.4694C11.2056 18.4902 10.625 18.4998 10 18.4998C7.97259 18.4998 6.43841 18.3978 5.2648 18.1571C4.102 17.9185 3.39646 17.564 2.9293 17.1328C1.99099 16.2667 1.5 14.6118 1.5 10.769C1.5 10.2109 1.50982 9.69279 1.53085 9.21135H18.4691C18.4902 9.69279 18.5 10.2109 18.5 10.769C18.5 11.3226 18.4903 11.8369 18.4697 12.315C18.2416 12.3281 17.9958 12.3489 17.7381 12.3804C16.4974 12.532 14.87 12.9453 13.658 14.0641C12.4362 15.1918 11.9776 16.7186 11.8097 17.8894Z"
                                                fill="#5920BC" />
                                        </svg>
                                        <input
                                            class=" text-center hover:cursor-pointer  py-2 border rounded focus:outline-none focus:border-blue-300"
                                            :value="inputValue" v-on="inputEvents" />
                                    </template>
                                </vc-date-picker>
                                <p class="text-red-500 w-full" v-show="eligibleDate == false">{{ dateErrormsg }}</p>
                            </div>
                        </div>

                        <div class="flex relative flex-col items-start justify-center">
                            <h3 class="mb-2">Start Time</h3>
                            <vc-date-picker class="relative" v-model="starttime" mode="time" is24hr>
                                <template v-slot="{ inputValue, inputEvents }">
                                    <svg class="absolute bottom-[0.5625rem] left-4" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z"
                                            stroke="#212135" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M12 6C12 6 12 10 12 11C12 12 12 12 13 12C14 12 18 12 18 12"
                                            stroke="#212135" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <input
                                        class=" py-2 text-left hover:cursor-pointer pl-12 border rounded focus:outline-none focus:border-blue-300"
                                        :value="inputValue" v-on="inputEvents" />
                                </template>
                            </vc-date-picker>
                        </div>

                        <div class="flex relative flex-col items-start justify-center">
                            <h3 class="mb-2">End Time</h3>

                            <vc-date-picker class="relative" v-model="endtime" mode="time" is24hr>
                                <template v-slot="{ inputValue, inputEvents }">

                                    <svg class="absolute bottom-[0.5625rem] left-4" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z"
                                            stroke="#212135" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M12 6C12 6 12 10 12 11C12 12 12 12 13 12C14 12 18 12 18 12"
                                            stroke="#212135" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <input
                                        class=" py-2 border hover:cursor-pointer rounded text-center focus:outline-none focus:border-blue-300"
                                        :value="inputValue" v-on="inputEvents" />
                                </template>
                            </vc-date-picker>
                        </div>


                    </div>
                </div>
                <div class="mt-10">
                    <h3>Explain your issue</h3>
                    <textarea v-model="detail" @change="eligibleDetails = true" placeholder="Leave your message for PRO"
                        class="hover:cursor-pointer mt-2 pt-6 pl-6 border border-[#C7C9CB] w-full focus:outline-none h-24">
                        </textarea>
                    <p class="text-red-500" v-show="eligibleDetails == false">Please add more information about your
                        order</p>
                </div>
                <div class="w-full flex items-center justify-start mt-4 ">
                    <label for="fileupload"
                        class="flex items-center px-12 py-3 bg-[#F9F9F9] rounded-lg hover:cursor-pointer">
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
                        <p>UploadImage</p>
                    </label>
                    <input class="hidden" id="fileupload" ref="fileInput" type="file" multiple @input="pickFile">

                </div>
                <div class="w-full mt-10 pb-10">
                    <h3 class="mb-4">Choose a Pro</h3>
                    <div
                        class="flex lg:w-auto overflow-x-scroll lg:overflow-auto lg:grid lg:grid-cols-2 gap-x-5 gap-y-4  ">
                        <div class="flex flex-col shrink-0 w-80  p-3 lg:w-auto  items-start justify-center border border-[#C7C9CB1F] rounded-md shadow-inner"
                            v-for="(tasker, index) in chosenTaskersdisplayer" :key="tasker.id + 1500">
                            <Bookingtaskers :selected="false" :taskerdata="tasker" :hoursofwork="hoursOfWork"
                                :pricetype="chosenTaskersPriceType[index]" :workPrice="chosenTaskersPrices[index]" />
                            <button
                                class=" w-[90%] hover:transition-all py-4  border rounded-md border-[#5920BC] #979797 flex items-center self-center justify-center hover:bg-[#5920BC] hover:text-white"
                                @click="dataSetterForSelected(true, tasker, hoursOfWork, chosenTaskersPriceType[index], chosenTaskersPrices[index])">
                                <p>Select</p>
                            </button>
                        </div>
                    </div>

                </div>
                <Bookingtaskers class="flex lg:hidden" v-if="proselected" :selected="updaterselectedtaskerdata[0]"
                    :taskerdata="updaterselectedtaskerdata[1]" :hoursofwork="updaterselectedtaskerdata[2]"
                    :pricetype="updaterselectedtaskerdata[3]" :workPrice="updaterselectedtaskerdata[4]" />
                <button v-if="proselected"
                    class="flex lg:hidden w-full hover:transition-all py-4 mb-10 border rounded-md border-[#5920BC] #979797  items-center self-center justify-center hover:bg-[#5920BC] hover:text-white"
                    @click="summary = !summary">
                    <p>Summary</p>
                </button>
            </div>
            <transition name="slide-fade">
                <div v-if="summary == true" class="lg:pl-6 w-full lg:max-w-[73%] ">
                    <Bookingsummary @return="function () {
                        summary = !summary
                        selectedtaskerdata = []
                        proselected = !proselected
                    
                    }" :tasker="selectedtaskerdata[1]" :serviceChoices="servicesdata.serviceChoices"
                        :totalAmount="updaterselectedtaskerdata[4]" :serviceChoicesOptionValue="optionsdata"
                        :location="startlocation" :startDate="date" :starttime="starttime" :subService="this.params.id"
                        :detail="detail" :images="images" />
                    <Bookingtaskers class="flex lg:hidden" v-if="proselected" :selected="updaterselectedtaskerdata[0]"
                        :taskerdata="updaterselectedtaskerdata[1]" :hoursofwork="updaterselectedtaskerdata[2]"
                        :pricetype="updaterselectedtaskerdata[3]" :workPrice="updaterselectedtaskerdata[4]" />

                </div>
            </transition>

            <div v-if="needsSignIn == true">
                <ModuleSignIn />
            </div>

        </div>
    </main>
</template>

    <script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css';

import axios from 'axios';
import Bookingtaskers from '../../components/booking/bookingtaskers.vue';
import Bookingsummary from '../../components/booking/bookingsummary.vue';
import ModuleSignIn from '../../components/ModuleSignIn.vue';
export default {
    components: { Bookingtaskers, Bookingsummary, ModuleSignIn, Slick },
    data() {
        return {
            slickOptions: {
                centerMode: true,
                dots: false,
                prevArrow: false,
                nextArrow: false,
                infinite: false,
                speed: 700,
                slidesToShow: 2,
                slidesToScroll: 1,
            },


            summary: false,
            needsSignIn: false,
            proselected: false,
            mobile: false,


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
            filterables: [],

            selectedtaskerdata: [],


            correctdata: [],
            eligibleLocation: true,
            eligibleDate: true,
            eligibleData: true,
            eligibleDetails: true,

            images: [],
            tempimg: '',
        }
    },
    watch: {

        images(newImages) {
            console.log("images");
            console.log(newImages);
        },
        date(newDate, oldDate) {
            this.dateErrormsg = ""
            if (newDate.getDate() - oldDate.getDate() < 1) {
                this.dateErrormsg = "Date should be at least 1 day ahead"
                this.eligibleDate = false
            }
            this.starttime.setDate(newDate.getDate())
            this.endtime.setDate(newDate.getDate())

        },
        starttime(newHour, oldHour) {
        },
        endtime(newTime, oldTime) {
            if (newTime.getHours() <= this.starttime.getHours()) {
                console.log('====================================');
                this.hoursOfWork = parseInt(24 - Math.abs(newTime.getHours() - this.starttime.getHours()))
                console.log("hourseofwork");
                console.log(this.hoursOfWork);

                this.endtime.setDate(this.date.getDate() + 1)
                for (let index = 0; index < this.calculatedPrices.length; index++) {
                    this.calculatedPrices[index] = this.calculatedPrices[index] * this.hoursOfWork
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
        pickFile() {
            let input = this.$refs.fileInput
            let file = input.files
            for (let index = 0; index < file.length; index++) {
                const reader = new FileReader();

                reader.readAsDataURL(file[index])
                reader.onload = e => {
                    this.images.push(e.target.result);

                };
            }
        },
        dataSetterForSelected(selected, taskerdata, hoursOfWork, pricetype, workprice) {
            window.scrollTo(0, 0)
            this.proselected = false
            console.log('====================================');
            console.log(this.optionsdata);
            console.log('====================================');
            let optionsfullselected = true
            for (let optionsloop = 0; optionsloop < this.optionsdata.length; optionsloop++) {
                if (this.optionsdata[optionsloop].value.length == 0) {
                    this.correctdata.splice(optionsloop, 1, false)
                    optionsfullselected = false
                }

            }
            if (this.startlocation == "") {
                this.eligibleLocation = false,
                    optionsfullselected = false

            }
            if (this.detail == "") {
                this.eligibleDetails = false
                optionsfullselected = false

            }
            if (this.$store.state.auth.loggedIn == false) {
                alert("You must be signed in")
                this.$router.push("/signin")
            }
            if (this.eligibleDate == false) {
                optionsfullselected = false
            }
            console.log(optionsfullselected);
            if (taskerdata != null && this.$store.state.auth.loggedIn && optionsfullselected) {
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
            console.log("this is happening 1");
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
        async chosentaskersdatafilter(choiceindex, dataplaceholderindex, filter) {
            this.iconhandler(choiceindex, dataplaceholderindex)
            console.log("this is happening2");
            if (filter == true) {



                this.chosenTaskers = []
                for (let l = 0; l < this.taskers.data.length; l++) {
                    for (let index = 0; index < this.taskers.data[l].skills.length; index++) {
                        if (this.taskers.data[l].skills[index].subService.id == this.params.id) {

                            this.chosenTaskers.push(this.taskers.data[l])
                            break;
                        }
                    }
                }




                console.log(this.filterables);
                setTimeout(() => {
                    let temparr = []
                    let tempprices = []

                    if (this.servicesdata.serviceChoices[dataplaceholderindex].type == "radio") {
                        for (let z = 0; z < this.filterables.length; z++) {

                            const tempoptions = this.optionsdata[z]
                            console.log(this.optionsdata[z].value.title !== undefined);
                            if (this.filterables[z] == true && this.optionsdata[z].value.title !== undefined) {
                                console.log("this is happening 3");

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
                        console.log(this.chosenTaskers);

                    }
                    else if (this.servicesdata.serviceChoices[dataplaceholderindex].type == "checkbox") {

                        for (let z = 0; z < this.filterables.length; z++) {


                            this.chosentaskersdatafilterstart()


                            if (this.filterables[z] == true && this.optionsdata[z].value.length > 0) {

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
                            else if (this.filterables[z] == true && this.optiondata[z].value.length == 0) {

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






            }

        },
        hasSubArray(master, sub) {

            const result = sub.every(val => master.includes(val.title));
            return result
        },
        async getservices() {
            this.servicesdata = await axios.get(`https:izzi-api-rest.herokuapp.com/api/v1/subServices/${this.params.id}/`)

        },
        async gettaskers() {
            this.taskers = await axios.get(`https:izzi-api-rest.herokuapp.com/api/v1/taskers/`)

        }
    },
    async mounted() {
        console.log(window.innerWidth);
        this.mobile = (window.innerWidth < 1024) ? true : false

        this.date.setDate(this.date.getDate() + 1)
        this.starttime.setDate(this.date.getDate())
        this.endtime = new Date(this.starttime.getDate())
        this.endtime.setHours(this.starttime.getHours() + 1)
        this.endtime.setMinutes(this.starttime.getMinutes())
        console.log("endhour");
        console.log(this.endtime.getHours());
        this.hoursOfWork = 1
        await this.getservices(),
            this.servicesdata = this.servicesdata.data
        console.log('====================================');
        console.log(this.servicesdata);
        console.log('====================================');
        for (let index = 0; index < this.servicesdata.serviceChoices.length; index++) {
            let tempobj
            this.correctdata.push(true)
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
        console.log(this.correctdata);

        for (let i = 0; i < this.optionsdata.length; i++) {
            for (let y = 0; y < this.servicesdata.serviceChoices[i].options.length; y++) {
                if (this.servicesdata.serviceChoices[i].options[y].taskerFiltering == true) {
                    this.filterables.push(true)
                    break;
                }
                else {
                    this.filterables.push(false)
                    break;
                }
            }
        }


        this.lengthofoptions = this.optionsdata.length
        await this.gettaskers()
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