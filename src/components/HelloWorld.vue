<template>
  <div class="hello">

    <v-container fluid>
      <v-row>

        <side-menu></side-menu>

        <film-list :genre-id.sync="genreId"></film-list>

      </v-row>
    </v-container>

    <!-- <v-card>
      <v-list>
        <v-subheader>ЖАНР</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, index) in genresList" :key=item.id class="title">
            <v-list-item-content>
              <v-list-item-title v-text="item.name" @click="">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card> -->
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';
  import {
    configApp
  } from '@/config/configApp';
  import SideMenuComponent from '@/components/SideMenuComponent.vue';
  import FilmListComponent from '@/components/FilmListComponent.vue';

  @Component({
    components: {
      "side-menu": SideMenuComponent,
      "film-list": FilmListComponent,
    }
  })
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    genresList = [];

    async created() {
      this.$store.dispatch('fetchConfiguration');
    }

    genreId = this.$store.getters.getGenreId;
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
