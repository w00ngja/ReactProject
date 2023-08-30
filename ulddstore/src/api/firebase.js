// Firebase 초기화
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  // callback 등록해두면, 사용자의 상태 정보가 변경될 때마다 등록한 콜백을 호출하는 방식
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await getAdmin(user) : null;
    callback(updatedUser);
  });
}

const dbRef = ref(getDatabase());
async function getAdmin(user) {
  // * 2. 그 사용자가 어드민인지 여부를 판별
  // * 3. {...user, isAdmin : true / false}를 넘겨주면 됨
  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}
