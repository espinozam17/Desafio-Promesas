async function getPosts(){
    try {
        const apiResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts" 
        );

        const data = await apiResponse.json()
        const postSection = document.getElementById('post-data')
        data.forEach((post) => {
            let postItem = `
                <ul>
                  <li>
                    <h5>${post.title}</h5>
                    <p>${post.body}</p>
                  </li>
                </ul>
              `;
            postSection.innerHTML += postItem;
          });
        
    } catch (error) {
        console.error('Error fetching or displaying posts:', error);
        
    }
}