import { useRouter } from 'next/router'
import Link from 'next/link'
import { server } from '../../../config/index'
import Meta from '../../../components/Meta'

// for routes with id's
// make dir inside pages, called this one article
// make dir inside article called [id]
// make file inside [id] called index.js....changed the name from index to article
// router.query on has one value, id
// path is /article/[id]
const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <>
        <Meta title={article.title} description={article.excerpt} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        
        <Link href="/">
         Go Back
        </Link>
        </>
        
    )
}


// serverSideProps fetches data on ea request rather than at build time..it is slower this way than getStaticPaths & getStaticProps combo
// export const getServerSideProps = async (context) =>{
//      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//      const article = await res.json()
//      return{
//         props: {
//           article
//         }
//       }
// }


// context allows us to get the id that is in the URL
export const getStaticProps = async (context) =>{
    //const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return{
       props: {
         article
       }
     }
}


//Specify dynamic routes to pre-render pages based on data.
export const getStaticPaths = async () =>{
    // fetch all posts
    //const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    
    // loop through all articles & return their id's
    const ids = articles.map((article => article.id))
    
    // loop through all the id's & return a params object with all the id's
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}





export default article
