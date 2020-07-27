<template>
  <ul class="nav nav-mobile-menu">
     <base-dropdown title="Change Language">
       <template slot="title">
        <Svg-Icon name="ico-change-language"  class="text-white mobile-menu is-small" />
        <b class="caret"></b>
        <span class="notification">Change Language</span>
      </template>
      <a class="dropdown-item" href="#">ไทย</a>
      <a class="dropdown-item" href="#">English</a>
    </base-dropdown>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="material-icons md-24 hidden-lg-up">search</i>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#pablo">
         <i class="material-icons md-18">exit_to_app</i>Log out
      </a>
    </li>
  </ul>
</template>
<script>
  import SvgIcon from 'src/components/Icons/Svg-Icon.vue'   

  export default {
    components: {
      SvgIcon
    },
    name: 'mobile-menu'
  }
</script>
<style>
</style>
