import axios from './axios'

const useGet = async <T>(url: string, params?: object, convert = true): Promise<T> => {
  const result = await axios.get<T>(url, params, convert)
  return result
}

const usePost = async <T>(url: string, data?: object, convert = true): Promise<T> => {
  const result = await axios.post<T>(url, data, convert)
  return result
}

const usePut = async <T>(url: string, data?: object, convert = true): Promise<T> => {
  const result = await axios.put<T>(url, data, convert)
  return result
}

const usePatch = async <T>(url: string, data?: object, convert = true): Promise<T> => {
  const result = await axios.patch<T>(url, data, convert)
  return result
}

const useDelete = async <T>(url: string, data?: object, convert = true): Promise<T> => {
  const result = await axios.post<T>(url, data, convert)
  return result
}

export { useGet, usePost, usePut, usePatch, useDelete }
