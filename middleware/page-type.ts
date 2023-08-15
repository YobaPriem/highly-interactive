export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  let type = 'section'

  // Вариант в лоб, через прокси-компонент
  // if (to.path.includes('product')) {
  //   type = 'detail'
  // }
  // to.params.type = type

  navigateTo('/')
})