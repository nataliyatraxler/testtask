import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

import { getCamper } from "../../api/campers"
import Loader from "../../components/Loader/Loader"
import CamperDetail from '../../components/CamperDetail/CamperDetail'

function CamperPage() {
  const [loading, setLoading] = useState(false)
  const [camperData, setCamperData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const data = await getCamper(id)
        setCamperData(data)
      } catch (err) {
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
    }

    id && getData()
  }, [id])

  return (
    <div className="container">
      {loading && <Loader />}
      {Object.keys(camperData).length > 0 && <CamperDetail data={camperData} />}
    </div>
  )
}

export default CamperPage
