<template>
  <v-container fluid>
    <app-loader/>
    <hello-world/>
  </v-container>
  
  
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import AppLoader from "../components/Loader"
  export default {
    components: {
      AppLoader,
      HelloWorld
    },
    mounted() {
      // this.$axios
      // .get("https://httpbin.org/get")
      // .then(res=>{
      //   console.log(res);
      // })
    },
  }
</script>
