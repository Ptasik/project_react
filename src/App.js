import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navBar";
import Profile from "./components/profile/profile";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import {Route} from "react-router-dom";
import Friends from "./components/friends/friends";
import DialogsContainer from "./components/dialogs/dialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>

            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends store={props.store}/>}/>
            </div>
        </div>
    );
}

export default App;
