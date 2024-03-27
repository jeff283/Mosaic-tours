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
            // gender: userData.gender,
            isAdmin: userData.isAdmin,
            // admNo: userData.admNo,
            // roomId: userData.roomId,
          };
          setfetchedUser(allUserData);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className=" flex justify-between items-center w-full px-4 py-1  custom-shadow rounded-3xl mt-4 bg-eggshell ">
      <div className="font-medium text-2xl md:text-3xl">{pageTitle}</div>
      <div
        onClick={handleLogout}
        className="flex items-center space-x-2  py-0.5"
      >
        <div className="rounded-full border border-darkGreen bg-darkGreen p-1 text-eggshell hover:bg-eggshell hover:text-darkGreen">
          <GoPersonFill className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        {/* <div className="profile-name fz24 poppins-light">{pageUser || ""}</div> */}
        <div className=" font-light text-2xl hidden md:block">
          {fetchedUser.name || "No Name"}
        </div>
      </div>
    </div>
  );
};

export default PortalTopBar;
