<template>
  <div id="example-2">
    <b-container>
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="Input Your Port List"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-btn @click="addInputPort()">
            Add more input for port list
          </b-btn>
          <div
            v-for="(item,index) in inputs.port"
            :key="index"
          >
            <h4 class="text-left">
              {{ index + 1 }}.
            </h4>
            <b-form-group
              label-cols-sm="3"
              label="Name:"
              label-align-sm="right"
              label-for="driver-port-name"
            >
              <b-form-input
                id="driver-port-name"
                v-model="item.text"
                type="text"
                placeholder="Input the port's name."
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Value:"
              label-align-sm="right"
              label-for="driver-port-value"
            >
              <b-form-select
                id="driver-port-value"
                v-model="item.value"
                :options="options.port.value"
              />
            </b-form-group>
          </div>
          <b-btn
            v-b-toggle.collapse-input-driver-list
            @click="getPortText()"
          >
            Submit Port List
          </b-btn>
        </b-form-group>
      </b-card>
      <div
        id="collapse-input-driver-list"
        class="my-3"
      >
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Input Your Driver List"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-btn @click="addInputDriver()">
              Add more input for Driver list
            </b-btn>
            <div
              v-for="(item,index) in inputs.driver"
              :key="index"
            >
              <h4 class="text-left">
                {{ index + 1 }}.
              </h4>
              <b-form-group
                label-cols-sm="3"
                label="Model:"
                label-align-sm="right"
                label-for="driver-list-model"
              >
                <b-form-select
                  id="driver-list-model"
                  v-model="item.model"
                  :options="response.model"
                />
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Port:"
                label-align-sm="right"
                label-for="driver-list-port"
              >
                <b-form-select
                  id="driver-list-port"
                  v-model="item.port"
                  :options="response.port"
                />
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Address:"
                label-align-sm="right"
                label-for="driver-list-address"
              >
                <b-form-input
                  id="driver-list-address"
                  v-model="item.address"
                  type="number"
                  placeholder="Input the driver's address."
                />
              </b-form-group>
              <b-form-group
                label-cols-sm="3"
                label="Config:"
                label-align-sm="right"
                label-for="driver-list-config"
              >
                <b-form-input
                  id="driver-list-config"
                  v-model="item.config"
                  type="text"
                  placeholder="Input the driver's config."
                />
              </b-form-group>
            </div>
            <b-btn @click="writeConfig()">
              Submit Driver List
            </b-btn>
          </b-form-group>
        </b-card>
      </div>
    </b-container>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data: () => {
            return {
                inputs: {
                    port: [
                        {
                            text: '',
                            value: ''
                        }
                    ],
                    driver: [
                        {
                            model: '',
                            port: '',
                            address: '',
                            config: ''
                        }
                    ]
                },
                response: {
                    port:[],
                    model: [],
                    msg: "",
                },options:{
                    port:{
                        value:[
                            '/dev/ttyUSB0',
                            '/dev/ttyUSB1',
                            '/dev/ttyUSB2',
                            '/dev/ttyUSB3',
                        ]
                    }
                }
            }
        },
        beforeMount() {
            const baseUrl = this.$store.state.url
            axios.get(baseUrl + '/api/config/model').then(
                (response) => {
                    response.data.forEach((item) => {
                        this.response.model.push(
                            {
                                value: item.name,
                                text: item.name
                            }
                        )
                    })
                }
            )

        },
        methods: {
            writeConfig() {
                const baseUrl = this.$store.state.url

                const request = {
                    port: this.inputs.port,
                    driver: this.inputs.driver
                }
                axios.post(baseUrl + '/api/config', request).then(
                    (response) => {
                        this.response.msg = response.data
                        alert("Successful submit!")
                    }
                )
            },
            addInputPort() {
                this.inputs.port.push({
                    text: '',
                    value: ''
                })
            },
            addInputDriver() {
                this.inputs.driver.push({
                    model: '',
                    port: '',
                    address: '',
                    config: ''
                })
            },
            getPortText(){
                this.inputs.port.forEach((item)=>{
                    this.response.port.push(
                        {
                            text:item.value,
                            value:item.text
                        }
                    )
                })

            }


        }
    }
</script>