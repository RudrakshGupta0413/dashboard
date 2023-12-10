
import './Sidebar.css';

const Sidebar = ({ onPageChange }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Company Logo */}
        <img src="path/to/your/logo.png" alt="Company Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => onPageChange('dashboard')}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => onPageChange('postJob')}>Post a Job</button>
          </li>
          <li>
            <button onClick={() => onPageChange('allApplicants')}>All Applicants</button>
          </li>
        </ul>
      </nav>
      <div className="user-login">
        {/* User login information or login button */}
        <img src="path/to/your/logo.png" alt="User Name" />
      </div>
    </div>
  );
};

export default Sidebar;
