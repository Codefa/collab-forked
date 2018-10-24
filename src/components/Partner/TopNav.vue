<template>
    <div id="TopNav">
        <div class="sub_nav" id="partner_sub_nav">
            <b-container>
                <b-nav>
                    <b-nav-item active>Dashboard</b-nav-item>
                    <b-nav-item>Analytics</b-nav-item>
                    <b-nav-item>Bookings</b-nav-item>
                    <b-nav-item>Listings</b-nav-item>
                    <b-nav-item>Calendar</b-nav-item>
                    <b-nav-item>Settings</b-nav-item>
                    <b-nav-item-dropdown id="nav7_ddown" text="Marketing" extra-toggle-classes="nav-link-custom" right>
                        <b-dropdown-item>one</b-dropdown-item>
                        <b-dropdown-item>two</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>three</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav>
            </b-container>
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

</style>
