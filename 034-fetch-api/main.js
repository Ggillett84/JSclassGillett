const url = "http://foo.bar"


    const request = new Request(url, {
        headers: {
            'Authorization': Bearer 123'
    
        }
    })

    async function getData (){
        try{
    const response = await fetch(request)
    const data = await response.json()
    if(response.status !== 200){
        console.log('Success',data)
    }else{
        console.log('Server Error', data.error.message)
    }
    }catch (error){
        console.log('Error', error)
    }
}

getData()