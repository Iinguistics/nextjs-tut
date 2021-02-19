import { useRouter } from 'next/router'

// for routes with id's
// make dir inside pages, called this one article
// make dir inside article called [id]
// make file inside [id] called index.js....changed the name from index to article
// router.query on has one value, id
// path is /article/[id]
const article = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            This is article {id}
        </div>
    )
}

export default article
