// import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "../../Firebase";
import React, { useState, useEffect } from "react";
// import NextButton from "../commons/buttons/nextButton";
// import Input from "../commons/inputs/input";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

function FireBaseExample(props) {
  // const [data, setData] = useState([]);

  // const onClickSubmit = async () => {
  //   const board = collection(getFirestore(firebaseApp), "board");
  //   await addDoc(board, {
  //     writer: "철수",
  //     title: "하이",
  //     contents: "바이",
  //     password: "1234",
  //   });
  // };

  // useEffect(() => {
  //   async function fetchBoard() {
  //     const board = collection(getFirestore(firebaseApp), "board");
  //     const result = await getDocs(board);
  //     const boards = result.docs.map((el) => el.data());
  //     setData(boards);
  //   }
  //   fetchBoard();
  // }, []);

  // 파일 업로드
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const storage = getStorage(firebaseApp);
  const imageListRef = ref(storage, "images/");

  const upload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      {/* <button onClick={onClickSubmit}>하이</button>
      {data?.map((el) => (
        <div key={el.title}>
          <div>{el.title}</div>
          <div>{el.contents}</div>
          <div>{el.writer}</div>
        </div>
      ))}
      <div style={{ width: "200px" }}>
        <NextButton contents="다음" />
      </div>
      <div>
        <Input type="text" placeholder="내용을 입력해주세요" />
      </div> */}
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={upload}>업로드</button>
      {imageList.map((el) => {
        return <img key={el} src={el} />;
      })}
    </div>
  );
}

export default FireBaseExample;
