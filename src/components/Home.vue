<template>
    <b-container>
        <div id="Home">
            <div id="searchBar" @keydown.enter="search">
                <GAutoComplete />
            </div>
        </div>
    </b-container>

</template>

<script>
    import GAutoComplete from '@/components/Search/GAutoComplete'
    import VueTinySlider from 'vue-tiny-slider'

    export default {
        name: 'Home',
        components: {
            GAutoComplete,
            'tiny-slider': VueTinySlider
        },
        data() {
            return {
                curSlide: 0,
                options: {
                    draggable: true,
                    loop: false,
                    perPage: 5
                }
            }
        },
        computed: {
            loadedLists() {
                return this.$store.getters.loadedLists
            },
            loadedLuxury() {
                return this.$store.getters.loadedLuxury
            }
        },
        mounted() {
            this.$store.dispatch('loadedLists')
            this.$store.dispatch('loadedLuxury')
        },
        methods: {
            search() {
                this.$router.push('/search')
            }
        }
    }

</script>

<style scoped>
    body {
        background: rgb(52, 54, 58);
        padding: 20px;
        font-family: Helvetica;
    }

    #app>div {
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        transition: all 0.2s;
        max-width: 800px;
        margin: 25px auto;
    }

    h2 {
        font-weight: bold;
        margin-bottom: 15px;
    }

    span {
        color: #777;
        font-size: 10px;
    }

    .btn {
        display: inline-block;
        border: 2px solid #3a76c5;
        color: #3a76c5;
        padding: 4px 10px;
        transition-duration: 0.2s;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
    }

    .btn:hover {
        color: #fff;
        background: #3a76c5;
    }

    a {
        color: #3a76c5;
    }

    input {
        border: 2px solid #3a76c5;
        color: #3a76c5;
        padding: 5px 10px;
        display: inline-block;
        vertical-align: top;
    }

    .s {
        overflow: hidden;
        min-height: 200px;
    }

    .s .slide {
        height: 156px;
        line-height: 156px;
        text-align: center;
        font-size: 24px;
    }

    pre {
        white-space: pre-line;
        padding: 18px;
        background: #cecece;
        border-radius: 4px;
    }

    .intro img {
        max-width: 128px;
    }

    .intro {
        text-align: center;
    }

    .title {
        font-size: 24px;
        color: #777;
        text-align: center;
        border-bottom: 1px solid #777;
    }

    .demolink {
        font-size: 12px;
        margin-top: 12px;
    }

</style>
