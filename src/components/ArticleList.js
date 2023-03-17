import React from 'react'
import Article from './Article'

function ArticleList(props) {

    const article = props.post.map((item) => (
        <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes} />))


    return (
        <main>

            {article}
        </main>
    )
}

export default ArticleList