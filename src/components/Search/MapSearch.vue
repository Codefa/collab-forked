<template>
    <div>
        <GmapMap :center="{lat:0, lng:0}" :zoom="2" style="width: auto; height: 300px">
            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" label="$" />
        </GmapMap>
    </div>
</template>

<script>
    import axios from 'axios'
    // import { EventBus } from '@/event-bus.js'
    export default {
        name: 'MapSearch',
        // props: {
        //   markers: {
        //     type: Array,
        //     required: true
        //   }
        // },
        data() {
            return {
                markers: []
            }
        },
        computed: {
            place() {
                return this.$store.getters.place
            }
        },
        created() {
            this.fetchNearestLocations()
        },
        methods: {
            fetchNearestLocations() {
                axios.get('https://raw.githubusercontent.com/Codefa/nuxt-static-test/master/resorts.json')
                    .then(response => {
                        let data = response.data
                        for (const key in data) {
                            this.markers.push({
                                position: {
                                    lat: parseFloat(data[key].lat),
                                    lng: parseFloat(data[key].lng)
                                }
                            })
                        }
                    })
            }
        }
    }

</script>
