<template>
  <div name="filter_picker">
    <div class="overlay_mask">
      <div class="filter_wrapper" @click="$emit('close')">
        <div class="picker_container">
          <div class="filter_body">
            <pricerangefilter></pricerangefilter>
          </div>
          <div class="filter_footer">
            <b-btn size="sm">close</b-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pricerangefilter from '@/components/Search/Filters/Price/PriceRange'

export default {
  name: 'modal',
  components: {
    pricerangefilter
  }
}
</script>

<style>
.overlay_mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .5);
  display: table;
  transition: opacity .3s ease;
}

.filter_wrapper {
  display: table-cell;
  vertical-align: middle;
}

.picker_container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .1);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.filter_body {
  margin: 20px 0;
}
</style>
