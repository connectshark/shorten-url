<template>
<input v-model="url" type="url"/>
<input type="button" value="送出" @click="submit">
<p v-if="!loading">{{result}}</p>
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
    return {
      url,
      submit,
      result,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
</style>