<template>
  <div>
    <b-col cols="12">
      <b-card :title="name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <p class="card-text">
          {{ email }}
        </p>
        {{ address }} - {{ id }}
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'ListPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    // listImage: {
    //   type: String,
    //   required: true
    // },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  }
}
</script>

