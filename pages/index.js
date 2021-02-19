import Head from 'next/head'
import ArticleList from '../components/ArticleList'
//import styles from '../styles/Home.module.css'
//className={styles.footer}

export default function Home({ articles }) {
  return (
    <div>
      <head>
        <title>nextjs tut</title>
      </head>
      <meta name="keywords" content="web dev, programming" />
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  )
  }


// static props runs at build time
export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  // pass in whatever you want as props, then destructure out up top. make sure props is an object
  return{
    props: {
      articles
    }
  }
}


