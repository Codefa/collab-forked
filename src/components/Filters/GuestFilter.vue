<template>
  <div>
    <b-btn v-b-toggle.collapse1 variant="primary">Guests</b-btn>
    <b-collapse id="collapse1" class="mt-2">
      <div class="my-4" ref="form">
        adult -
        <b-button size="sm" variant="secondary" @click="decreaseAdults(adult)">
          _
        </b-button>
        <h3>{{adult.num}}</h3>
        <b-button size="sm" variant="secondary" @click="increaseAdults(adult)">
          +
        </b-button>
        <br>
        children
        (Age 2 - 12) -
        <b-button size="sm" variant="secondary" @click="decreaseChildren(children)">
          _
        </b-button>
        <h3>{{children.num}}</h3>
        <b-button size="sm" variant="secondary" @click="increaseChildren(children)">
          +
        </b-button>
        <br>
        Babies
        Less than 2 -
        <b-button size="sm" variant="secondary" @click="decreaseBabies(Babies)">
          _
        </b-button>
        <h3>{{Babies.num}}</h3>
        <b-button size="sm" variant="secondary" @click="increaseBabies(Babies)">
          +
        </b-button>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
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

