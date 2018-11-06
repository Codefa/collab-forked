<template>
  <div id="filterNav">
    <div id="subnav_inner" class="nav_filter nav_filter_resorts">
      <b-nav>
        <b-nav-item active>
          <app-datefilter></app-datefilter>
        </b-nav-item>
        <b-nav-item>
          <div id="show-modal-guest" @click="showGuestFilter = true">Guest</div>
        </b-nav-item>
        <b-nav-item>
          <div id="show-modal-price" @click="showPriceFilter = true">Price</div>
        </b-nav-item>
        <b-nav-item-dropdown text="Sort  by" right>
          <b-dropdown-item href="#">Top rated</b-dropdown-item>
          <b-dropdown-item href="#">Last added</b-dropdown-item>
          <b-dropdown-item href="#"></b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div>
    <pricemodal v-if="showPriceFilter" @close="showPriceFilter = false">
      <h3 slot="header">custom header</h3>
    </pricemodal>
    <guestmodal v-if="showGuestFilter" @close="showGuestFilter = false">
      <h3 slot="header">custom header</h3>
    </guestmodal>
  </div>
</template>


<script>
import pricemodal from '@/components/Search/Filters/PriceModal'
import guestmodal from '@/components/Search/Filters/GuestModal'

export default {
  name: 'FilterNav',
  components: {
    guestmodal,
    pricemodal
  },
  data () {
    return {
      showPriceFilter: false,
      showGuestFilter: false
    }
  }
}
</script>

<style scoped>
  .nav_filter {
    position: fixed;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 100;
    background: #fff;
    height: 50px;
    z-index: 1000;
  }

  .overlay_mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: table;
    transition: opacity 0.3s ease;
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
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .filter_body {
    margin: 20px 0;
  }
</style>
