import React from "react";
import Article from "./Article"

// main element with following inside:
// array of article components >> one component, each with unique key for each post passed down as prop to ArticleList
function ArticleList({ posts }) {
    const articlesArray = posts.map(post => {
       return  <Article 
       key={post.id} 
       title={post.title} 
       date={post.date} 
       preview={post.preview} 
       />
    })
    
    return (
        <main>
            {articlesArray}
        </main>
    )
}

export default ArticleList;