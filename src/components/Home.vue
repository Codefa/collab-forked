<template>
    <div class="Home">

        <section id="intro_search">
            <b-container>
                <b-row>
                    <b-col cols="8">
                        <h1 class="header-title">
                            <span class="text-primary">Sauspa</span><br>Book unique experiences</h1>
                        <div>
                            <div id="main_home_search" class="card p-3">
                                <MainSearch />
                            </div>
                            <a aria-disabled="false" class="float-right link_all_cities" href="/explore">See all cities</a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section id="home_categories">
            <b-container>
                <b-row>
                    <b-col>
                        <h1 class="page_title">
                            Discover Sauspa
                        </h1>
                        <a href="/search" id="view_more">
                            view_more</a>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" class="mb-3">
                        <a href="<?php echo base_url('offers');?>">
                            <div class="item_block_inline shadow-sm">
                                <div class="item_block_inline_img">
                                    <img src="">
                                </div>
                                <div class="item_block_inline_body">
                                    <span class="title">
                                        Hotel spa</span>
                                </div>

                            </div>
                        </a>
                    </b-col>
                </b-row>

            </b-container>
        </section>
        <section id="banner">
            <b-container>
                <b-row>
                    <b-col>
                        <b-card overlay img-src="" img-alt="Welcome to Sauspa" title="Welcome to Sauspa" sub-title="Subtitle" class="banner_big">
                            <p class="card-text">
                                Some quick example text to build on the card and make
                                up the bulk of the card's content.
                            </p>
                            <b-button href="/luxury" variant="light">
                                Read more
                            </b-button>
                        </b-card>

                    </b-col>
                </b-row>
            </b-container>
        </section>
        <Destinations />
        <UserLastViews />
        <LastListings />
        <LastLuxury />
    </div>
</template>

<script>
import MainSearch from '@/components/Includes/MainSearch'
import LastListings from '@/components/Homepage/LastListings'
import UserLastViews from '@/components/Includes/UserLastViews'
import LastLuxury from '@/components/Homepage/LastLuxury'
import Destinations from '@/components/Homepage/Destinations'

export default {
  name: 'Home',
  components: {
    MainSearch,
    LastListings,
    UserLastViews,
    LastLuxury,
    Destinations
  },
  data () {
    return {}
  }
}

</script>
<style>
    #MainSearch input {
        border: none;
    }

</style>
