import { useNavigate } from "react-router-dom";

import { auth, db, googleProvider } from "../config/firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  //   getAdditionalUserInfo,
  //   User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import mosaicUser from "@/Interfaces/mosaicUser";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  //   const [isNewUser, setNewUser] = useState(false);
  //   const [user, setUser] = useState<User>({} as User);
  //   const [userName, setUserName] = useState("");
  //   const [userEmail, setUserEmail] = useState("");
  //   const [userUid, setUserUid] = useState("");
  //   const usersCollectionRef = collection(db, "mosaicUsers");

  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //       if (currentUser.displayName) {
  //         setUserName(currentUser.displayName);
  //       }
  //       if (currentUser.email) {
  //         setUserEmail(currentUser.email);
  //       }
  //       if (currentUser.uid) {
  //         setUserUid(currentUser.uid);
  //       }
  //     }
  //   });

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      //   const additionalUserInfo = getAdditionalUserInfo(results);
      //   if (additionalUserInfo) {
      //     const isNewUser = additionalUserInfo.isNewUser;

      //     if (isNewUser) {
      //       console.log("New user signed in!");
      //       // Handle new user logic, e.g., store additional information in your database
      //       setNewUser(true);
      //     } else {
      //       console.log("Existing user signed in!");
      //       // Handle existing user logic, e.g., redirect to a different page or fetch stored data
      //       setNewUser(false);
      //     }
      //   }
    } catch (error) {
      setLoginError(
        "We could not Sign you In at the Moment. Please try again later."
      );
      console.error(error);
    }
  };

  //   Firebase Create

  const createmUser = (userData: mosaicUser, userId: string) => {
    const newmUser = {
      name: userData.name,
      email: userData.email,
      isAdmin: userData.isAdmin,
    };
    setDoc(doc(db, "mosaicUsers", userId), newmUser).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.uid) {
        const docRef = doc(db, "mosaicUsers", currentUser.uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const userAdmin = userData.isAdmin;
            if (userAdmin) {
              navigate("/admin-portal/tours");
            } else {
              navigate("/");
            }
          } else {
            // console.log("user", currentUser);
            // console.log("isNewUser", isNewUser);
            if (currentUser.displayName && currentUser.email) {
              const newmUser: mosaicUser = {
                name: currentUser.displayName,
                email: currentUser.email,
                isAdmin: true,
              };
              createmUser(newmUser, currentUser.uid);
            } else {
              navigate("/");
            }
          }
        } catch (err) {
          console.error(err);
        }
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="w-full py-6 space-y-6 text-center border rounded-3xl border-darkGreen">
      <div className="p-2 text-4xl font-semibold shadow-custom">Sign In</div>
      <p className="text-lg text-lightGray">Please Sign in Below</p>
      <div className="px-1 py-2">
        <Button className="p-6 bg-darkGreen" onClick={handleGoogleSignIn}>
          <FaGoogle size={32} />
          <div className="pl-4 text-xl">Sign In With Google</div>
        </Button>
      </div>
      {loginError && (
        <div className="text-lg font-light text-red-400">{loginError}</div>
      )}
    </div>
  );
};

export default LoginForm;
