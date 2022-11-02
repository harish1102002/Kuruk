import "./home.css";
import {useEffect, useState,useRef} from "react";

function Home(props)
{
    const [post,setp]=useState(props.data)
    const d = new Date()
    const x=useRef(null)
    x.current=post
    let temp

    function scr(){document.getElementById("chats").scrollTop=document.getElementById("chats").scrollHeight;}
    function fet(){
        fetch("https://tranquil-wave-46545.herokuapp.com/").then(
                (res) => res.json()
            ).then((j)=>{
                temp=j
                if(temp.length>x.current.length)
                setp(temp)
            })}
    
    useEffect(()=>{x.current=post
    scr()},[post])

    useEffect(()=>{
    const tid=setInterval(()=>{fet()
    },600)
    return(()=>clearInterval(tid))
    },[])

    const sub=(e)=>{
        if(document.getElementById("typing").value.trim() == "")
        return

        fetch("https://tranquil-wave-46545.herokuapp.com/",{
            method : "post",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({id:props.Id,msg:document.getElementById("typing").value.trim(),date:d.getHours()+":"+((d.getMinutes()<10)?"0":"")+d.getMinutes()+"\t"+d.getDate()+"/"+(d.getMonth()+1)})}).then(e=>console.log("posted"))
            document.getElementById("typing").value="";
    }
    
    return(
        <div className="home">
            <div className="nav"><p className="kuruk">Kuruk</p></div>
            <div className="chats" id="chats">
                {
                    post.map((e)=>
                        <div className="chat">
                            <p>{e.id}</p>
                            <p className="msg">{e.msg}</p>
                            <p className="date">{e.date}</p>
                        </div>
                    )
                }
            </div>
            <div className="chatbox">
            <input className="typing" id="typing" placeholder="type ur text" onFocus={(e)=>{e.target.placeholder=" "}} autoComplete="off" onBlur={(e)=>{e.target.placeholder="type ur text"}}/>
            <button onClick={sub} className="send">send</button>
            </div>
        </div>
    );
}

export default Home;