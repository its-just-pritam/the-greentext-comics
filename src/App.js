import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './routes';
import Home from './components/Home';
import Comic from './components/Comic';
import Pages from './components/Pages';

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path={ROUTES.HOME} element={<Home/>} />
			<Route path={ROUTES.COMIC} element={<Comic/>} />
			<Route path={ROUTES.PAGES} element={<Pages/>} />
		</Routes>
    </BrowserRouter>
  );
}

export default App;
