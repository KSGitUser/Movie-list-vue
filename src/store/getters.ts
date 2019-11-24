export const getters = {
  getImageBaseUrl(state: any): string {
    return state.configuration.images.base_url;
  },

  getGenreId(state: any): number {
    return state.genreId;
  }
}