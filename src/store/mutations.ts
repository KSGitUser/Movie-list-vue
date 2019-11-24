export const mutations = {
  setConfiguration(state: any, payload: any) {
    state.configuration = Object.assign(state.configuration, payload);
  },

  setGenreId(state: any, payload: number) {
    state.genreId = payload;
  }
}