export const state = () => ({
  title: null,
  colors: {
    primary: '#005599',
    secondary: '#003377',
    primaryText: '#fdfdfd',
  }
})

export const mutations = {
  setTitle(state, payload) {
    state.title = payload;
  },
  setColor(state, { key, value }) {
    state.colors = {
      ...state.colors,
      [key]: value,
    }
  }
}
