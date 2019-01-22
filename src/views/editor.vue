<template>
  <div>
     <editor v-model="modal"/>
     <viewer v-model="modal"/>
  </div>
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/Editor.vue'

import 'highlight.js/styles/github.css';
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'

export default {
  components: {
   Editor,
   Viewer
  },
  data(){
    return {
      modal:""
    }
  }
}
</script>

<style scoped>

</style>
