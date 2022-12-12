import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../../store/index';


export interface params{
  children: JSX.Element
  protectFrom: "authenticated" | "not-authenticated"
  redirect: string
}
const ProtectedRoute = (params:params) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authSlice.status
  );

  if (isAuthenticated === params.protectFrom) {
    return <Navigate to={ params.redirect } replace />;
  }

  return params.children;
};
export default ProtectedRoute