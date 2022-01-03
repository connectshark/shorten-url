<script setup>
import { ref } from 'vue'
import copy from 'copy-text-to-clipboard'

const url = ref('')
const loading = ref(false)
const response = ref({})
const copyState = ref(false)

const inputBar = ref(null)

const submit = () => {
  if (url.value === '' || !url.value.includes('https://')) {
    inputBar.value.focus()
    return
  }
  loading.value = true
  fetch(import.meta.env.VITE_API_URI + '/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'reurl-api-key': import.meta.env.VITE_API_KEY
    },
    body: JSON.stringify({
      url: url.value
    })
  }).then(r => r.json())
    .then(res => {
      response.value = res
      loading.value = false
      copyState.value = false
    })
}

const copyText = () => {
  copy(response.value.short_url)
  copyState.value = true
}

const clear = () => {
  url.value = ''
}
</script>

<template>
  <main
    class="backdrop-blur-md pt-4 mx-auto bg-white/50 w-5/6 transparent rounded-2xl min-h-[400px] max-w-screen-sm"
  >
    <section class="py-3">
      <input
        ref="inputBar"
        type="url"
        pattern="https://.*"
        placeholder="https://"
        v-model="url"
        class="invalid:ring-red-400 w-7/12 transition ring-blue-500 outline-none p-3 rounded-lg focus:ring-4"
      />
    </section>
    <section class="py-3">
      <input type="button" value="送出" @click="submit" class="btn bg-lime-500" />
      <input type="button" value="清除" @click="clear" class="btn bg-blue-500" />
    </section>
    <section class="py-3" v-if="loading">
      <span class="text-3xl text-gray-500">
        <i class="bx bx-loader bx-spin"></i>
      </span>
    </section>
    <section class="py-3" v-if="response.short_url">
      <div class="mb-4">
        <input
          type="text"
          :value="response.short_url"
          disabled
          class="text-gray-500 w-7/12 p-3 bg-white rounded-lg"
        />
      </div>
      <div class="mb-4" v-if="copyState">
        <span class="text-3xl text-green-500"><i class='bx bx-check-circle'></i></span>
      </div>
      <div class="mb-4">
        <input type="button" value="複製" @click="copyText" class="btn bg-indigo-500" />
      </div>
    </section>
  </main>
</template>
