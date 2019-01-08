<template>
  <div>
    <app-loader/>
    <v-layout row wrap class="page">
      <v-flex id="leftbar"  md1>
        <app-left-bar/>
      </v-flex>
      <v-flex id="main" md10 offset-md1 v-bind:style="{ 'background-image': 'url(' + url_bg + ')' }">
        <v-container>
          <router-view/>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import AppLeftBar from '@/components/client/leftbar'
  import AppLoader from '@/components/Loader'
  export default {
    data(){
      return {
        url_bg:"../src/assets/background.jpg"
      }
    },
    components:{
      AppLeftBar,
      AppLoader
    },
    mounted() {
      // this.$axios
      // .get("https://httpbin.org/get")
      // .then(res=>{
      //   console.log(res);
      // })
    }
  }

</script>
<style lang="scss" scope>
  #main{
    
  }
</style>
