// eslint-disable-next-line import/prefer-default-export
export const getUrlWithOutParams = (urlWithParams: string | undefined): string => {
  if (urlWithParams) {
    if (urlWithParams.indexOf('?') > -1) {
      return urlWithParams.split('?')[0]
    }
    return urlWithParams
  }
  return ''
}
