import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../selectors/selectors";
import {AppDispatch} from "../../store";
import {useEffect} from "react";
import {fetchUser} from "../../store/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
}

export default Header;
