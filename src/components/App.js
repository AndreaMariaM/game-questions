import React, { useState } from 'react';
import Questions from "./Questions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from "./Header";

function App() {
    return (
    <div clasName="contianer"><Header />
    <Questions/></div>);

}

export default App;
