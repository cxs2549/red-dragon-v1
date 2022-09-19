import styled from "styled-components"

const StyledHeading = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Sonsie+One:regular);
  h1 {
    font-family: "Sonsie One";
  }
`
const Heading = ({ title, count }) => {
  return (
    <StyledHeading>
      <h1 className="text-3xl font-bold mb-12">
        {title} <span className="text-sm">({count})</span>
      </h1>
    </StyledHeading>
  )
}

export default Heading
