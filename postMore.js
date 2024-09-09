let postid=localStorage.getItem('postId')
postid= +postid

let userId=localStorage.getItem('userId')
userId= +userId

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postid}`)
    .then((response)=>response.json())
    .then((post)=> {
        console.log(post)
        let div=document.createElement('div')
        let userid=document.createElement("p")
        userid.innerText=post[0].userId
        let id =document.createElement("p")
        id.innerText=post[0].id
        let title=document.createElement("p")
        title.innerText=post[0].title
        let body=document.createElement("p")
        body.innerText=post[0].body

        div.appendChild(title)
        div.appendChild(userid)
        div.appendChild(id)
        div.appendChild(body)
        div.classList.add('postClass')
        document.body.appendChild(div)
            fetch(`https://jsonplaceholder.typicode.com/posts/${post[0].id}/comments`)
                .then((resp)=>resp.json())
                .then((comments=>{
                        console.log(comments)
                        let commentsDiv=document.createElement('div')
                        for (let i = 0; i < comments.length; i++) {
                                let div=document.createElement('div')
                                let postId=document.createElement("p")
                                postId.innerText=comments[i].postId
                                let userid=document.createElement("p")
                                userid.innerText=comments[i].id
                                let name =document.createElement("p")
                                name.innerText=comments[i].name
                                let email=document.createElement("p")
                                email.innerText=comments[i].email
                                let body=document.createElement("p")
                                body.innerText=comments[i].body
                                div.appendChild(name)
                                div.appendChild(userid)
                                div.appendChild(postId)
                                div.appendChild(email)
                                div.appendChild(body)
                                div.classList.add('commentClass')
                                commentsDiv.appendChild(div)
                        }
                        commentsDiv.classList.add('commentsClass')
                        document.body.appendChild(commentsDiv)

                }))
    })
localStorage.removeItem('userId')
localStorage.removeItem('postId')