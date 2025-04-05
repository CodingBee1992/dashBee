

const FetchData = () => {

    const get = async (url:string) => {
        try{
            const res = await fetch(url)
            const resData = await res.json()
            return resData
        }catch(err){
            console.log(err);
        }
    }

    const post = async (url:string,data:object[]) =>{

       try{
        const res = await fetch(url, {
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json()

        return resData
       }catch(err){
        console.log(err);
       }
    }

    const put = async (url:string,data:object[]) => {

        try{
            const res = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await res.json()
            return resData
        }catch(err){
            console.log(err);
        }
    }

    const del = async (url:string) => {
        try{
            const res = await fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                },
                
            })
            console.log(res);
            const resData = 'Resource Deleted'
            return resData
        }catch(err){
            console.log(err);
        }
    } 



  return {
    get,
    post,
    put,
    del
  }
}

export default FetchData