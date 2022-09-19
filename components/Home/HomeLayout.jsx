import Carousel from "./parts/Carousel"
import TheHeavies from "./parts/TheHeavies"
import Browse from "./parts/Browse"
import Scroll from "./parts/Scroll"
import AnimLayout from "../AnimatedLayout"

const HomeLayout = ({ collections }) => {
  const theHeavies = collections.filter((c) => c.title === "The Heavies")[0]
  const portables = collections.filter(c => c.title === 'Portable')
  return (
    <AnimLayout>
      <div className="flex-col flex justify-center lg:flex-row lg:mb-10 items-center gap-8 max-w-7xl mx-auto ">
        <Carousel items={theHeavies.products} />
        <TheHeavies />
      </div>
      <Browse items={collections} />
      <Scroll items={portables} />
    </AnimLayout>
  )
}

export default HomeLayout
