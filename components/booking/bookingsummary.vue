<template>
    <div class="w-full">
        <div>
            <div class="flex justify-between">
                <div class="flex">
                    <div>
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3 0H13C14.6569 0 16 1.34315 16 3V19C16 19.8134 15.0806 20.2865 14.4188 19.8137L8 15.228L1.58124 19.8137C0.950887 20.264 0.0869751 19.8563 0.00612714 19.1138L0 19V3C0 1.34315 1.34315 0 3 0ZM13.1166 2.00673L13 2H3C2.44772 2 2 2.44772 2 3V17.057L7.41876 13.1863C7.73169 12.9627 8.14132 12.9404 8.47359 13.1192L8.58124 13.1863L14 17.057V3C14 2.48716 13.614 2.06449 13.1166 2.00673Z"
                            fill="#5920BC" />
                    </svg>

                </div>
                <div>
                    <p v-for="choice in serviceChoices" :key="choice.id">{{choice.title}}</p>
                </div>
                </div>
                <div v-for="choicevalue in serviceChoicesOptionValue" :key="choicevalue.id">
                <p v-for="(value,index) in dataforvalue" :key="index"><span v-for="(title,index) in value" :key="index">{{title}}, </span> </p>
                </div>
            </div>
            <div></div>
            <div></div>

        </div>
        <div></div>

    </div>
</template>

<script>
export default {
    props: {
        serviceChoices: Object,
        serviceChoicesOptionValue: Array,
        location: String,
        startDate: Date,
        starttime: Date,
        detail: String,
    },
    data() {
        return {
            dataforvalue:[],
        }
    },
    methods: {
        titledisplay(choiceindex, index) {
            console.log('====================================');
            console.log("bs");
            console.log(this.serviceChoicesOptionValue[choiceindex].value[index]);
            console.log('====================================');
            return this.serviceChoicesOptionValue[choiceindex].value[index]
        }
    },
    mounted() {
        console.log('====================================');
        console.log(this.serviceChoices);
        console.log('====================================');
        console.log('====================================');
        console.log(this.serviceChoicesOptionValue);
        console.log('====================================');
        console.log('====================================');
        console.log(this.location);
        console.log('====================================');
        console.log('====================================');
        console.log(this.startDate);
        console.log('====================================');
        console.log('====================================');
        console.log(this.starttime);
        console.log('====================================');
        console.log('====================================');
        console.log(this.detail);
        console.log('====================================');
        for (let i = 0; i < this.serviceChoicesOptionValue.length; i++) {
            let temparr=[]
            for (let y = 0; y < this.serviceChoicesOptionValue[i].value.length; y++) {
                temparr.push(this.serviceChoicesOptionValue[i].value[y].title)
                
            }
            this.dataforvalue.push(temparr)
            
        }
        console.log(this.dataforvalue);
        
    },

}
</script>

<style>
</style>