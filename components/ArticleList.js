import React from 'react'
import articleStyles from '../styles/Article.module.css'
import ArticleItem from '../components/ArticleItem'
import article from '../pages/article/[id]'

const ArticleList = ({ articles }) => {
    return (
     <div className={articleStyles.grid} key={article.id}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
    )
}

export default ArticleList
