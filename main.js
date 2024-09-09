fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((user)=>{
        let mainDiv= document.createElement("div")
        for (let i = 0; i < user.length; i++) {
            let div = document.createElement('div')
            let id = document.createElement('p')
            let name = document.createElement('p')
            id.innerText=user[i].id
            name.innerText=user[i].name
            div.appendChild(id)
            div.appendChild(name)
            let button= document.createElement("button")
            button.onclick= function (){
                window.location.href='user-details.html'
                localStorage.setItem('userId',user[i].id)
            }
            button.innerText='Learn More'
            div.appendChild(button)
            div.classList.add('divClass')
            mainDiv.appendChild(div)
        }
        mainDiv.classList.add('mainDiv')
        document.body.appendChild(mainDiv)

    })

