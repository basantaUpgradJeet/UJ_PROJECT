import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function useWithAuth () {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loggedInUser } = useSelector((state) => ({
      loggedInUser: state.loggedInUser,
    }));
    const [isBrowser, ] = useState(() => typeof window !== 'undefined');

    useEffect(() => {
      const user = Cookies.get("loggedInUser");
      // if user is not loggedIn and cookie is not set redirect to Login
      if (!user) {
        router.push("/login");
      }
      // else let him stay on the page
      if (user && !loggedInUser) {
        // page reload
        dispatch({ type: "UPDATE_LOGGED_IN_USER", payload: true });
      }
    });

    return  {
        user: isBrowser && loggedInUser,
    }
}
