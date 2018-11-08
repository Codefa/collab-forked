<template>
  <div>
    <b-container>
      <div id="become_partner" class="bg header_page py-5">
        <b-row>
          <b-col cols="6">
            <div class="site_heading">
              <h1>Become a partner</h1>
              <p class="subheading">Start posting your property</p>
               <b-button href="/become-partner/resort/info" variant="primary"
                >Get started</b-button
              >
              <a href="#" class="underline">Learn more ›</a>
            </div>
          </b-col>
          <b-col cols="6 text-right">
            <img
              class="img_responsive"
              src="https://images.pexels.com/photos/275766/pexels-photo-275766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </b-col>
        </b-row>
      </div>
      <hr class="py-5" />
      <section id="benefits">
        <b-row>
          <b-col class="page_header">
            <div class="page_header__text">
              <h1 class="page_title">Come diventare partner di Sauspa</h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Install Bodymovin</h3>
            <p>
              Bodymovin is a plugin for After Effects that can export animation
              in json data format for Lottie to use.
            </p>
            <a href="https://github.com/bodymovin/bodymovin">BodyMovin</a>
          </b-col>
          <b-col>
            <h3>Install Bodymovin</h3>
            <p>
              Bodymovin is a plugin for After Effects that can export animation
              in json data format for Lottie to use.
            </p>
            <a href="https://github.com/bodymovin/bodymovin">BodyMovin</a>
          </b-col>
          <b-col>
            <h3>Install Bodymovin</h3>
            <p>
              Bodymovin is a plugin for After Effects that can export animation
              in json data format for Lottie to use.
            </p>
            <a href="https://github.com/bodymovin/bodymovin">BodyMovin</a>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>


<script>
export default {
  name: 'Index',
  components: {},
  data () {
    return {}
  }
}
</script>


<style scoped>
h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 48px 0 0.1em;
  color: #222;
}
.site_heading h1 {
  font-size: 50px;
  font-weight: 700;
}
.site_heading p {
  font-size: 20px;
  font-weight: 600;
}
.site_heading a.underline {
  text-decoration: none;
  color: var(--primary);
  margin-left: 20px;
  font-size: 18px;
  font-weight: 600 !important;
  font-weight: normal;
  padding-bottom: 0.01em;
  border-bottom: 1px solid var(--primary);
  transition: 0.2s ease all;
}
.btn {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.sub_nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
a.nav-link.active {
  border-bottom: 2px solid;
}
.img_responsive {
  width: auto;
  max-height: 400px;
  box-shadow: -10px 5px 50px -5px rgba(0, 0, 0, 0.5);
}
</style>
