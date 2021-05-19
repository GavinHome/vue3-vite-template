import { createI18n } from 'vue-i18n'

/**
 * Get All Language Files
 * @param {Object} modules
 */
const langs = (modules: any): any => {
  const message: any = {}
  Object.keys(modules).forEach((path: string) => {
    if (modules[path].default) {
      const pathName = path.substr(path.lastIndexOf('/') + 1).replace('.ts', '')
      if (message[pathName]) {
        message[pathName] = {
          ...modules[pathName],
          ...modules[path].default
        }
      } else {
        message[pathName] = modules[path].default
      }
    }
  })

  return message
}

const modules = import.meta.globEager('./*')
const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  messages: langs(modules)
})

export default i18n
