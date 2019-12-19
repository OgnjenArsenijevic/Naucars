<template>
  <div class="createAdLook">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="9">
          <b-card class="p-3">
            <h3 class="mb-4">Create new ad</h3>
            <b-form>
              <b-row align-h="center" class="mt-5">
                <b-col md="4">
                    <b-form-group
                    id="input-group-1"
                    label="Manufacturer"
                    label-for="input-1"
                    >
                        <b-form-input
                        id="input-1"
                        v-model="ad.manufacturer"
                        type="text"
                        required
                        placeholder="Enter manufacturer"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            
                <b-col md="4">
                    <b-form-group
                        id="input-group-2"
                        label="Model"
                        label-for="input-2"
                    >
                        <b-form-input
                        id="input-2"
                        v-model="ad.model"
                        type="text"
                        required
                        placeholder="Enter model"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-3"
                        label="Price"
                        label-for="input-3"
                    >
                        <b-form-input
                        id="input-3"
                        v-model="ad.price"
                        type="number"
                        min="0"
                        required
                        placeholder="Enter price"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

              <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                    id="input-group-4"
                    label="Production year"
                    label-for="input-4"
                    >
                        <b-form-input
                        id="input-4"
                        v-model="ad.productionYear"
                        type="number"
                        min="1930"
                        max="2019"
                        required
                        placeholder="Enter production year"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-5"
                        label="Color"
                        label-for="input-5"
                    >
                        <b-form-input
                        id="input-5"
                        v-model="ad.color"
                        type="text"
                        placeholder="Enter color"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-6"
                        label="Kilometers"
                        label-for="input-6"
                    >
                        <b-form-input
                        id="input-6"
                        v-model="ad.kilometers"
                        type="number"
                        min="0"
                        placeholder="Enter kilometers"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

              <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                    id="input-group-7"
                    label="kW"
                    label-for="input-7"
                    >
                        <b-form-input
                        id="input-7"
                        v-model="ad.kW"
                        type="number"
                        min="0"
                        max="2000"
                        placeholder="Enter kW"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-8"
                        label="cm3"
                        label-for="input-8"
                    >
                        <b-form-input
                        id="input-8"
                        v-model="ad.cm3"
                        type="number"
                        min="0"
                        max="8000"
                        placeholder="Enter cm3"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-9"
                        label="Image"
                        label-for="input-9"
                    >
                        <b-form-input
                        id="input-9"
                        v-model="ad.image"
                        type="text"
                        placeholder="Enter image url"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

               <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                    id="input-group-10"
                    label="Contact number"
                    label-for="input-10"
                    >
                        <b-form-input
                        id="input-10"
                        v-model="ad.contactNumber"
                        type="text"
                        required
                        placeholder="Enter contact number"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

              <b-row align-h="center">
                <b-button variant="primary" @click="create">Create</b-button>
              </b-row>


              <b-row align-h="center" class="pt-3">
                <b-col cols="15">
                  <b-alert
                    dismissible
                    variant="danger"
                    :show="showDismissibleAlert"
                    @dismissed="showDismissibleAlert=false"
                  >
                  {{dismissibleAlertMesasge}}
                  </b-alert>
                </b-col>
              </b-row>

              <b-row align-h="center" class="pt-3">
                  <b-alert
                    dismissible
                    variant="success"
                    :show="showDismissibleAlert1"
                    @dismissed="showDismissibleAlert1=false"
                  >
                  {{dismissibleAlertMesasge1}}
                  </b-alert>
              </b-row>

            </b-form>
             
          </b-card>
        </b-col>
        <b-row align-h="center">
          <b-col cols="7">
            <b-img :src="require('../assets/background.jpg')" fluid-grow></b-img>
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import AdService from '@/services/AdService'
export default {
  data () {
    return {
      error: null,
      ad: {
        manufacturer: null,
        model: null,
        price: null,
        productionYear: null,
        color: null,
        kilometers: null,
        kW: null,
        cm3: null,
        image: null,
        adOwner: null,
        contactNumber: null
      },
      showDismissibleAlert: false,
      dismissibleAlertMesasge: '',
      showDismissibleAlert1: false,
      dismissibleAlertMesasge1: '',
      dismissSecs: 4,
      dismissCountDown: 0,
    }
  },
  methods: {
    async create () {
      this.showDismissibleAlert = false
      this.ad.adOwner = this.$store.state.user.email
      console.log(this.ad.adOwner)
      try {
        const response = await AdService.post(this.ad)
        this.dismissibleAlertMesasge1 = "Ad successfully created"
        this.showDismissibleAlert1=true
        //console.log(response.data)
      }
      catch (err)
      {
        this.error = err.response.data.error
        this.dismissibleAlertMesasge = this.error
        this.showDismissibleAlert=true
      }
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    showAlert() {
        this.dismissCountDown = this.dismissSecs
    }
  },
  async mounted() {
      if (!this.$store.state.isUserLoggedIn)
      {
          alert('You must login first')
          this.$router.push('/')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
</style>
