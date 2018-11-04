<template>
  <section id="last_listing">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="page_title">
            Latest added
          </h1>
          <a href="/#" id="view_more">view more</a>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="3" xl="3" v-for="list in lists" :key="list.id">
          <div id="1" class="item_block small">
            <div class="listing_thumb">
              <b-link :to="'/resort/' + list.id">
                <img src="https://sauspa.com/uploads/resorts/spa3.jpg">
              </b-link>
              <div class="listing_fav_icon">
                <i class="fa fa-heart-o fa-2x"></i>
              </div>
            </div>
            <div class="listing_meta">
              <b-link :to="'/resort/' + list.id" class="tag">
                <span class="1" style="color: rgb(166, 29, 85);">Hotel spa</span>
              </b-link>
              <b-link :to="'/resort/' + list.id" class="name">
                {{ list.name }}
              </b-link>
              <span class="price">42.00 per person</span>
              <span class="listing_rating">
                <i class="fa fa-star"></i><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'LastListings',
  data () {
    return {}
  },
  computed: {
    lists () {
      return this.$store.getters.loadedLists
    }
  }
}
</script>
