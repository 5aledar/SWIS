// components/ProtectedRoute.tsx
import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
        navigate('/')
    }
    if (!token) {
      navigate('/log-in'); 
    }
    
  }, [navigate]);

  return <>{children}</>; // Render children if authenticated
};

export default ProtectedRoute;
