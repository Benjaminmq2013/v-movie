import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../../store/index';


export interface params{
    children: JSX.Element
}
const ProtectedRoute = (params:params) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authSlice.status
  );

  if (isAuthenticated === "not-authenticated") {
    return <Navigate to="/login" replace />;
  }

  return params.children;
};
export default ProtectedRoute