import { configApp } from '@/config/configApp';

export const actions = {
  async fetchConfiguration(context: any): Promise<void> {
    let listUrl = new URL(
      `https://api.themoviedb.org/3/configuration?api_key=${configApp.apiKey3}`
    );
    const response = await fetch(
      listUrl.toString(),
    );
    const data = await response.json();
    context.commit('setConfiguration', data);
  },

  async fetchFilmList(context: any, payload: string = context.state.genreId): Promise<void> {
    try {
      context.commit('setIsFilmListLoading', true);
      let listUrl = new URL(
        `https://api.themoviedb.org/3/discover/movie?api_key=${configApp.apiKey3}&language=${configApp.language}&page=${context.state.filmListPage}&with_genres=${payload}`
      );
      const response = await fetch(
        listUrl.toString(),
      );
      const data = await response.json();
      context.commit('setFilmList', data.results);
      context.commit('setFilmListPage', data.page);
      context.commit('setTotalFilmListResult', data.total_results);
      context.commit('setTotalFilmListPages', data.total_pages);
      context.commit('setIsFilmListLoading', false);
    }
    catch (e) {
      console.error("Error on getting film list, ", e);
    }
  },

  async fetchMovieDetails(
    context: any, payload: { id: number, append: [] }
  ): Promise<void> {
    try {
      let append = '';
      if (payload.append.length > 0) {
        append = '&append_to_response=' + payload.append.join(',');
      }
      let listUrl = new URL(
        `https://api.themoviedb.org/3/movie/${payload.id}?api_key=${configApp.apiKey3}&language=${configApp.language}${append}`
      );
      const response = await fetch(
        listUrl.toString(),
      );
      const data = await response.json();
      context.commit('setFilmDetails', data)
    }
    catch (e) {
      console.error("Error on getting film list, ", e);
    }
  }
}