console.log("Olá, mundo")

const miniTwitter = {
    users: [
        {
            username: "endersonlynhares",
            birthday: "2005-05-31"
        }, 
        {
            username: "souzabraga",
            birthday: "2001-03-26"
        }
    ],

    posts: [
        {
            id: 1,
            owner: "endersonlynhares",
            title: "Tops linguagens de Programação",
            content: "Javascript está entre as linguagens mais usadas no mundo, ela chega ao ranking das 5 linguagens de programação mais usadas em 2022"
        }
    ]
}

function createPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner, 
        title: dados.title, 
        content: dados.content
    })
}

console.log(miniTwitter)

//CREATE
createPost({ owner: "souzabraga", title: "A linguagem que está adaptando à qualquer demanda no mercado de trabalho", content: "A linguagem, Javascript, é uma das principais linguagens que, atualmente, pode atender a qualquer situação devido à sua versatilidade na hora de codar." })


//READ

const readPost = () => {
    return miniTwitter.posts;
}

console.log(readPost())

//UPDATE

function updateOnlyPost(id, newContent){
    const selectedPost = miniTwitter.posts.find( post => {
        return post.id === id;
    })

    selectedPost.content = newContent
}


updateOnlyPost(2, "Conteudo atualizado com sucesso! :)")

//DELETE

function deleteOnlyPost(id){
    const postListUpdated = miniTwitter.posts.filter(post =>{
        return post.id !== id
    })

    miniTwitter.posts = postListUpdated;
}

console.log(readPost())

deleteOnlyPost(2)

console.log(readPost())


console.log(miniTwitter)