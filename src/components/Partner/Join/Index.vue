<template>
    <div>
        <header id="become_partner" class="bg header_page bg-primary text-white">
            <b-container>
                <b-row>
                    <b-col cols="6">
                        <div class="site-heading">
                            <h1>Become partner</h1>
                            <p class="subheading">Subheading</p>
                        </div>
                        <b-link href="#signin" @click="flip('signin', $event)" class="btn btn-light">Get started</b-link>
                        <b-button href="#" variant="outline-light">Read more</b-button>

                    </b-col>
                    <b-col cols="6">
                        <img src="">
                    </b-col>
                </b-row>
            </b-container>
        </header>
        <div id="FeaturesNav">
            <div class="sub_nav">
                <b-container>
                    <b-nav>
                        <b-nav-item active>Features</b-nav-item>
                        <b-nav-item>Security</b-nav-item>
                        <b-nav-item>Payment</b-nav-item>
                        <b-nav-item>Help?</b-nav-item>
                    </b-nav>
                </b-container>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TopNav",
        data() {
            return {}
        },

    };

</script>

<style>
    .sub_nav {
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    a.nav-link.active {
        border-bottom: 2px solid;
    }

</style>
