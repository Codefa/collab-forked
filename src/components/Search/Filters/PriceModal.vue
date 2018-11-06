<template>
  <div>
    <div class="overlay_mask">
      <div class="filter_wrapper">
        <div class="picker_container">
          <div class="filter_body">
            <slot name="header">
              <b-col>
                The average nightly price is $73
                <br>
              </b-col>
            </slot>
            <slot name="body">
              <b-col>
                <b-form-input id="range" type="range" v-model="price" max="1000" min="10"></b-form-input>
                <br>
                <span class="mr-sm-2">${{ price }}</span>
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
      price: 10
    }
  },
  methods: {
    getdata () {
      console.log(this.price)
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
  font-family: Helvetica, Arial, sans-serif;
}

.filter_body {
  margin: 20px 0;
}
</style>
