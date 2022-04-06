import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  return function Component(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const router = { location, navigate, params };

    return <Component {...props} router={router} />;
  };
}


export default withRouter;