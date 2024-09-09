
let id=localStorage.getItem('userId')
id= +id
fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((response)=>response.json())
    .then((user)=>{
        console.log(user[0].address.geo)
        let div = document.createElement('div')
        let id = document.createElement('p')
        id.innerText=user[0].id
        div.appendChild(id)
        let name = document.createElement('p')
        name.innerText=user[0].name
        div.appendChild(name)
        let username= document.createElement('p')
        username.innerText=user[0].username
        div.appendChild(username)
        let email = document.createElement('p')
        email.innerText=user[0].email
        div.appendChild(email)

        let address=document.createElement('p')
        address.innerText+=user[0].address.street
        address.innerText+=' '
        address.innerText+=user[0].address.suite
        address.innerText+=' '
        address.innerText+=user[0].address.city
        address.innerText+=' '
        address.innerText+=user[0].address.zipcode
        address.innerText+=' '
        address.innerText+=user[0].address.geo.lat
        address.innerText+=' '
        address.innerText+=user[0].address.geo.lng
        div.appendChild(address)
        document.body.appendChild(div)
        let phone = document.createElement('p')
        phone.innerText=user[0].phone
        div.appendChild(phone)
        let website = document.createElement('a')
        website.innerText=user[0].website
        website.href=user[0].website
        div.appendChild(website)
        let company= document.createElement('p')
        company.innerText=user[0].company.name
        company.innerText+=' '
        company.innerText+=user[0].company.catchPhrase
        company.innerText+=' '
        company.innerText+=user[0].company.bs
        div.appendChild(company)
        let btn=document.createElement('button')
        btn.innerText='post of current user'
        div.classList.add('divClass')
        btn.classList.add('btnClass')
        div.appendChild(btn)

        btn.onclick=function (){
            return new Promise((resolve)=>{
                fetch(`https://jsonplaceholder.typicode.com/users/${user[0].id}/posts`)
                    .then(value => {
                        resolve(value);
                    })
            })
                .then(response=>response.json())
                .then(value => {
                    let postsDiv= document.createElement('div')
                    postsDiv.classList.add('postsClass')
                    for (let i = 0; i < value.length; i++) {
                        let postDiv=document.createElement("div")
                        let post=document.createElement("p")
                        post.innerText=value[i].title
                        postDiv.appendChild(post)
                        let btnPost=document.createElement('button')
                        btnPost.innerText='More about post'
                        postDiv.appendChild(btnPost)
                        postsDiv.appendChild(postDiv)
                        postDiv.classList.add('postClass')
                        document.body.appendChild(postsDiv)


                        btnPost.onclick=function (){
                            window.location.href='post-details.html'
                            localStorage.setItem('postId',value[i].id)
                            localStorage.setItem('userId',value[i].userId)
                        }
                    }
                })
            // fetch(`https://jsonplaceholder.typicode.com/users/${user[0].id}/posts`)
            //     .then((respPost)=> respPost.json())
            //     .then((posts)=>{
            //         console.log(posts)
            //         for (let i = 0; i < posts.length; i++) {
            //             console.log('.')
            //         }
            //     })
        }

    })
localStorage.removeItem('userId')
