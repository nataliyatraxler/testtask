import { useSelector, useDispatch } from 'react-redux'
import { selectIsFavorits, addFavoritCamper, deleteFavoritCamper } from '../../redux/favoritsSlice'
import icons from '../../assets/icons.svg'
import css from './FavoritCamper.module.css'

function FavoritCamper({ camper = -1 }) {
  const dispatch = useDispatch()
  const isFavorit = useSelector((state) => selectIsFavorits(state, camper))
  const className = isFavorit? css.theFavorit : css.notFavorit

  function handleClick() {
    if (camper < 0)
      return
    if (isFavorit) 
      dispatch(deleteFavoritCamper(camper))
    else
      dispatch(addFavoritCamper(camper))
  }
  return (
    <div className={`${css.favorit} ${className}`} onClick={handleClick}>
      <svg><use xlinkHref={`${icons}#icon-favorit`} /></svg>
    </div>
  )
}

export default FavoritCamper
