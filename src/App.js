import './App.css';
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import * as ROUTES from './routes';
import Home from './components/Home';
import Comic from './components/Comic';
import Pages from './components/Pages';

function App() {
  return (
    <BrowserRouter basename='/the-greentext-comics'>
		<Routes>
			<Route exact path={ROUTES.HOME} element={<Home/>} />
			<Route exact path={ROUTES.COMIC} element={<Comic/>} />
			<Route path={ROUTES.PAGES} element={<Pages/>} />
		</Routes>
    </BrowserRouter>
  );
}

export default App;
