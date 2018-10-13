<template>
  <div id="Home">
    <b-col>
      <b-card bg-variant="dark" text-variant="white" title="Book unique homes and experiences." class="text-center">
        <span class="card-text">
          <div id="searchBar" @keydown.enter="search">
            <GAutoComplete />
          </div>
        </span>
      </b-card>
    </b-col>

    <h3>Top items</h3>
    <siema ref="siema" :current.sync="curSlide" :options="options" class="siema s">
      <div class="slide">
        <span v-for="list in loadedLists" :key="list.id">
          <b-card :title="list.name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
            <p class="card-text">
              {{ list.email }}
            </p>
            {{ list.address }} - {{ list.id }}
          </b-card>
        </span>
      </div>
    </siema>
    <!-- some actions.. -->
    <div class="btn" @click="$refs.siema.prev()">Prev</div>
    <div class="btn" @click="$refs.siema.next()">Next</div>
    <!-- see :current.sync in action...)  -->
    <div class="btn">Current slide: {{ curSlide }}</div>
    <br><br>

    <h3>luxury items</h3>
    <siema ref="siemaLuxury" :current.sync="curSlide" :options="options" class="siema s">
      <div class="slide">
        <span v-for="list in loadedLuxury" :key="list.name">
          <b-col cols="12">
            <b-card :title="list.name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
              <p class="card-text">
                {{ list.email }}
              </p>
              {{ list.address }} - {{ list.id }}
            </b-card>
          </b-col>
        </span>
      </div>
    </siema>
    <!-- some actions.. -->
    <div class="btn" @click="$refs.siema.prev()">Prev</div>
    <div class="btn" @click="$refs.siema.next()">Next</div>
    <!-- see :current.sync in action...)  -->
    <div class="btn">Current slide: {{ curSlide }}</div>
  </div>
</template>

<script>
import GAutoComplete from '@/components/Search/GAutoComplete'
import VueTinySlider from 'vue-tiny-slider'

export default {
  name: 'Home',
  components: {
    GAutoComplete,
    'tiny-slider': VueTinySlider
  },
  data () {
    return {
      curSlide: 0,
      options: {
        draggable: true,
        loop: false,
        perPage: 5
      }
    }
  },
  computed: {
    loadedLists () {
      return this.$store.getters.loadedLists
    },
    loadedLuxury () {
      return this.$store.getters.loadedLuxury
    }
  },
  mounted () {
    this.$store.dispatch('loadedLists')
    this.$store.dispatch('loadedLuxury')
  },
  methods: {
    search () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
    body {
      background: rgb(52, 54, 58);
      padding: 20px;
      font-family: Helvetica;
    }
    #app>div {
      background: #fff;
      border-radius: 4px;
      padding: 20px;
      transition: all 0.2s;
      max-width: 800px;
      margin: 25px auto;
    }
    h2 {
      font-weight: bold;
      margin-bottom: 15px;
    }
    span {
      color: #777;
      font-size: 10px;
    }
    .btn {
      display: inline-block;
      border: 2px solid #3a76c5;
      color: #3a76c5;
      padding: 4px 10px;
      transition-duration: 0.2s;
      cursor: pointer;
      display: inline-block;
      vertical-align: top;
    }
    .btn:hover {
      color: #fff;
      background: #3a76c5;
    }
    a {
      color: #3a76c5;
    }
    input {
      border: 2px solid #3a76c5;
      color: #3a76c5;
      padding: 5px 10px;
      display: inline-block;
      vertical-align: top;
    }
    .s {
      overflow: hidden;
      min-height: 200px;
    }
    .s .slide {
      height: 156px;
      line-height: 156px;
      text-align: center;
      font-size: 24px;
    }
    pre {
      white-space: pre-line;
      padding: 18px;
      background: #cecece;
      border-radius: 4px;
    }
    .intro img{
      max-width: 128px;
    }
    .intro {
      text-align: center;
    }
    .title {
      font-size: 24px;
      color: #777;
      text-align: center;
      border-bottom: 1px solid #777;
    }
    .demolink {
      font-size: 12px;
      margin-top: 12px;
    }
  </style>

