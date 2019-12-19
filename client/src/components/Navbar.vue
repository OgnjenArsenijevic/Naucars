<template>
  <div class="navbarLook">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/">
        <b-navbar-brand>
          <img src="../assets/logo.jpg" class="logo">
        </b-navbar-brand>
      </router-link>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
           <router-link to="login" v-if="!$store.state.isUserLoggedIn">
              <b-button variant="info">
                Login
              </b-button>
            </router-link>
            <router-link to="register" v-if="!$store.state.isUserLoggedIn">
              <b-button variant="info">
                Register
              </b-button>
            </router-link>
            <router-link to="search" v-if="$store.state.isUserLoggedIn">
              <b-button variant="info">
                Search
              </b-button>
            </router-link>
            <router-link to="userAds" v-if="$store.state.isUserLoggedIn">
              <b-button variant="info">
                Your ads
              </b-button>
            </router-link>
            <router-link to="allAds" v-if="$store.state.isUserLoggedIn">
              <b-button variant="info">
                All ads
              </b-button>
            </router-link>
            <router-link to="createAd" v-if="$store.state.isUserLoggedIn">
              <b-button variant="info">
                Create Ad
              </b-button>
            </router-link>
            <b-button variant="info" @click="logout" v-if="$store.state.isUserLoggedIn">
              Logout
            </b-button>
        </b-nav-form>
      </b-navbar-nav>
      <!--
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

       
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name : "rootPage"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 100px;
  height: 43px;
}
</style>
