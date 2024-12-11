
import { useNavigate } from 'react-router-dom';

export const GuestLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    // Set the Authorization token in localStorage
    localStorage.setItem(
      'Authorization', 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjV9.MSjqvItzx9Or761jFoFXgrVhfQSnCdgTjcbtRHdbPp0'
    );
    
    // Redirect to /blogs page after setting the token
    navigate('/blogs');
  };
