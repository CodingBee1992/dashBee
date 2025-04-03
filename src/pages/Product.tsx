import { useParams } from "react-router"
import PageComponent from "../components/PageComponent"


const Product = () => {

    const {id}= useParams()

  return (
    <div>
        <PageComponent id={id}/>
    </div>
  )
}

export default Product