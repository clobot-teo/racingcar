const delay = (time: number, f: () => void) => setTimeout(f, time)
const random = (digit: number): number => Math.floor(Math.random() * Math.pow(10, digit))
const delayApi = (cb: (...args: any[]) => any) => {
  const MAX_SECOND = 2000
  return <T>(...args: T[]): Promise<T> => {
    return new Promise((resolve) => {
      delay(random(MAX_SECOND), () => resolve(cb(args)))
    })
  }
}
export const randomNumber = delayApi(random)(1)
