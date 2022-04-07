import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext';

export function AppRoutes () {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />

          <Route 
            path="/rooms/new"
            element={<NewRoom />}
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}