<template>
    <section id="destinations">
        <b-container>
            <b-row>
                <b-col>
                    <h1 class="page_title">Destinations</h1>
                    <a href="/explore" id="view_more">view more</a>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="2">
                    <a href="#">
                        <div class="item_city">
                            <div class="item_city__img" style="background-image: url(https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large);"></div>
                            <div class="_wyr5tw"></div>
                            <div class="item_city__desc">
                                <span class="item_city__name">Miami </span>
                                <span class="item_city__price">22€ per person</span>
                            </div>
                        </div>
                    </a>
                </b-col>
                <b-col cols="2">
                    <a href="#">
                        <div class="item_city">
                            <div class="item_city__img" style="background-image: url(https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large);"></div>
                            <div class="_wyr5tw"></div>
                            <div class="item_city__desc">
                                <span class="item_city__name">Tokyo</span>
                                <span class="item_city__price">22€ per person</span>
                            </div>
                        </div>
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
  name: 'Destinations',
  data () {
    return {}
  }
}

</script>
