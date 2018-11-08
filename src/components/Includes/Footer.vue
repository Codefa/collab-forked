<template>
  <div v-if="$route.name != 'Search'">
    <section class="benefits footer-benefits mt-5">
      <b-container>
        <b-row>
          <b-col class="benefit col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="benefit-icon"><i class="fa fa-phone"></i></div>
            <div class="benefit-body">
              <h4 class="benefit-title">24/7 customer support</h4>
              <p class="benefit-desc">If you need help while traveling or hosting, contact us at our toll-free number.</p>
            </div>
          </b-col>
          <b-col class="benefit col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="benefit-icon"><i class="fa fa-phone"></i></div>
            <div class="benefit-body">
              <h4 class="benefit-title">24/7 customer support</h4>
              <p class="benefit-desc">If you need help while traveling or hosting, contact us at our toll-free number.</p>
            </div>
          </b-col>
          <b-col class="benefit col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="benefit-icon"><i class="fa fa-phone"></i></div>
            <div class="benefit-body">
              <h4 class="benefit-title">24/7 customer support</h4>
              <p class="benefit-desc">If you need help while traveling or hosting, contact us at our toll-free number.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <footer>
      <b-container>
        <b-row>
          <b-col>
            <div class="footer_widget">
              <h3>Company</h3>
              <ul class="items-block">
                <li>
                  <b-link href="#">About us</b-link>
                </li>
                <li>
                  <b-link href="#">About us</b-link>
                </li>
                <li>
                  <b-link href="#">About us</b-link>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <div class="footer_widget">
              <h3>Partner</h3>
              <ul class="items-block">
                <li>
                  <b-link href="/become-partner">Add your spa</b-link>
                </li>
                <li>
                  <b-link href="#">About us</b-link>
                </li>
                <li>
                  <b-link href="#">About us</b-link>
                </li>
              </ul>
            </div>
          </b-col>

        </b-row>
        <hr>
        <b-row>
          <b-col>
            <span>&copy; 2018 Sauspa. All rights reserved</span>
          </b-col>
          <b-col class="text-right">
            <div>
              <b-dropdown id="ddown-dropup" dropup text="English" variant="light" size="sm">
                <b-dropdown-item href="#">Italiano</b-dropdown-item>
                <b-dropdown-item href="#">Spanish</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>

              <b-dropdown id="ddown-dropup" dropup text="€" variant="light" size="sm">
                <b-dropdown-item href="#">$</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>

          </b-col>

        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}

</script>
