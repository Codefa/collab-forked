<template>
  <div>
    <div class="datepicker-trigger">
      <span id="datepicker-button-trigger">{{ formatDates(buttonDateOne, buttonDateTwo) || 'Select dates' }}</span>

      <airbnb-style-datepicker
          :trigger-element-id="'datepicker-button-trigger'"
          :mode="'range'"
          :date-one="buttonDateOne"
          :date-two="buttonDateTwo"
          :min-date="'2018-11-01'"
          :fullscreen-mobile="true"
          :months-to-show="2"
          :offset-y="10"
          :trigger="trigger"
          v-on:date-one-selected="function(val) { buttonDateOne = val }"
          v-on:date-two-selected="function(val) { buttonDateTwo = val }"
          v-on:closed="onClosed"
          v-on:previous-month="onMonthChange"
          v-on:next-month="onMonthChange"
      >
      </airbnb-style-datepicker>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  data () {
    return {
      dateFormat: 'D MMM',
      buttonDateOne: '',
      buttonDateTwo: '',
      trigger: false
    }
  },
  methods: {
    formatDates: function (dateOne, dateTwo) {
      var formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    },
    onClosed: function () {
      var datesStr = this.formatDates(this.buttonDateOne, this.buttonDateTwo)
      console.log('Dates Selected: ' + datesStr)
      this.trigger = false
    },
    triggerDatepicker: function () {
      this.trigger = !this.trigger
    },
    onMonthChange: function (dates) {
      console.log('months changed', dates)
    }
  }
}
</script>

<style scoped>
 #datepicker-button-trigger {
  background: #008489;
  border: 1px solid #008489;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  min-width: 200px
}
</style>

