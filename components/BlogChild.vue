<template>
    <section class="w-full bg-main font-averta bg-no-repeat bg-contain bg-left-top">
        
    </section>
</template>

<script>
export default {
    data() {
        return {
            params: this.$route.params
        }
    },

    async asyncData({ }) {
        let {data} = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/blogs/`)
        return { blogs: data }
    },
    methods: {
        message(data) {
            console.log(data);
        },
        date(date) {
            let month
            const new_date = new Date(date);
            switch (new_date.getMonth()) {
                case (0):
                    month = "JAN";
                    break;
                case (1):
                    month = "FEB";
                    break;
                case (2):
                    month = "MAR";
                    break;
                case (3):
                    month = "APR";
                    break;
                case (4):
                    month = "MAY";
                    break;
                case (5):
                    month = "JUN";
                    break;
                case (6):
                    month = "JUL";
                    break;
                case (7):
                    month = "AUG";
                    break;
                case (8):
                    month = "SEP";
                    break;
                case (9):
                    month = "OCT";
                    break;
                case (10):
                    month = "NOV";
                    break;
                case (11):
                    month = "DEC";
                    break;
            }
            return new_date.getDate() + " " + month + " " + new_date.getFullYear()

        },
    }
}
</script>