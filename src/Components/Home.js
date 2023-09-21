import React, { useState } from 'react'
import {collection, getDocs,deleteDoc,doc} from 'firebase/firestore'
import { useEffect } from 'react'
import { auth,db } from '../firebase'

function Home({isAuth }) {
  const [postList,setPostList] =useState([])
  const postCollectionRef=collection(db,"posts");

  useEffect(()=>{
    const getPost=async ()=>{
      const data=await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();

  })

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  // const updatePost=async(id)=>{
  //   const postDoc=doc(db,"posts",id);
  //   await updateDoc(postDoc,{
  //     title:title,
  //     postText:postText
  //   })
  // }

  return (
    <div className="homePage">
    {postList.map((post) => {
      return (
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1> {post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  {" "}
                  &#128465;
                </button>
              )}
            </div>
          </div>
          <div className="postTextContainer"> {post.postText} </div>
          <h3>@{post.author.name}</h3>
        </div>
      );
    })}
  </div>
);
}
    




export default Home