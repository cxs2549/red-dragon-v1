import Link from "next/link"
import styled from "styled-components"

const StyledLogo = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Erica+One:regular);
  @import url(https://fonts.googleapis.com/css?family=Josefin+Sans:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic);

  h1 {
    font-family: "Erica One", sans-serif;
    /* font-size: 3rem ; */
    text-transform: uppercase;
  }
  h2 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 500;
  }
`

const TheHeavies = () => {
  return (
    <StyledLogo className="px-5  flex flex-col items-center justify-center xl:px-0">
      <div className="relative">
        <h2 className="uppercase font-medium text-gray-700 dark:text-gray-300 absolute -top-[23px] lg:-top-[16px] lg:left-5 xl:left-6 xl:text-xl xl:-top-[4px] left-3">
          Home of the
        </h2>
        <h1 className="italic text-gray-700 dark:text-slate-200 text-[4rem] md:text-7xl lg:text-8xl xl:text-9xl">
          Heavies
        </h1>
        <h1 className="text-3xl xl:text-5xl xl:top-full absolute left-1 -bottom-8 text-center">
          重量级
        </h1>
      </div>
      <Link href="/collections/the-heavies">
        <button className="text-xl mt-14 mb-8 xl:text-2xl rounded bg-red-500 px-8 py-2 font-semibold text-white">
          SHOP NOW
        </button>
      </Link>
    </StyledLogo>
  )
}

export default TheHeavies
