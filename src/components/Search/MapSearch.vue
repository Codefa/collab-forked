<template>
  <div>
    <gmap-map :center="center" :zoom="2" style="width: 100%; height: 500px">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <b-row>
        <b-col lg="3" xl="3">
          <div id="1" class="item_block small">
            <div class="listing_thumb">
              <b-link>
                <img src="https://sauspa.com/uploads/resorts/spa3.jpg">
              </b-link>
              <div class="listing_fav_icon">
                <i class="fa fa-heart-o fa-2x"></i>
              </div>
            </div>
            <div class="listing_meta">
              <b-link class="tag">
                <span class="1" style="color: rgb(166, 29, 85);">Hotel spa</span>
              </b-link>
              <b-link class="name">
                {{ infoContent.name }}
              </b-link>
              <span class="price">42.00 per person</span>
              <span class="listing_rating">
                <i class="fa fa-star"></i><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
      </gmap-info-window>
      <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)" :label="m.price">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'MapSearch',
  data () {
    return {
      center: {
        lat: 47.376332,
        lng: 8.547511
      },
      infoContent: '',
      infoText: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  computed: {
    // icon () {
    //   const url = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    //   return url
    // },
    place () {
      return this.$store.getters.place
    },
    markers () {
      return this.$store.getters.setMarkers
    },
    labels () {
      return this.$store.getters.setLoadedListsPrice
    }
  },
  created () {
    this.$store.dispatch('fetchNearestLocations')
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    }
  }
}
</script>

<style scoped>

</style>
