import { dbService } from 'myBase';
import React, { useState } from 'react';
const Nweet = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false); //for class toggling
    const [newNweet, setNewNweet] = useState(nweetObj.text); //for updating text

    const onDeleteClick = async () =>{
        const ok = window.confirm("wann dlelete?")
        console.log(ok)
        if(ok){
            //delete nweet
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    }
;
    const toggleEditing =() => setEditing((prev) => !prev)

    const onSubmit = async (e) =>{
        e.preventDefault();

        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        })
        setEditing(false);
        console.log("newNweet",newNweet)
    }

    const onChange = (e)=>{
        const {target:{value}} = e;
        setNewNweet(value);
    }
    return ( 
    <div>
        {   editing? 
            (<> 
            <form onSubmit={onSubmit}>
                <input type ="text" placeholder="Edit yours" value = {newNweet} onChange={onChange} required/>
                <input type ="submit" value = "Update Neweet" />
            </form>
                <button onClick={toggleEditing}>Cancel</button> 
            </>) : (<> <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl}
            {nweetObj.attachmentUrl && (<img alt = "Hello" src = {nweetObj.attachmentUrl} width="50px" height="50px"/>)}
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button onClick={toggleEditing}>Edit Nweet</button>
                </>
            )}</>)
        }
    </div>
)}

export default Nweet