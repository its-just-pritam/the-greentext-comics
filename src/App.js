import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import * as ROUTES from './routes';
import Home from './components/Home';
import Comic from './components/Comic';
import Pages from './components/Pages';

function App() {
  return (
    <HashRouter>
		<Routes>
			<Route path={ROUTES.HOME} element={<Home/>} />
			<Route path={ROUTES.COMIC} element={<Comic/>} />
			<Route path={ROUTES.PAGES} element={<Pages/>} />
		</Routes>
    </HashRouter>
  );
}

export default App;
