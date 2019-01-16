<template>

    <v-layout class="aboutme" align-center justify-center  fill-height >
        <v-flex md9  class="content left-to-right">
            <div class="border-top-left"></div>
            <v-container class="main">
                <v-layout  row wrap>  
                    <app-title/>
                    <v-flex md12>
                        <v-layout row wrap>
                            <v-flex md4 class="img"></v-flex>
                            <v-flex md4>ABC</v-flex>
                            <v-flex md4>ABC</v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex md12></v-flex>
                    <v-flex md12></v-flex>
                    <v-flex md12></v-flex>
                    <v-flex md12></v-flex>
                </v-layout>
            </v-container>
        </v-flex>
     
    </v-layout>

</template>

<script>
import AppTitle from "@/components/client/title";
  export default {
      components:{
          AppTitle
      }
  }

</script>

<style scoped>

</style>
