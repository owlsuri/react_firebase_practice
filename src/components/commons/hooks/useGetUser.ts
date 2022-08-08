import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../slice/user";

export default function useGetUser() {
  const userAuth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(userAuth, (profile) => {
      if (profile) {
        dispatch(
          addUser({
            name: profile.displayName,
            id: profile.email,
            uid: profile.uid,
          })
        );
      }
    });
  }, []);
}
