export default function session(store) {
  store.subscribe(mutation => {
    if (mutation.type === 'loginUser') {
      localStorage.setItem('loginUser', JSON.stringify(mutation.payload))
    } else if (mutation.type === 'logoutUser') {
      localStorage.setItem('loginUser', 'null')
    }
  })

  const session = JSON.parse(localStorage.getItem('loginUser') || 'null')
  if (session) {
    store.commit('loginUser', session)
  }
}
