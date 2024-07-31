async function getdata(){
    const api ="https://jsonplaceholder.typicode.com/posts"
    try {
        const response =await fetch(api)
        const json =await response.json()
        console.log(json)
        let rows ="";
        json.forEach( (data) =>
        {
          rows += `<><td>${data.userid}</td><td>${data.id}</td><td>${data.title}</td><td>${data.body}</td></tr>`
        }
         
        )
        document.getElementById('tablerows').innerHTML = rows ;
    
    } catch (error) {
        console.log(error)
        
    }
    }
    getdata();