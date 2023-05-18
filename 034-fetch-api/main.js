const url = "http://api.thenewsapi.com/v1/news/top?api_token=RualPCECQfDeYvhFKa3WlehPNqUStnjdPNVeHjJ5"

async function getData (){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getData()