<template>
  <div id="example-2">
    <h3>Config</h3>
    <div id="nav">
      <router-link to="">
        Device
      </router-link>
      <router-link to="config">
        Config
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
    export default {
        data: () => {
            return {name: 'Vue.js'}
        },
        methods: {

        }
    }
</script>