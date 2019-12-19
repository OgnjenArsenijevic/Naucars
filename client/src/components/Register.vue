<template>
  <div class="registerLook">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <h1>NAUCARS</h1>
      </b-row>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <b-card class="p-3">
            <h3 class="mb-4">Register</h3>
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
                description="Password must have between 8 and 32 characters."
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <b-form-group 
                id="input-group-3"
                label="Confirm password:" 
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  type="password"
                  v-model="form.confirmedPassword"
                  required
                  placeholder="Re-enter password"
                ></b-form-input>
              </b-form-group>

              <b-row align-h="center">
                <b-button variant="primary" @click="register">Register</b-button>
              </b-row>


              <b-row align-h="center" class="pt-3">
                <b-col cols="15">
                  <b-alert
                    class="register-alert"
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
                  <b-link @click="goToLogin({name: 'login'})">Already have an account? Click here to login</b-link>
              </b-row>

              <b-row align-h="center" class="pt-3">
                  <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="success"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                  >
                    <p>Registation successful. Redirecting to login page...</p>
                    <b-progress
                      variant="success"
                      :max="dismissSecs"
                      :value="dismissCountDown"
                      height="4px"
                    ></b-progress>
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
export default {
  data () {
    return {
      error: null,
      form: {
        email: '',
        password: '',
        confirmedPassword: '',
      },
      showDismissibleAlert: false,
      dismissibleAlertMesasge: '',
      dismissSecs: 4,
      dismissCountDown: 0,
    }
  },
  methods: {
    async register () {
      this.showDismissibleAlert = false
      try {
        const response = await AuthenticationService.register({
        email: this.form.email,
        password: this.form.password,
        confirmedPassword: this.form.confirmedPassword
        })
        this.showAlert()
        setTimeout( () => this.$router.push('login'), 4000);
        //console.log(response.data)
      }
      catch (err)
      {
        this.error = err.response.data.error
        this.dismissibleAlertMesasge = this.error
        this.showDismissibleAlert=true
      }
    },
    goToLogin (route)
    {
      this.$router.push(route)
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    showAlert() {
        this.dismissCountDown = this.dismissSecs
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
