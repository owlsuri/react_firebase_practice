import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FireBaseExample from "./components/pages/Test";
import { createGlobalStyle } from "styled-components";
import MainPage from "./components/pages/routes/MainPage";
import DetailPage from "./components/pages/routes/DetailPage";
import ListPage from "./components/pages/routes/ListPage";
import MyPage from "./components/pages/routes/MyPage";
import SignInPage from "./components/pages/routes/SignInPage";
import SignUpPage from "./components/pages/routes/SignUpPage";
import ErrorPage from "./components/pages/routes/404";
import Layout from "./components/pages/Layout";
// import { colorPick } from "./components/commons/color/colorPick";
import WritePage from "./components/pages/routes/WritePage";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  font-size: 20px;
  font-family: "kopubDotum";
  /* letter-spacing: 2px;   */
  }
  
  body {
  min-height: 100vh;
  }

  @font-face {
    font-family: "kopubDotum";
    src: url("/font/KoPubWorld Dotum Medium.ttf");
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/test" element={<FireBaseExample />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/myPage/:id" element={<MyPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
