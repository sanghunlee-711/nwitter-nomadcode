import React, { useState, useEffect } from 'react';
import { dbService } from 'myBase';
import NweetFactory from 'components/NweetFactory';
import Nweet from 'components/Nweet';
const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  // const getNweets = async()=>{
  //     console.log(userObj)
  //     const dbNweets = await dbService.collection("nweets").get();
  //     dbNweets.forEach(document => {
  //         const nweetObject ={
  //             ...document.data(),
  //             id: document.id,
  //             creatorId: userObj.uid,
  //         }
  //         setNweets(prev => [nweetObject, ...prev])
  //     })
  //     console.log(dbNweets);
  // }
  useEffect(() => {
    // getNweets();
    //collection을 정하는 것은 중요함.
    //snap shot for realtime db check and show
    dbService
      .collection('nweets')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const nweetArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNweets(nweetArray);
        console.log(nweetArray);
      });
  }, []);

  

  return (
    <div>
      <NweetFactory userObj={ userObj }/>

      <div>
        {nweets?.map(nweet => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
