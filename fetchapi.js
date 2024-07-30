// //Not used in table html file
// async function getdata(){
// const api ="https://jsonplaceholder.typicode.com/posts"
// try {
//     const response =await fetch(api)
//     const json =await response.json()
//     console.log(json)
//     let rows ="";
//     json.forEach( (data) =>
//     {
//       rows += `<tr><td>${data.userid}</td></tr><tr><td>${data.id}</td></tr><tr><td>${data.title}</td></tr><tr><td>${data.body}</td></tr>`
//     }
     
//     )
//     document.getElementById('tablerows').innerHTML =rows ;

// } catch (error) {
//     console.log(error)
    
// }
// }
// getdata();