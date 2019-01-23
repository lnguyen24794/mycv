<template>
  <div>
     <editor v-model="modal" :options="options"/>
     <viewer v-model="modal"/>
  </div>
</template>

<script>
import "tui-editor";
import 'tui-editor/dist/tui-editor-extChart';

import 'tui-editor/dist/tui-editor-extColorSyntax.js';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import  'tui-color-picker/dist/tui-color-picker.css';

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
      modal:"",
      options: {
    minHeight: '200px',
    language: 'en_US',
    useCommandShortcut: true,
    useDefaultHTMLSanitizer: true,
    usageStatistics: true,
    hideModeSwitch: false,
    exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table'],
}
    }
  }
}
</script>

<style scoped>

</style>
