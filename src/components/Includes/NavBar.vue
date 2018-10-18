<template>
    <div>
        <b-navbar toggleable="md" type="light" fixed="top">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="/"><img class="nav-logo" src="https://sauspa.com/assets/img/logo.svg" alt="Sauspa logo">
                <b-badge variant="primary">BETA</b-badge>
            </b-navbar-brand>
            <div v-if="$route.name != 'Home'">
                <MainSearch />
            </div>
            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/explore">Explore</b-nav-item>
                    <b-nav-item href="/search">Search</b-nav-item>
                    <b-nav-item href="/offers">Offers</b-nav-item>
                    <b-nav-item href="/help">Help?</b-nav-item>
                    <b-nav-item href="checkout">Cart</b-nav-item>
                    <b-nav-item-dropdown text="Hi, user" right>
                        <b-dropdown-item href="/user/profile">My profile</b-dropdown-item>
                        <b-dropdown-item href="/user/bookings">My bookings</b-dropdown-item>
                        <b-dropdown-item href="/user/saved">Saved</b-dropdown-item>
                        <b-dropdown-item href="/user/settings">My account</b-dropdown-item>
                        <b-dropdown-item href="/manager/dashboard">Manager centro</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="user/logout">logout</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item @click="flip('signin', $event)" href="#signin">Login</b-nav-item>
                    <b-nav-item @click="flip('signup', $event)" href="#signup">Signup</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import MainSearch from '@/components/Includes/MainSearch'
    import AuthModal from '@/components/Includes/AuthModal'
    import Auth from '@/components/Includes/Auth'
    export default {
        name: 'navbar',
        components: {
            MainSearch,
            AuthModal,
            Auth
        },
        data() {
            return {}
        }
    }

</script>

<style scoped>
    nav.navbar {
        background: #fff;
        border-bottom: 1px solid rgb(0, 0, 0, .1);
    }

    a.navbar-brand img {
        height: 40px;
        width: auto;
    }

</style>
