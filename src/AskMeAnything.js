import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Link,
    NavLink
} from "react-router-dom";
import MainApp from './App';
import SearchResultsPage from './SearchResultsPage';


function AskMeAnything(props) {

    const Stylings = {
	alignItems: "center",
	textAlign: "center",
    }

    const WhichGenreBlurb = (<h1>'You want action? I\'ll give you action'</h1>);

    const WhichGenre = (input) => {
	if (input = "action") {
	   WhichGenre.push = `${WhichGenreBlurb}`
	    return WhichGenre.push;
	}
	else if (input = "romance") {
	    return;
	}
	else if (input = "adventure") {
	    return;
	}
	else if (input = "sci-fi") {
	    return;

	}
	else if ("western") {
	    return;
	}
	else if ("space opera") {
	    return;

	}

	else if ("theater" || "theatre" || "play" || "shakespeare") {
	    return;

	}
    }

    return(
	    <>
	    <title>Find a Good Book to Read</title>

		<div className="fuckaroundNFindOut" style={Stylings}>
	    <h1 >What genre of book would you like to read?</h1>
	    <label type="search" detail="search bar">
		<input type="search" />
	    </label>
		    <button type="search" text="search" title="Search For A Good Book To Read!" onClick={WhichGenre} target="_blank">Search</button>
		    
		</div>
	    </>
    );
}

export default AskMeAnything;
