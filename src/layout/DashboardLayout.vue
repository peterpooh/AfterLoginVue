<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dbsv/dashboard">
        <i class="material-icons md-24">dashboard</i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/trade">
         <Svg-Icon name="ico-streaming"  class="text-white mobile-menu is-small" />
        <p>Streaming</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/investmenttools">
        <i class="material-icons md-24">trending_up</i>
        <p>Investment Tools</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/research">
        <i class="material-icons md-24">library_books</i>
        <p>Research</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/myaccount">
        <i class="material-icons md-24">person</i>
        <p>My Account</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/estatement">
        <i class="material-icons md-24">description</i>
        <p>E-Statement &amp; Reports</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/dbsvrewards">
        <i class="material-icons md-24">card_giftcard</i>
        <p>DBSV Rewards</p>
      </sidebar-link>
      <sidebar-link to="/dbsv/notifications">
        <i class="material-icons md-24">notifications</i>
        <p>Notifications</p>
      </sidebar-link>

      <template slot="bottom-links">
        <sidebar-link class="active-switch-to-old"
                      to="/dbsv/dashboard">
          <i class="material-icons md-24">reply</i>
          <p>Switch to Old Menu</p>
        </sidebar-link>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  import SvgIcon from 'src/components/Icons/Svg-Icon.vue' 

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu,
      SvgIcon
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>