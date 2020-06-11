<template>
  <b-container>
    <h3>Log</h3>
    <pre class="text-left">
        {{ response.log }}
    </pre>
    <h3>USB</h3>
    <pre class="text-left">
        {{ response.usb }}
    </pre>
  </b-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ImamLog",
        data: () => {
            return {
                response: {
                    log: '',
                    usb: ''
                }
            }
        },
        beforeMount() {
            const baseURL = this.$store.state.url
            const request = {
                name: "mainframe",
                action: "log"
            }
            axios.post(baseURL + '/api/system/systemd', request).then(
                (response) => {
                    this.response.log = response.data.message
                }
            )
            axios.get(baseURL + '/api/system/usb',).then(
                (response) => {
                    this.response.usb = response.data.message
                }
            )
        }
    }
</script>

<style scoped>

</style>