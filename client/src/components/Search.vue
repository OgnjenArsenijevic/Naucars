<template>
  <div class="searchLook">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="9">
          <b-card class="p-3">
            <h3 class="mb-4">Search</h3>
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
                        placeholder="Enter model"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-3"
                        label="Lowest price"
                        label-for="input-3"
                    >
                        <b-form-input
                        id="input-3"
                        v-model="ad.lowestPrice"
                        type="number"
                        min="0"
                        placeholder="Enter lowest price"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

              <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                        id="input-group-4"
                        label="Highest price"
                        label-for="input-4"
                    >
                        <b-form-input
                        id="input-4"
                        v-model="ad.highestPrice"
                        type="number"
                        max="50000000"
                        placeholder="Enter highest price"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                    id="input-group-5"
                    label="Production year (from)"
                    label-for="input-5"
                    >
                        <b-form-input
                        id="input-5"
                        v-model="ad.productionYearFrom"
                        type="number"
                        min="1930"
                        max="2019"
                        placeholder="Enter production year (from)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                    id="input-group-6"
                    label="Production year (to)"
                    label-for="input-6"
                    >
                        <b-form-input
                        id="input-6"
                        v-model="ad.productionYearTo"
                        type="number"
                        min="1930"
                        max="2019"
                        placeholder="Enter production year (to)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

              <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                        id="input-group-7"
                        label="Color"
                        label-for="input-7"
                    >
                        <b-form-input
                        id="input-7"
                        v-model="ad.color"
                        type="text"
                        placeholder="Enter color"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-8"
                        label="Kilometers (from)"
                        label-for="input-8"
                    >
                        <b-form-input
                        id="input-8"
                        v-model="ad.kilometersFrom"
                        type="number"
                        min="0"
                        placeholder="Enter kilometers (from)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-9"
                        label="Kilometers (to)"
                        label-for="input-9"
                    >
                        <b-form-input
                        id="input-9"
                        v-model="ad.kilometersTo"
                        type="number"
                        max="2000000"
                        placeholder="Enter kilometers (to)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

              <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                    id="input-group-10"
                    label="kW (from)"
                    label-for="input-10"
                    >
                        <b-form-input
                        id="input-10"
                        v-model="ad.kWFrom"
                        type="number"
                        min="0"
                        max="2000"
                        placeholder="Enter kW (from)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                    id="input-group-11"
                    label="kW (to)"
                    label-for="input-11"
                    >
                        <b-form-input
                        id="input-11"
                        v-model="ad.kWTo"
                        type="number"
                        min="0"
                        max="2000"
                        placeholder="Enter kW (to)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col md="4">
                    <b-form-group
                        id="input-group-12"
                        label="cm3 (from)"
                        label-for="input-12"
                    >
                        <b-form-input
                        id="input-12"
                        v-model="ad.cm3From"
                        type="number"
                        min="0"
                        max="8000"
                        placeholder="Enter cm3 (from)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

              </b-row>

               <b-row align-h="center" class="mt-1">
                <b-col md="4">
                    <b-form-group
                        id="input-group-13"
                        label="cm3 (to)"
                        label-for="input-13"
                    >
                        <b-form-input
                        id="input-13"
                        v-model="ad.cm3To"
                        type="number"
                        min="0"
                        max="8000"
                        placeholder="Enter cm3 (to)"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col offset-md="4" md="4">
                    <b-form-group
                        id="input-group-14"
                        label="Order by production year"
                        label-for="input-14"
                    >
                        <b-form-input
                        id="input-14"
                        v-model="ad.order"
                        type="text"
                        placeholder="Enter asc or desc"
                        autocomplete="off"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
              </b-row>

              <b-row align-h="center">
                <b-button variant="primary" @click="search">Search</b-button>
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

            </b-form>
             
          </b-card>
        </b-col>
        <b-container>
            <b-row v-for="ad in ads" :key="ad.id" align-h="center" class="mt-5">
                <b-col cols="8">
                <b-card class="p-1">
                    <b-card class="p-1" v-bind:img-src = "ad.image"  img-right>
                            <b-row align-h="center">
                            <p id="adData">
                                <strong>Manufacturer: </strong> {{ad.manufacturer}}
                                <br> 
                                <strong>Model: </strong> {{ad.model}}
                                <br> 
                                <strong>Price: </strong> {{ad.price}}
                                <br> 
                                <strong>Production year: </strong> {{ad.productionYear}}
                                <br> 
                                <strong>Kilometers: </strong> {{ad.kilometers}}
                                <br> 
                                <strong>Color: </strong> {{ad.color}}
                                <br> 
                                <strong>kW: </strong> {{ad.kW}}
                                <br> 
                                <strong>cm3: </strong> {{ad.cm3}}
                                <br> 
                                <strong>Contact number: </strong> {{ad.contactNumber}}
                                </p>
                            </b-row>
                        </b-card>
                        <template v-slot:footer>
                            <small class="text-muted">
                                Posted by: {{ad.adOwner}}
                                <br>
                                Posted on: {{ad.createdAt.substring(0,10)}}
                            </small>
                        </template>
                </b-card>
                    
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="7">
                    <b-img :src="require('../assets/background.jpg')" fluid-grow></b-img>
                </b-col>
                </b-row>
        </b-container>
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
      ads: null,
      ad: {
        manufacturer: null,
        model: null,
        lowestPrice: null,
        highestPrice: null,
        productionYearFrom: null,
        productionYearTo: null,
        color: null,
        kilometersFrom: null,
        kilometersTo: null,
        kWFrom: null,
        kWTo: null,
        cm3From: null,
        cm3To: null,
        order: null
      },
      showDismissibleAlert: false,
      dismissibleAlertMesasge: '',
    }
  },
  methods: {
    async search () {
      this.showDismissibleAlert = false
      console.log(this.ad.adOwner)
      try {
        const ads = await AdService.index(this.ad)
        this.ads = ads.data
        //this.ads.reverse()
        //console.log(response.data)
      }
      catch (err)
      {
        this.error = err.response.data.error
        this.dismissibleAlertMesasge = this.error
        this.showDismissibleAlert=true
      }
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
.card-img-right {
    max-width: 50%;
    height: auto;
    
}
.error {
  color: red
}
</style>
