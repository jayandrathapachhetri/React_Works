import React from "react";
import styled from "styled-components";

const Home = () => {
  return <Wrapper className="test">Home</Wrapper>;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;


// import React from 'react'

// function Home() {
//   return (
//     <div>
//       <h1>home page</h1>
//     </div>
//   )
// }

// export default Home
