import React from "react";
import { Provider } from "react-redux";
import './App.css';
import Header from './components/header/header'
import PostContainer from "./components/postcontainer/postcontainer";
import Sidebar from "./components/sidebar/sidebar";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="home">
        <PostContainer />
        <Sidebar />        
      </div>
    </Provider>
  );
}

export default App;