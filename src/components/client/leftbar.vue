<template>
  <div class="leftbar">
    <div class="my-photo">
      <img src="../../assets/avatar.jpg" class="avatar">
    </div>
    <div class="my-name">
      <h1>LAM NGUYEN</h1>
    </div>
    <div class="site-nav">
      <ul id="nav" class="site-main-menu">
        <router-link tag="li"  :to="{name :'home'}">
            <a class="link"><v-icon class="my-icon">home</v-icon>Home</a>
        </router-link>
        <router-link tag="li"  :to="{name :'aboutme'}">
           <a class="link"> <v-icon class="my-icon">account_circle</v-icon> <i class="menu-icon pe-7s-icon pe-7s-user"></i>About
            me</a>
        </router-link>
        <router-link tag="li"  :to="{name :'resume'}">
            <a  class="link"><v-icon class="my-icon">contact_mail</v-icon><i class="menu-icon pe-7s-icon pe-7s-id"></i>Resume</a>
        </router-link>
        <router-link tag="li"  :to="{name :'portfolio'}">
            <a class="link"><v-icon class="my-icon">home</v-icon><i class="menu-icon pe-7s-icon pe-7s-portfolio"></i>Portfolio</a>
        </router-link>
        <router-link tag="li"  :to="{name :'contact'}">
           <a class="link" ><v-icon class="my-icon">home</v-icon><i class="menu-icon pe-7s-icon pe-7s-mail"></i>Contact</a>
        </router-link>  
        
      </ul>
    </div>
    
  </div>
</template>

<script>
  export default {
      data(){
          return {
              activeItem:"home",
          }
      },
      methods:{
          setActive(item){
            this.activeItem=item;
          }
      }
  }

</script>

<style scoped>

</style>
