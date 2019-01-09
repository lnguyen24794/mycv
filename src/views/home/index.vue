<template>
  <div>
    <!-- <app-loader/> -->
    <v-layout row wrap class="page">
      <v-flex id="leftbar"  md1>
        <app-left-bar/>
      </v-flex>
      <v-flex id="main" align-space-between justify-center row fill-height  md12 v-bind:style="{ 'background-image': 'url(' + url_bg + ')' }">
        <v-flex md11 offset-md1>
          <router-view/>
        </v-flex>
        
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
        url_bg:'img/background.jpg'
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

</style>
