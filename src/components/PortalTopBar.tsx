import { GoPersonFill } from "react-icons/go";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import User from "../Interfaces/mosaicUser";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Props {
  pageTitle: string;
}

const PortalTopBar = ({ pageTitle }: Props) => {
  const [fetchedUser, setfetchedUser] = useState<User>({} as User);

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;

        // Fetch user data from Firestore based on UID
        const userRef = doc(db, "mosaicUsers", uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          const allUserData: User = {
            id: uid,
            name: userData.name,
            email: userData.email,
            isAdmin: userData.isAdmin,
          };
          setfetchedUser(allUserData);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-between w-full px-4 py-1 mt-4 custom-shadow rounded-3xl bg-eggshell">
      <div className="text-2xl font-medium md:text-3xl">{pageTitle}</div>
      <div
        onClick={handleLogout}
        className="flex items-center space-x-2  py-0.5"
      >
        <div className="p-1 border rounded-full border-darkGreen bg-darkGreen text-eggshell hover:bg-eggshell hover:text-darkGreen">
          <GoPersonFill className="w-7 h-7 md:w-8 md:h-8" />
        </div>
        <div className="hidden text-2xl font-light md:block">
          {fetchedUser.name || "No Name"}
        </div>
      </div>
    </div>
  );
};

export default PortalTopBar;
