<template>
  <div>
    <b-container fluid>
      <b-row>
      <ListPreview v-for="list in lists"
        :key="list.id"
        :id="list.id"
        :name="list.name"
        :email="list.email"
        :address="list.address" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ListPreview from '@/components/Lists/ListPreview'

export default {
  components: {
    ListPreview
  },
  props: {
    lists: {
      type: Array,
      required: true
    }
  }
}
</script>

