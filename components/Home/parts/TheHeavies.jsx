import styled from "styled-components"

const StyledLogo = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Erica+One:regular);
    @import url(https://fonts.googleapis.com/css?family=Josefin+Sans:100,200,300,regular,500,600,700,100italic,200italic,300italic,italic,500italic,600italic,700italic);

    h1 {
        font-family: "Erica One", sans-serif;
        /* font-size: 3rem ; */
        text-transform: uppercase ;
    }
    h2 {
        font-family: 'Josefin Sans', sans-serif ;
        font-weight: 700 ;
    }

`

const TheHeavies = () => {
  return (
    <StyledLogo className='px-5 pt-10 flex flex-col items-center justify-center xl:px-0 border-b'>
        <div className="relative">
        <h2 className="uppercase font-medium absolute -top-6 left-3">Home of the</h2>
            <h1 className="italic text-[4rem]">Heavies</h1>
            <h1 className="text-3xl absolute left-1 -bottom-8 text-center">重量级</h1>
        </div>
        <button className="mt-16 mb-8 bg-red-500 px-8 py-2 font-semibold">SHOP NOW</button>
    </StyledLogo>
  )
}

export default TheHeavies