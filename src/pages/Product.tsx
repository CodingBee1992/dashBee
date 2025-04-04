
import PageComponent from "../components/PageComponent"
import { singleProduct } from "../data"


const Product = () => {

    

  return (
    <div>
        <PageComponent {...singleProduct}/>
    </div>
  )
}

export default Product