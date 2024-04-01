import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./components/Header";
import PhoneCreate from "./pages/PhoneCreate";
import PhoneView from "./pages/PhoneView";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 15px;
`

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<PhoneView />} />

        <Route path="/create" element={<PhoneCreate />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
