import client from "../../lib/shopify"
import Layout from '../../components/Collections/Layout'

export async function getStaticProps({ params }) {
  const { handle } = params
  const collection = await client.collection.fetchByHandle(handle)

  

  return {
    props: {
      collection: JSON.parse(JSON.stringify(collection))
    },
  }
}

export async function getStaticPaths() {
  const collections = await client.collection.fetchAll()
  const formattedCollections = JSON.parse(JSON.stringify(collections))

  return {
    paths: formattedCollections.map((c) => ({
      params: {
        handle: c.handle,
      },
    })),
    fallback: false
  }
}

export default function CollectionPage({collection}) {
  return (
    <>
      <Layout collection={collection} />
    </>
  )
}
