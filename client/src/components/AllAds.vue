<template>
  <div class="registerLook">
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
  </div>
</template>

<script>
import AdService from '@/services/AdService'
export default {
  data () {
    return {
      ads: null
    }
  },
  async mounted() {      
      const ads = await AdService.index()
      this.ads = ads.data
      this.ads.reverse()
      console.log(this.ads);
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img-right {
    max-width: 50%;
    height: auto;
    
}
#adData {
    text-align: left;
}
.error {
  color: red
}
</style>
