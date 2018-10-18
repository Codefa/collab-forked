<template>
<div id="search_listings">
<section id="listing_results">    
<b-col cols="12" class="mx-auto" lg="8" md="8">
          <b-card bg-variant="dark" text-variant="white" title="Book unique homes and experiences.">
            <p class="card-text">
              <!-- map autocomplete -->
              <gmap-autocomplete
              :select-first-on-enter="true"
             class="form-control"
              @place_changed="setPlace">
              </gmap-autocomplete>
              <button @click="usePlace">Add</button>
              <!-- map autocomplete end -->
            </p>
          </b-card>
        </b-col>
        <br>
<section id="map_listing">
<button @click="showMap = !showMap">
{{ showMap ? 'Hide' : 'Show' }} Map</button>
<div v-show="showMap">
<GmapMap
  :center="{lat: 0, lng: 0}"
  :zoom="2"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
</section>  
</div>
</div>
</template>

<script>
// import FilterNav from "./FilterNav.vue";

export default {
  // components: FilterNav,
  name: 'SearchListings',
  data() {
		return {
			markers: [],
			place: null,
      showMap: false
		}
	},
  methods: {
    setPlace(place) {
      this.place = place
    },
    usePlace(place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.place = null;
      }
    }
  }
}
</script>
