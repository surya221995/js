async function getdata(){
    // const api ="https://jsonplaceholder.typicode.com/posts"
        const api ="https://jsonplaceholder.typicode.com/users"
    try {
        const response =await fetch(api)
        const json =await response.json()
        console.log(json)
        // Result :
        // {
        //     "id": 1,
        //     "name": "Leanne Graham",
        //     "username": "Bret",
        //     "email": "Sincere@april.biz",
        //     "address": {
        //         "street": "Kulas Light",
        //         "suite": "Apt. 556",
        //         "city": "Gwenborough",
        //         "zipcode": "92998-3874",
        //         "geo": {
        //             "lat": "-37.3159",
        //             "lng": "81.1496"
        //         }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "hildegard.org",
        //     "company": {
        //         "name": "Romaguera-Crona",
        //         "catchPhrase": "Multi-layered client-server neural-net",
        //         "bs": "harness real-time e-markets"
        //     }
        // }
        let rows ="";
        json.forEach( (data) =>
        {
          rows += `<td>${data.id}</td><td>${data.name}</td><td>${data.username}</td><td>${data.email}</td><td>${data.address.city}</td></tr>`
        }
         
        )
        document.getElementById('tablerows').innerHTML = rows ;
    
    } catch (error) {
        console.log(error)
        
    }
    }
    getdata();

    // Search Bar Functionality on Fetched API Pure Javascript
    const searchfun =() => {
        let filter = document.getElementById("myInputs").value.toUpperCase(); 
        let mytable = document.getElementById("myTable")
        let tr = mytable.getElementsByTagName("tr")
        console.log(tr)
        for (var i=0; i<tr.length; i++){
            let td = tr[i].getElementsByTagName("td")[1];//column number you want to search with 0 for id 1 for search by name
            if(td){
                let textvalue =td.textContent || td.innerHTML;
                if(textvalue.toUpperCase().indexOf(filter) > -1 ){
                    tr[i].style.display="";
                }else{
                    tr[i].style.display= "none"
                }
            }
        }
    }