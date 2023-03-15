import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  apiKey=process.env.REACT_APP_NEWS_API

  state = {
    progress:0 
  }

  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
          height={3}
            color="cyan"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News 
                  setProgress = {this.setProgress}  
                  apiKey={this.apiKey}  
                  key="general"
                  country="in"
                  category="general"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News 
                  setProgress = {this.setProgress}
                  apiKey={this.apiKey} 
                  key="business"
                  country="in"
                  category="business"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News 
                  setProgress = {this.setProgress}  
                  apiKey={this.apiKey} 
                  key="entertainment"
                  country="in"
                  category="entertainment"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress = {this.setProgress}  
                apiKey={this.apiKey}  
                  key="health"
                  country="in"
                  category="health"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress = {this.setProgress}  
                apiKey={this.apiKey}

                  key="science"
                  country="in"
                  category="science"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress = {this.setProgress}  
                apiKey={this.apiKey}
                  key="sports"
                  country="in"
                  category="sports"
                  pageSize={this.pageSize}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress = {this.setProgress}  
                apiKey={this.apiKey} 
                  key="technology"
                  country="in"
                  category="technology"
                  pageSize={this.pageSize}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
