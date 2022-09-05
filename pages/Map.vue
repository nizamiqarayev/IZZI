<template>
    <div>
        <label>
            AutoComplete
            <GmapAutocomplete ref="gmapAutocomplete" :position.sync="markers[0].position" @keyup.enter="usePlace"
                @place_changed="setPlace">
            </GmapAutocomplete>
            <button @click="usePlace">Add</button>
        </label>
        <br>
        <div>
            <input class="input" v-on:keypress="getloc" v-model="inputsearch" ref="searchTextField" type="text">
        </div>
        <br />

        <gmap-map :center="center" :zoom="13" map-type-id="terrain" style="width: 50%; height: 300px">
            <gmap-marker @dragend="updateMaker" :key="index" v-for="(m, index) in markers" :position="m.position"
                :clickable="true" :draggable="true" @click="center = m.position"></gmap-marker>

        </gmap-map>

    </div>
</template>

<script>

export default {
    head() {
        return {
            script: [
                { src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBbOzcp6mcetJQN-VfO8AqlRakb9cI7gYQ&libraries=places` }
            ]
        };
    },
    data() {
        return {
            center: { lat: 40.3935335443, lng: 49.866901269 },
            markers: [{
                position: { lat: 40.3935335443, lng: 49.866901269 }
            }],
            place: null,
            inputsearch:'',
        }
    },
    description: 'Autocomplete Example (#164)',
    methods: {
        setPlace(place) {
            this.place = place
        },
        setDescription(description) {
            this.description = description;
        },
        usePlace(place) {
            if (this.place) {
                var newPostion = {
                    lat: this.place.geometry.location.lat(),
                    lng: this.place.geometry.location.lng(),
                };
                this.center = newPostion;
                this.markers[0].position = newPostion;
                this.place = null;
            }
        },
        updateMaker: function (event) {
            console.log('updateMaker, ', event.latLng.lat());
            this.markers[0].position = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            }
            const geocoder = new google.maps.Geocoder()
            geocoder.geocode({ 'latLng': event.latLng }, (result, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    this.$refs.gmapAutocomplete.$refs.input.value = result[0].formatted_address
                }
            })
        },
        getloc(){
            
            let searchBox = new google.maps.places.Autocomplete(this.$refs.searchTextField)
            searchBox.setBounds({lat: 40, lng:49 })
            console.log(searchBox);
            
        }
    },
}
</script>