"use client"
import { useState, useEffect } from 'react';
import { IconHeartFilled , IconHeart } from '@tabler/icons-react';
import { db } from '@/app/database/firebaseConfig';
import { collection, addDoc, getDocs } from "firebase/firestore";

export const Like = ({
 likename
}) => {

 const [liked, setLiked] = useState(false);

 async function handleIcon(likename) {
    setLiked(!liked);
 
 }


 return (
    <>
        <div className='flex flex-col'>
         
            <IconHeart onClick={() => handleIcon(likename)}  className={liked ? 'likeheart cursor-pointer' : 'cursor-pointer'}  />
            
        </div>
    </>
 )
}
