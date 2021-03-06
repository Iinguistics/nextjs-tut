import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config/index'


export default function Home({ articles }) {
  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  )
  }


// static props runs at build time
export const getStaticProps = async () =>{
  //const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json();

  // pass in whatever you want as props, then destructure out up top. make sure props is an object
  return{
    props: {
      articles
    }
  }
}


