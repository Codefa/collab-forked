<template>
    <div id="Settings">
        <UserNav />
        <b-container>
            <b-row>
                <b-col cols="3">
                    <b-list-group>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Morbi leo risus</b-list-group-item>
                        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import UserNav from '@/components/User/UserNav'
    export default {
        name: "Settings",
        components: {
            UserNav,
        },
        data() {
            return {}
        },

    };

</script>

<style>

</style>
