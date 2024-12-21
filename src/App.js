import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import EmployeeList from './components/EmployeeList';
import { store } from './store/Store';
import { Container, Box } from '@mui/material'; // Import Box

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#A5A697' },
      secondary: { main: '#FBCE3A' },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Container maxWidth="md">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', paddingTop: '20px' }}> {/* Use Box for layout */}
              <nav>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                  <li style={{ marginRight: '20px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>Todo List</Link>
                  </li>
                  <li>
                    <Link to="/employees" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>Employee List</Link>
                  </li>
                </ul>
              </nav>

              <Box sx={{ width: '100%' }}> {/* Ensure content takes full container width */}
                <Routes>
                  <Route path="/" element={<Todo />} />
                  <Route path="/employees" element={<EmployeeList />} />
                </Routes>
              </Box>
            </Box>
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;


