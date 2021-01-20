import React,{useState, useEffect} from 'react';
import {dbService} from 'myBase'
const Home = ({userObj}) => { 
    const [nweet, setNeweet] = useState("");
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
    useEffect(()=>{ 
        // getNweets();
        //snap shot for realtime db check and show
        dbService.collection("nweets").onSnapshot(snapshot => {
            const nweetArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data(),}))
            setNweets(nweetArray);
            console.log(nweetArray)
        });
    },[]);

    const onSubmit = async(e)=>{
        //when submit create documents in firestore(DB)
        e.preventDefault();
        await dbService.collection("nweets").add({
            //same key and value at nweet
            text:nweet,
            createdAt: Date.now(),
        })
        setNeweet("")
    }

    const onChange =(e)=>{
        const{target:{value}} = e;
        setNeweet(value);
    }
    // console.log(neweets)

    return (
    <div>
        <form onSubmit= {onSubmit}>
            <input value = {nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="submit" value="Nweet" />
        </form>

        <div>
            {nweets?.map(nweet => <div key = {nweet.id}><h4>{nweet.text}</h4></div>)}
        </div>
    </div>) }


export default Home

