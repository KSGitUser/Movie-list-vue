<template>
  <div class="hello">

  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator'
import {
  configApp
} from '@/config/configApp'

  @Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    async created () {
      const params = {
        method: 'GET',
        headers: {
          'Authorization': configApp.apiKey4,
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      let listUrl = new URL(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${configApp.apiKey3}&language=${configApp.language}`
      )
      const response = await fetch(
        listUrl.toString(),
        params
      )
      const data = await response.json()
      console.log(data)
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
