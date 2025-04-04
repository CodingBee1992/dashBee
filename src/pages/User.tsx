import PageComponent from "../components/PageComponent"
import { singleUser } from "../data"


const User = () => {
  return (
    <div>
        <PageComponent {...singleUser}/>
    </div>
  )
}

export default User