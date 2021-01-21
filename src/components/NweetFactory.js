import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { dbService, storageService } from 'myBase';

const NweetFactory = ({userObj}) =>{
    const [nweet, setNeweet] = useState('');
    const [attachment, setAttachment] = useState('');

    const onSubmit = async e => {
        //when submit create documents in firestore(DB)
        e.preventDefault();
    
        //uuid for child reference
        let attachmentUrl = '';
        if (attachment !== '') {
          const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
          const response = await attachmentRef.putString(attachment, 'data_url');
          //let을 왜 선언해 놓았을 까 .. 왜 못보았을까 :) ..
          attachmentUrl = await response.ref.getDownloadURL();
          console.log('attachmentUrl', attachmentUrl);
        }
    
        const nweetObj = {
          text: nweet,
          createdAt: Date.now(),
          creatorId: userObj.uid,
          attachmentUrl,
        };
        console.log('second attachmentUrl', attachmentUrl);
        await dbService.collection('nweets').add(nweetObj);
        setNeweet('');
        setAttachment('');
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
    )
}

export default NweetFactory