<template>
<div>
  <b-container>
    <div>
      <b-col>
        <b-card bg-variant="dark" text-variant="white" title="Book unique homes and experiences.">
          <span class="card-text">
            <div id="searchBar" @keydown.enter="search">
              <gmap-autocomplete :select-first-on-enter="true" class="form-control" @place_changed="setPlace">
              </gmap-autocomplete>
            </div>
          </span>
        </b-card>
      </b-col>
    </div>
    <div class="siema">
      <no-ssr>
        <siema ref="siema" :options="options">
          <ListItems :lists="loadedLists" class="mt-3" />
        </siema>
        <button @click="$refs.siema.prev()">Prev</button>
        <button @click="$refs.siema.next()">Next</button>
      </no-ssr>
    </div>
  </b-container>
  </div>
</template>

<script>
import ListItems from '@/components/Lists/ListItems'

export default {
  components: {
    ListItems
  },
  data () {
    return {
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
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    },
    setPlace () {
      console.log('setplace initiated')
    }
  }
}
</script>

<style scoped>
</style>
