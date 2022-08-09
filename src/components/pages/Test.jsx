import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from "../../Firebase";
import React, { useEffect, useState } from "react";
// import NextButton from "../commons/buttons/nextButton";
// import Input from "../commons/inputs/input";
// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   listAll,
//   getDownloadURL,
// } from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

function FireBaseExample(props) {
  // 데이터 패칭 및 불러오기
  const [data, setData] = useState([]);

  const board = collection(getFirestore(firebaseApp), "board");
  const onClickSubmit = async () => {
    await addDoc(board, {
      name: "민영",
      age: "30",
    });
  };

  useEffect(() => {
    async function fetchBoard() {
      const board = collection(getFirestore(firebaseApp), "board");
      const q = query(board, where("name", "==", "민영"), orderBy("name"));
      const result = await getDocs(q);
      const boards = result.docs.map((el) => el.data());
      setData(boards);
    }
    fetchBoard();
  }, []);

  // const onClickFetch = async () => {
  //   const ref = collection(getFirestore(firebaseApp), "board");
  //   const bbb = await getDocs(ref);
  //   console.log(bbb, "여긴가?");
  //   const ccc = bbb.docs.map((el) => el.data);
  //   console.log(ccc, "이건가?");
  //   setData(ccc);

  // };

  console.log(data, "이거였나");
  //

  // 파일 업로드
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageList, setImageList] = useState([]);

  // const storage = getStorage(firebaseApp);
  // const imageListRef = ref(storage, "images/");

  // const upload = () => {
  //   if (imageUpload === null) return;

  //   const imageRef = ref(storage, `images/${imageUpload.name}`);
  //   // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     // 업로드 되자마자 뜨게 만들기
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList((prev) => [...prev, url]);
  //     });
  //     //
  //   });
  // };
  // // 이미지 불러오기
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  // 회원가입 구현
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const profile = await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(user);
      console.log(profile);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 로그인
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 로그아웃
  const logout = async () => {
    await signOut(auth);
  };

  // 유저 정보 가져오기

  const userAuth = getAuth();

  onAuthStateChanged(userAuth, (profile) => {
    if (profile) {
      console.log(profile, "profile");
    }
  });

  console.log(userAuth, "userAuth");

  return (
    <div>
      {/* 데이터 패칭 */}
      <button onClick={onClickSubmit}>하이</button>
      {/* <button onClick={onClickFetch}>데이터 불러오기</button> */}
      {data?.map((el, idx) => (
        <div key={idx}>
          <div>{el.name}</div>
          <div>{el.age}</div>
        </div>
      ))}
      {/* <div style={{ width: "200px" }}>
        <NextButton contents="다음" />
      </div>
      <div>
        <Input type="text" placeholder="내용을 입력해주세요" />
      </div> */}

      {/* 이미지업로드 */}
      {/* <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={upload}>업로드</button>
      {imageList.map((el) => {
        return <img key={el} src={el} />;
      })} */}

      {/* 회원가입 */}
      <div>
        이메일
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        비밀번호
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        이름
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={register}>회원가입</button>
      </div>
      <div>
        <div>회원가입</div>
        이메일
        <input
          type="email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        비밀번호
        <input
          type="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button onClick={login}>로그인</button>
        <button onClick={logout}>로그아웃</button>
        <div>{user?.email}</div>
        <div>{user?.displayName}</div>
      </div>
    </div>
  );
}

export default FireBaseExample;
