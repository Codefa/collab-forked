<template>
  <div>
    <div class="overlay_mask">
      <div class="filter_wrapper" @click="$emit('close')">
        <div class="picker_container" @click.stop>
          <div class="filter_body">
            <slot name="header">
              <b-col>
                Guests
                <br>
              </b-col>
            </slot>
            <slot name="body">
              <b-col>
                <div class="my-4" ref="form">
                  adult -
                  <b-button class="disable" id="qty_btn_min" @click="decreaseAdults(adult)">
                    _
                  </b-button>
                  <h3>{{adult.num}}</h3>
                  <b-button id="qty_btn_plus" @click="increaseAdults(adult)">
                    +
                  </b-button>
                  <br>
                  children
                  (Age 2 - 12) -
                  <b-button id="qty_btn_min" @click="decreaseChildren(children)">
                    _
                  </b-button>
                  <h3>{{children.num}}</h3>
                  <b-button sid="qty_btn_plus" @click="increaseChildren(children)">
                    +
                  </b-button>
                  <br>
                  Babies
                  Less than 2 -
                  <b-button id="qty_btn_min" @click="decreaseBabies(Babies)">
                    _
                  </b-button>
                  <h3>{{Babies.num}}</h3>
                  <b-button id="qty_btn_plus" @click="increaseBabies(Babies)">
                    +
                  </b-button>
                </div>
              </b-col>
            </slot>
          </div>
          <div class="filter_footer">
            <slot name="footer">
              <b-btn size="sm" @click="$emit('close'); getdata()">
                OK
              </b-btn>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      adult: {
        num: 2
      },
      children: {
        num: 0
      },
      Babies: {
        num: 0
      }
    }
  },
  methods: {
    getdata () {
      console.log(this.adult)
    },
    increaseAdults (adult) {
      if (adult.num < 15) {
        adult.num += 1
      }
    },
    decreaseAdults (adult) {
      if (adult.num > 1) {
        adult.num -= 1
      }
    },
    increaseChildren  (children) {
      if (children.num < 15) {
        children.num += 1
      }
    },
    decreaseChildren (children) {
      if (children.num > 0) {
        children.num -= 1
      }
    },
    increaseBabies (Babies) {
      if (Babies.num < 5) {
        Babies.num += 1
      }
    },
    decreaseBabies (Babies) {
      if (Babies.num > 0) {
        Babies.num -= 1
      }
    }
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px !important;
}

.filter_body {
  margin: 20px 0;
}
</style>
