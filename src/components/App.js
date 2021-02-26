import React, { useState } from 'react';
import Questions from "./Questions";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from "./Header";

function App() { // title the game "Apocalypse". 
    return (
    <div clasName="contianer"><Header />
    <Questions/></div>);

}

export default App;
