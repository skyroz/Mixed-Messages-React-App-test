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
    NavLink,
    Navigate
} from 'react-router-dom';
import AskMeAnything from './AskMeAnything';
import SearchResultsPage from './SearchResultsPage';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
	<Route path="/" element={<App />} />
	<Route path="AskMeAnything" element={<AskMeAnything />} />
	<Route path="SearchResultsPage" element={<SearchResultsPage/>} />
    </React.Fragment>
  )
);
	    
					 function App() {
					     return (

			<>	
	    <Outlet />
    <div className="App">
      <header className="App-header">
        <p>
          Eat yer beans kids <br />Edit and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
		    </>
	  
	    
					     )
					 };


		

					 const MainApp = () => <RouterProvider router={appRouter} />

					 export default MainApp;

	   
