<template>
  <div class="loginLook">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <h1>NAUCARS</h1>
      </b-row>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <b-card class="p-3">
            <h3 class="mb-4">Login</h3>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group 
                id="input-group-2"
                label="Password:" 
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <b-row align-h="center">
                <b-button variant="primary" @click="login">Login</b-button>
              </b-row>


              <b-row align-h="center" class="pt-3">
                <b-col cols="15">
                  <b-alert
                    class="login-alert"
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
                <b-link @click="goToRegister({name: 'register'})">Dont have an account? Click here to register</b-link>
              </b-row>

            </b-form> 
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
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      error: null,
      form: {
        email: '',
        password: '',
      },
      showDismissibleAlert: false,
      dismissibleAlertMesasge: ''
    }
  },
  methods: {
    async login () {
      this.showDismissibleAlert = false
      try {
        const response = await AuthenticationService.login({
        email: this.form.email,
        password: this.form.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('allAds')
      }
      catch (err)
      {
        this.error = err.response.data.error
        this.dismissibleAlertMesasge = this.error
        this.showDismissibleAlert=true
      }
    },
    goToRegister (route)
    {
        this.$router.push(route)
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
