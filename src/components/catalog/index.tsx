import {useStore} from "react-redux"

export const Catalog = () => {
  const store = useStore()

  console.log(store)

  return <h1>Catalog</h1>
}
