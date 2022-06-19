const miniRedeSocial = {
  users: [
    {
      username: "endersonlynhares",
      birthday: "2005-05-31",
    },
    {
      username: "souzabraga",
      birthday: "2001-03-26",
    },
  ],

  posts: [
    {''
      id: Date.now(),
      owner: "endersonlynhares",
      title: "Tops linguagens de Programação",
      content:
        "Javascript está entre as linguagens mais usadas no mundo, ela chega ao ranking das 5 linguagens de programação mais usadas em 2022",
    },
  ],

  createPost: (dados, HTMLOnly = false) => {
    const idInternoAqui = Date.now()
    //parte que adiciona na memória
    if(!HTMLOnly){
        miniRedeSocial.posts.push({
            id: dados.id || idInternoAqui,
            owner: dados.owner,
            title: dados.title,
            content: dados.content,
        })
    }
    //parte que adiciona no HTML
    const $listaDePosts = document.querySelector(".listaDePosts");
    $listaDePosts.insertAdjacentHTML(
        "afterbegin",
        `<li data-id="${idInternoAqui}"> 
            <h3>${dados.title}</h3> 
            <p>${dados.content}</p> 
            <small>@${dados.owner}</small>
            <button class="btn-delete">X</button>
        </li>`
      );
    
  },
  readPosts: () => {
    miniRedeSocial.posts.forEach(({ id, owner, title, content }) =>{
        miniRedeSocial.createPost({id: id, owner: owner, title: title, content: content}, true)
    })
  },

  updatePost: (id, newContent) =>{
    const selectedPost = miniTwitter.posts.find( post => {
        return post.id === id;
    })

    selectedPost.content = newContent
  },

  deleteOnlyPost: (id) =>{
    //parte que deleta na memória
    const listUpdatedPosts = miniRedeSocial.posts.filter((post)=>{
        return post.id != id
    })
    miniRedeSocial.posts = listUpdatedPosts
    //parte que deleta no HTML
  }
};

miniRedeSocial.readPosts()

const $myForm = document.querySelector("form");
$myForm.addEventListener("submit", function createPostController(infosDoEvento) {
    infosDoEvento.preventDefault();
    const $titleField = document.querySelector("input[name='title']");
    const $contentField = document.querySelector("input[name='content']");
    miniRedeSocial.createPost({owner: "endersonlynhares", title:$titleField.value, content: $contentField.value })
    console.log(miniRedeSocial.posts)
    $titleField.value = "";
    $contentField.value = "";
});

document.querySelector("ul.listaDePosts").addEventListener("click", (infosDoEvento)=>{
    const elementoAtual = infosDoEvento.target
    const isBtnDeleteClick = infosDoEvento.target.classList.contains("btn-delete");
    if(isBtnDeleteClick){
        const id = elementoAtual.parentNode.getAttribute("data-id")
        miniRedeSocial.deleteOnlyPost(id)
        elementoAtual.parentNode.remove()
    }
})
