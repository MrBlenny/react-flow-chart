export default function mapValues<
  Obj extends object,
  Res extends { [key in keyof Obj]: any }
>(o: Obj, func: any) {
  const res: Res = {} as any
  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      res[key] = func(o[key])
    }
  }
  return res
}
