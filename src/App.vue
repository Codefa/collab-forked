<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <!-- <div id="preloader">
      <div class="la-ball-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /*!
   * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
   * Copyright 2015 Daniel Cardoso <@DanielCardoso>
   * Licensed under MIT
   */

  .la-ball-pulse > div:nth-child(1) {
    -webkit-animation-delay: -200ms;
    -moz-animation-delay: -200ms;
    -o-animation-delay: -200ms;
    animation-delay: -200ms;
  }

  .la-ball-pulse > div:nth-child(2) {
    -webkit-animation-delay: -100ms;
    -moz-animation-delay: -100ms;
    -o-animation-delay: -100ms;
    animation-delay: -100ms;
  }

  .la-ball-pulse > div:nth-child(3) {
    -webkit-animation-delay: 0ms;
    -moz-animation-delay: 0ms;
    -o-animation-delay: 0ms;
    animation-delay: 0ms;
  }

  .la-ball-pulse > div {
    background: #0097a6;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 4px;
    border-radius: 100%;
    -webkit-animation: ball-pulse 1s ease infinite;
    -moz-animation: ball-pulse 1s ease infinite;
    -o-animation: ball-pulse 1s ease infinite;
    animation: ball-pulse 1s ease infinite;
  }

  /*
   * Animation
   */
  @-webkit-keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -webkit-transform: scale(0.01);
      transform: scale(0.01);
    }
  }

  @-moz-keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -moz-transform: scale(0.01);
      transform: scale(0.01);
    }
  }

  @-o-keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -o-transform: scale(0.01);
      transform: scale(0.01);
    }
  }

  @keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    30% {
      opacity: 0.1;
      -webkit-transform: scale(0.01);
      -moz-transform: scale(0.01);
      -o-transform: scale(0.01);
      transform: scale(0.01);
    }
  }
</style>
