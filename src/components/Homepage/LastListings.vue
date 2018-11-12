<template>
  <div>
    <div id="preloader" v-if="loading">
      <div class="la-ball-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <section id="last_listing" v-else>
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
                  <star-rating :increment="0.01" :fixed-points="2" :star-size="15"></star-rating>
                </span>
              </div>
            </div>
          </b-col>
          <b-pagination-nav :link-gen="linkGen" :number-of-pages="numPages" v-model="currentPage" />
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LastListings',
  data () {
    return {
      currentPage: 1,
      perPage: 4,
      rating: 3
    }
  },
  computed: {
    lists () {
      const items = this.$store.getters.loadedLists
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    numPages () {
      return Math.ceil(this.$store.getters.loadedLists.length / this.perPage)
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    linkGen (pageNum) {
      return {
        path: '?page=' + pageNum
      }
    }
  }
}
</script>

<style scoped>
  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */

  .la-ball-pulse > div:nth-child(1) {
    -webkit-animation-delay: -200ms;
    -moz-animation-delay: -200ms;
    -o-animation-delay: -200ms;
    animation-delay: -200ms;
  }

  .la-ball-pulse > div:nth-child(2) {
    -webkit-animation-delay: -100ms;
    -moz-animation-delay: -100ms;
    -o-animation-delay: -100ms;
    animation-delay: -100ms;
  }

  .la-ball-pulse > div:nth-child(3) {
    -webkit-animation-delay: 0ms;
    -moz-animation-delay: 0ms;
    -o-animation-delay: 0ms;
    animation-delay: 0ms;
  }

  .la-ball-pulse > div {
    background: #0097a6;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 4px;
    border-radius: 100%;
    -webkit-animation: ball-pulse 1s ease infinite;
    -moz-animation: ball-pulse 1s ease infinite;
    -o-animation: ball-pulse 1s ease infinite;
    animation: ball-pulse 1s ease infinite;
  }

  /*
   * Animation
   */
  @-webkit-keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -webkit-transform: scale(0.01);
      transform: scale(0.01);
    }
  }

  @-moz-keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -moz-transform: scale(0.01);
      transform: scale(0.01);
    }
  }

  @-o-keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -o-transform: scale(0.01);
      transform: scale(0.01);
    }
  }

  @keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -webkit-transform: scale(0.01);
      -moz-transform: scale(0.01);
      -o-transform: scale(0.01);
      transform: scale(0.01);
    }
  }
</style>
