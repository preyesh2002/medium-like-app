import React from 'react';
import { useRouter } from 'next/router';

const GuestLogin: React.FC = () => {
  const router = useRouter();

  const handleGuestLogin = () => {
    // Set the Authorization token in localStorage
    localStorage.setItem(
      'Authorization', 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjV9.MSjqvItzx9Or761jFoFXgrVhfQSnCdgTjcbtRHdbPp0'
    );
    
    // Redirect to /blogs page after setting the token
    router.push('/blogs'); // Redirecting to the /blogs page
  };

  return (
    <button onClick={handleGuestLogin}>Guest Login</button>
  );
};

export default GuestLogin;
