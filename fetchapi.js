
async function getdata(){
const api ="https://jsonplaceholder.typicode.com/posts"
try {
    const response =await fetch(api)
    const json =await response.json()
    console.log(json)
} catch (error) {
    console.log(error)
    
}
}
getdata();