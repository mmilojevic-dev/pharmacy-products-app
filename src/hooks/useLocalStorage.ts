import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type Serialize<T> = (value: T) => string
type Deserialize<T> = (value: string) => T

interface UseLocalStorageStateOptions<T> {
  serialize?: Serialize<T>
  deserialize?: Deserialize<T>
}

type LocalStorageState<T> = [T, Dispatch<SetStateAction<T>>]

const useLocalStorageState = <T>(
  key: string,
  defaultValue: T,
  // the = {} fixes the error we would get from destructuring when no argument was passed
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse
  }: UseLocalStorageStateOptions<T> = {}
): LocalStorageState<T> => {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before
      // we had the serialization in place (like we do in previous extra credits)
      try {
        return deserialize(valueInLocalStorage)
      } catch (error) {
        window.localStorage.removeItem(key)
        throw error
      }
    }
    return defaultValue
  })

  const prevKeyRef = useRef<string>(key)

  //  useEffect to synchronize local storage with dynamic key and state changes.
  //  When the key or state changes, this effect removes the previously stored item
  //  from local storage (if the key has changed) and stores the current state with
  //  the updated key. The serialization of the state is handled by the provided
  //  serialize function.
  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

export { useLocalStorageState }
