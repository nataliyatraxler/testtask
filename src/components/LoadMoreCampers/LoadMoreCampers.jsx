import { useSelector, useDispatch } from 'react-redux'
import { selectCampersHaveMore, selectCampersLoading } from '../../redux/campersSlice'
import { fetchCampers } from '../../redux/campersOps'

import Loader from '../Loader/Loader'
import css from './LoadMoreCampers.module.css'

function LoadMoreCampers() { 
  const dispatch = useDispatch()
  const campersListHaveMore = useSelector(selectCampersHaveMore)
  const campersListLoading = useSelector(selectCampersLoading)

  function handleLoadMore() { 
    dispatch(fetchCampers(true))
  }

  return (
    <div className={css.container}>
      {campersListLoading && <Loader />}
      {!campersListLoading && campersListHaveMore && <button className={css.button} onClick={handleLoadMore}>Load more</button>}
    </div>
  )
}

export default LoadMoreCampers