<template>
  <div id="app">
    <div style="height: 200px">
      <span v-html="content"></span>
    </div>
    <editor
        id="tinEditor"
        @onSelectionChange="handlerFunction"
        v-model="content"
        api-key="l2dv0833wavh9ll47bc8mcvga6xfztse99lxlz2xv8srwpdh"
        :init="{
         selector: '#textarea',
         //配置语言
         language_url: '/langs/zh_CN.js',
         language: 'zh_CN',
         height: 500,
         menubar: false,
         // 右下角的logo图标
         branding: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount',
           'save','link'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help | save | link'
       }"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'tinyMce',
  components: {
    'editor': Editor
  },
  data() {
    return {
      content: ""
    }
  },

  methods: {
    handlerFunction() {
      console.log(this.content)
    },

    submitContent() {
      alert("保存")
    }
  }

}
</script>
