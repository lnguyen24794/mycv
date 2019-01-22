<template>

  <v-layout class="aboutme" align-center justify-center fill-height>
    <v-flex md9 class="content left-to-right">
      <div class="border-top-left"></div>
      <v-container class="main">
        <v-layout row wrap>
          <app-title />
          <v-flex md12>
            <v-layout row wrap>
              <v-flex md4 class="shine">
                <figure><img src="@/assets/avatar.jpg" /></figure>
              </v-flex>
              <v-flex md4 class="middle">
                <h3>I am Web Designer @ Company.com</h3>
                <p>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu libero, facilisis et
                  nisi non, tempus faucibus tortor. Mauris vel nulla aliquam, pellentesque enim ac, faucibus tortor.
                  Nulla odio nibh, cursus sit amet urna id, dignissim euismod augue.</p>
                <p>Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum justo, quis ornare augue
                  tortor non est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.</p>
              </v-flex>
              <v-flex md4 class="right">
                <ul class="info-list">
                  <li><span class="title">Age</span><span class="value">29</span></li>
                  <li><span class="title">Residence</span><span class="value">USA</span></li>
                  <li><span class="title">Address</span><span class="value">88 Some Street, Some Town</span></li>
                  <li><span class="title">e-mail</span><span class="value"><a href="mailto:email@example.com">email@example.com</a></span></li>
                  <li><span class="title">Phone</span><span class="value">+0123 123 456 789</span></li>
                  <li><span class="title">Skype</span><span class="value">alex.smith</span></li>
                  <li><span class="title">Freelance</span><span class="value available">Available</span></li>
                </ul>
                <ul class="social-links">
                    <li><a class="tip social-button" href="#" title="Twitter"> <font-awesome-icon :icon="['fab', 'twitter']"/></a></li> <!-- Full list of social icons: http://fontawesome.io/icons/#brand -->
                    <li><a class="tip social-button" href="#" title="Facebook"> <font-awesome-icon :icon="['fab', 'facebook']"/></a></li>
                    <li><a class="tip social-button" href="#" title="Github"> <font-awesome-icon :icon="['fab', 'github']"/></a></li>
                    <li><a class="tip social-button" href="#" title="Google"> <font-awesome-icon :icon="['fab', 'google']"/></a></li>
                    <li><a class="tip social-button" href="#" title="Stack OverFlow"> <font-awesome-icon :icon="['fab', 'stack-overflow']"/></a></li>
                    </ul>
              </v-flex>
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
    components: {
      AppTitle
    }
  }

</script>

<style scoped>

</style>
