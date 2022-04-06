import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(FoodComp) {
  return function Component(props) {
    const location = useLocation();
    const navigate= useNavigate();
    const params = useParams();

    const router = { location, navigate, params };

    return <FoodComp {...props} router={router} />;
  };
}


export default withRouter;