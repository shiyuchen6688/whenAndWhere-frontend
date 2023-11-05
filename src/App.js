import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';  // import the login page
import PostsPage from './pages/PostsPage';  // import pages
import CreatePage from './pages/CreatePage';
import ChatPage from './pages/ChatPage';
import TopMenuBar from './components/TopMenuBar';
// used to customize theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
// to route using react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Create a theme instance with black as the primary main color
const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // black color
      // You can also specify light, dark, and contrastText if needed
    },
    // change the text to light color for better contrast, uncomment the following:
    text: {
      primary: "#fff",
      secondary: "#e0e0e0",
    },
  },
});

function App() {
  return (
    // Wrap your application in the ThemeProvider and pass your theme as a prop
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <TopMenuBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/chat" element={<ChatPage />} />
            {/* Redirect to login page as the default route */}
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
