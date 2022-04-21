import { useEffect } from "react";
import AppRouter from "./router/Router";
import { auth } from "./utils/firebaseUtil";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { setCurrentUser} from './redux/actions/authActions'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const userInfo = onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user))
    })
    return userInfo;
  }, [dispatch])

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
