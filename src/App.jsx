
import { useState } from 'react';
import Ro
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import AllApplicantsPage from './pages/AllApplicants/AllApplicantsPage';
import PostJobPage from './pages/PostJob/PostJobPage';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar onPageChange={handleNavigation} />
        <div className="content">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'postJob' && <PostJobPage />}
          {currentPage === 'allApplicants' && <AllApplicantsPage />}
        </div>
      </div>
    </div>
    <Router>
      <Routes>
       <Route path="/" element={<DashboardPage />} />
       <Route path="/" element={<PostJobPage />} />
       <Route path="/" element={<AllApplicantsPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
