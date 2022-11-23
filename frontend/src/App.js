import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Header } from "./components/Header";
import { Home,  Registration,  Login } from "./pages";

function App() {
  return (
    <>
      <Header />
				<Routes>
        <Home />
        <Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				</Routes>
    </>
  );
}

export default App;