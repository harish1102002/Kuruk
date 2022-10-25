import "./home.css";
import {useEffect, useState} from "react";

function Home(props)
{
    const [post,setp]=useState([])
    const d = new Date()
    const [x,setx]=useState(0)
    let temp

    function scr(){document.getElementById("chats").scrollTop=document.getElementById("chats").scrollHeight;}
            
    setInterval(()=>{
        fetch("https://tranquil-wave-46545.herokuapp.com").then(
                (res) => res.json()
            ).then((j)=>{
                temp=j
                if(temp.length>x)
                {
                    console.log(temp.length,x)
                    setx(temp.length)
                    setp(temp)
                }
            })
    },1000)

    useEffect(()=>{
    scr()
    },[post])

    const sub=(e)=>{
        if(document.getElementById("typing").value.trim() == "")
        return

        fetch("https://tranquil-wave-46545.herokuapp.com/",{
            method : "post",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({id:props.Id,msg:document.getElementById("typing").value.trim(),date:d.getHours()+":"+((d.getMinutes()<10)?"0":"")+d.getMinutes()+"\t"+d.getDate()+"/"+d.getMonth()})}).then(e=>console.log("posted"))
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
                            <p>{e.msg}</p>
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