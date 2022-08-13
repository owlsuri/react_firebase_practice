import {
  // addDoc,
  collection,
  getDocs,
  getFirestore,
  // orderBy,
  query,
  where,
  // doc,
  // setDoc,
  addDoc,
  // orderBy,
} from "firebase/firestore";
import firebaseApp from "../../Firebase";
import React, { useEffect, useState } from "react";
// import NextButton from "../commons/buttons/nextButton";
// import Input from "../commons/inputs/input";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

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

  // 수정
  // const board = collection(getFirestore(firebaseApp), "board");
  // const onClickSubmit = async () => {
  //   await setDoc(doc(board, "문서ID"), {
  //     name: "철수",
  //     age: 19,
  //   });
  // };
  const board = collection(getFirestore(firebaseApp), `board`);
  const onClickSubmit = async () => {
    await addDoc(board, {
      name: "철수",
      age: 25,
    });
  };

  useEffect(() => {
    async function fetchBoard() {
      const board = collection(getFirestore(firebaseApp), "board");
      const q = query(board, where("age", "<=", 23));

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

  //

  // 파일 업로드
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState("");

  const storage = getStorage(firebaseApp);
  const imageListRef = ref(storage, "images/");

  const upload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // 업로드 되자마자 뜨게 만들기
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url, "💣");
        setImageList(url);
      });
      //
    });
  };
  // 이미지 불러오기
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url, "💻");
          setImageList(url);
        });
      });
    });
  }, []);

  console.log(imageList, "list");
  console.log(imageUpload, "imageUpload");

  // 회원가입 구현
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
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
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 로그아웃
  const logout = async () => {
    await signOut(auth);
  };

  // 유저 정보 가져오기

  // const userAuth = getAuth();

  // onAuthStateChanged(userAuth, (profile) => {
  //   if (profile) {
  //     console.log(profile, "profile");
  //   }
  // });

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
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={upload}>업로드</button>
      {/* {imageList.map((el) => {
        return <img key={el} src={el} />;
      })} */}
      <div>
        <img src={imageList} />
      </div>

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
