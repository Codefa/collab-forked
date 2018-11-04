<template>
  <div id="search">
    <FilterNav />
    <br><br><br>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <div id="lisitngs_src">
            <h1>search page</h1>
            <LastListings />
          </div>
        </b-col>
        <b-col sm="6">
          <div ijd="map_src">
            <div>
              <label class="switch">
                <input type="checkbox" v-model="showMap" @click="showMap = !showMap">
                <span class="slider"></span>
              </label>
              Show Map
            </div>
            <div v-show="showMap">
              <MapSearch />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import FilterNav from '@/components/Search/FilterNav'
import MapSearch from '@/components/Search/MapSearch'
import LastListings from '@/components/Homepage/LastListings'

export default {
  name: 'Search',
  components: {
    FilterNav,
    LastListings,
    MapSearch
  },
  data () {
    return {
      showMap: true
    }
  },
  computed: {
    setMarkers () {
      return this.$store.getters.setMarkers
    }
  },
  methods: {
    usePlace (place) {
      this.$store.commit('usePlace', place)
    },
    setPlaceText (place) {
      this.place = place
    },
    getPlacedetails (place) {
      this.latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    }
  }
}
</script>

<style scoped>
  div#map_src {
    position: fixed;
    width: 40%;
    height: 100vh;
    background: #f5f5f5;
    display: inline-block;
    /* float: left; */
  }

  div#lisitngs_src {
    width: 60%;
    display: inline-block;
    /* float: left; */
  }

  .switch input {
    display:none;
}
.switch {
    display:inline-block;
    width:60px;
    height:30px;
    margin:8px;
    transform:translateY(50%);
    position:relative;
}

.slider {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    border-radius:30px;
    box-shadow:0 0 0 2px #777, 0 0 4px #777;
    cursor:pointer;
    border:4px solid transparent;
    overflow:hidden;
     transition:.4s;
}
.slider:before {
    position:absolute;
    content:"";
    width:100%;
    height:100%;
    background:#777;
    border-radius:30px;
    transform:translateX(-30px);
    transition:.4s;
}

input:checked + .slider:before {
    transform:translateX(30px);
    background:limeGreen;
}
input:checked + .slider {
    box-shadow:0 0 0 2px limeGreen,0 0 2px limeGreen;
}
</style>
