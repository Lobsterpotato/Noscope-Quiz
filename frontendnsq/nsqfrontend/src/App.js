import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PlayerLogin from "./Components/Login/PlayerLogin";
import Navbar from "./Components/Navbar/Navbar";
import PlayerRegister from "./Components/Register/PlayerRegister";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Resultat from "./Components/Resultat/Resultat";
import ListeJoueurs from "./Components/AdminPage/ListeJoueurs";
import Dashboard from "./Components/AdminPage/Dashboard";
import AjoutQuestion from "./Components/AdminPage/AjoutQuestion";
import ListeQuestions from "./Components/AdminPage/ListeQuestions";
import AjoutQuiz from "./Components/AdminPage/AjoutQuiz";
import ModifierQuestion from "./Components/AdminPage/ModifierQuestion";
import Lobby from "./Components/Home/Lobby";

function App() {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/" component={Lobby}/>
            <Route path="/home" component={Home}/>
            <Route path="/register" component={PlayerRegister}/>
            <Route path="/login" component={PlayerLogin}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/result" component={Resultat}/>
            <Route path="/liste_joueurs" component={ListeJoueurs}/>
            <Route path="/ajouter_question" component={AjoutQuestion}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/liste_questions" component={ListeQuestions}/>
            <Route path="/ajout_quiz" component={AjoutQuiz}/>
            <Route path="/modifer_question" component={ModifierQuestion}/>
        </Router>
    );
}

export default App;


