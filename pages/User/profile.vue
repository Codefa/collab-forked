<template>
  <div class="mx-auto">
    <b-col>
      <b-card bg-variant="dark" text-variant="white" title="Book unique homes and experiences.">
        <p class="card-text">
          <b-input-group>
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-btn variant="info"><i class="material-icons">
                  search
                </i></b-btn>
            </b-input-group-append>
          </b-input-group>
          <!-- map autocomplete -->
          <!-- <div id="searchBar" @keydown.enter="search">
            <gmap-autocomplete :select-first-on-enter="true" class="form-control" @place_changed="setPlace">
            </gmap-autocomplete>
          </div> -->
          <!-- map autocomplete end -->
        </p>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
}
</script>

<style>

/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
