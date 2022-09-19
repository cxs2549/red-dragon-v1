import HomeLayout from "../components/Home/HomeLayout"
import client from "../lib/shopify"

const Home = ({collections}) => {
  return <HomeLayout collections={collections} />
}

export default Home

export async function getStaticProps() {
  const collections = await client.collection.fetchAllWithProducts()
  return {
    props: {
      collections: JSON.parse(JSON.stringify(collections)),
    },
  }
}
