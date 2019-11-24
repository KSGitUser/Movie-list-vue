import { configApp } from '@/config/configApp';

export const actions = {
  async fetchConfiguration(context: any) {
    let listUrl = new URL(
      `https://api.themoviedb.org/3/configuration?api_key=${configApp.apiKey3}`
    );
    const response = await fetch(
      listUrl.toString(),
    );
    const data = await response.json();
    console.log("data from action =>", data);
    context.commit('setConfiguration', data);
  }
}