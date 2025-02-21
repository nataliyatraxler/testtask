import css from './Loader.module.css'
import { Hourglass } from "react-loader-spinner"

function Loader() { 
  return (
    <div className={css.loader}>
      <Hourglass color="red" />
    </div>
  )
}

export default Loader