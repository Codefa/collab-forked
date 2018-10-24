<template>
    <div>
        <Header />
        <TopNav />

        <b-container>
            <section id="counters_overview">
                <b-row>
                    <b-col>
                        <h1 class="page_title">Welcome back, user</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div>
                            <b-card title="200€" sub-title="Sales">
                                <a href="#" class="card-link">Card link</a>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <b-card title="200€" sub-title="Sales">
                                <a href="#" class="card-link">Card link</a>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <b-card title="200€" sub-title="Sales">
                                <a href="#" class="card-link">Card link</a>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
            </section>
            <section id="last_bookings">
                <b-row>
                    <b-col>
                        <h1 class="page_title">Last bookings</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-table striped hover :items="items"></b-table>
                    </b-col>
                </b-row>
            </section>
        </b-container>
    </div>
</template>

<script>
    import TopNav from "@/components/Partner/TopNav";

    const items = [{
            isActive: true,
            age: 40,
            first_name: 'Dickerson',
            last_name: 'Macdonald'
        },
        {
            isActive: false,
            age: 21,
            first_name: 'Larsen',
            last_name: 'Shaw'
        },
        {
            isActive: false,
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson'
        },
        {
            isActive: true,
            age: 38,
            first_name: 'Jami',
            last_name: 'Carney'
        }
    ]


    export default {
        name: "Dashboard",
        components: {
            TopNav
        },
        data() {
            return {
                items: items
            }
        }
    };

</script>
