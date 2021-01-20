import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'myBase';
import Nweet from 'components/Nweet';
const Home = ({ userObj }) => {
  const [nweet, setNeweet] = useState('');
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState('');
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

  const onSubmit = async e => {
    //when submit create documents in firestore(DB)
    e.preventDefault();

    //below logic has some problems..
    //uuid for child reference
    // let attachmentUrl = '';
    // if (attachment !== '') {
    //   const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
    //   const response = await attachmentRef.putString(attachment, 'data_url');
    //   let attachmentUrl = await response.ref.getDownloadURL();
    //   console.log('attachmentUrl', attachmentUrl);
    // }

    // const nweetObj = {
    //   text: nweet,
    //   createdAt: Date.now(),
    //   creatorId: userObj.uid,
    //   attachmentUrl,
    // };
    // console.log('second attachmentUrl', attachmentUrl);
    // await dbService.collection('nweets').add(nweetObj);
    // setNeweet('');
    // setAttachment('');

    if (attachment !== '') {
      const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, 'data_url');
      let attachmentUrl = await response.ref.getDownloadURL();
      console.log('attachmentUrl', attachmentUrl);

      const nweetObj = {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentUrl,
      };

      await dbService.collection('nweets').add(nweetObj);
      setNeweet('');
      setAttachment('');
    } else if (attachment === '') {
      const nweetObj = {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentUrl: attachment,
      };
      await dbService.collection('nweets').add(nweetObj);
      setNeweet('');
      setAttachment('');
    }
  };

  const onChange = e => {
    const {
      target: { value },
    } = e;
    setNeweet(value);
  };
  // console.log(neweets)

  const onFileChange = e => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = finishedEvent => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      console.log('finishedEvent', finishedEvent);
      setAttachment(result);
    };
  };
  const onClearAttachment = () => {
    setAttachment('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img alt="attachement" src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>

      <div>
        {nweets?.map(nweet => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
