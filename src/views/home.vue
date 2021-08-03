<template>
<div class="container">
  <form class="row" @submit="submit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">填入欲縮短的網址</label>
      <input
        type="url"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="urlHelp"
        required
        placeholder="https://www.google.com/"
        pattern="https://.*"
        v-model.trim="url"
      >
    </div>
    <div class="btn-group col-4 mx-auto" role="group" aria-label="Basic outlined example">
      <button type="submit" class="btn btn-outline-primary">送出</button>
      <button type="reset" class="btn btn-outline-secondary">清除</button>
    </div>
  </form>
  <div class="row py-5" v-if="result">
    <label for="short-url" class="form-label">縮短網址</label>
    <div class="col-12">
      <input class="form-control"
        type="text"
        v-model="result"
        id="short-url"
        aria-label="唯獨內容"
        readonly
      >
    </div>
    <div class="col-2 mx-auto py-3">
      <button type="submit" class="btn btn-outline-primary" @click="copy">複製</button>
    </div>
  </div>
</div>

</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const url = ref('')
    const result = ref('')
    const loading = ref(false)
    const submit = () => {
      if (url.value === '') return
      loading.value = true
      axios.get(process.env.VUE_APP_URL + '/shortenUrl?url=' + url.value)
        .then(res => {
          result.value = res.data.short_url
          loading.value = false
        })
    }

    const copy = () => {
      const clipboardy = require('clipboardy')
      clipboardy.write(result.value)
        .then(() => {
          alert('複製成功')
        })
        .catch(() => {
          alert('複製失敗 請通報維護工程師')
        })
    }
    return {
      url,
      submit,
      result,
      loading,
      copy
    }
  }
}
</script>

<style lang="scss" scoped>
</style>