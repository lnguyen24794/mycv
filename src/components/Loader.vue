<template>
    <div>
        <div class="loader" id="loader">
            <div class="container">
                <img src="../assets/logo.png">
                <div class="name">
                    <span 
                        v-for="(char,index) in arrName"
                        :key="index"
                    >{{char=="-"?'&nbsp;':char}}</span>
                </div>
                <div class="line"></div>
                <div class="sub">
                    <p> Web developer </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    setTimeout(function(){
        var ele = document.getElementById("loader");
        ele.style.opacity=0;
        ele.style.display="none";
    },3500)
    export default {
       computed:{
           arrName:{
               get(){
                   return this.$store.getters.nickName;
               }
           }
       }
    }
</script>

<style scoped>

</style>