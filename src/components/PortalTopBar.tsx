import { GoPersonFill } from "react-icons/go";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import User from "../Interfaces/User";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
// import { useState } from "react";

interface Props {
  pageTitle: string;
}

const PortalTopBar = ({ pageTitle }: Props) => {
  const [fetchedUser, setfetchedUser] = useState<User>({} as User);

  const handleLogout = () => {
    signOut(auth);
    console.log("Out");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;

        // Fetch user data from Firestore based on UID
        const userRef = doc(db, "Users", uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          const allUserData: User = {
            id: uid,
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            gender: userData.gender,
            isAdmin: userData.isAdmin,
            admNo: userData.admNo,
            roomId: userData.roomId,
          };
          setfetchedUser(allUserData);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="portal-top-container ">
      <div className="fz32 poppins-medium">{pageTitle}</div>
      <div onClick={handleLogout} className="portal-top-profile ">
        <div className="profile ">
          <GoPersonFill size="34" />
        </div>
        {/* <div className="profile-name fz24 poppins-light">{pageUser || ""}</div> */}
        <div className="profile-name fz24 poppins-light">
          {fetchedUser.name}
        </div>
      </div>
    </div>
  );
};

export default PortalTopBar;
