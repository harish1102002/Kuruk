import "./login.css";
import Home from "./home";
import {useState} from "react";

function Login() {
    
    const post=["Harish","Thangam","Harini","Dhanush","Sush","Techpak","Javid","Crimson","Kuttichathan","Dash","Sankar"]
    const passes=["harish#1","thangam&27","harini@7","dhanush$9","sushanthi^1","deepak%1","akash*16","reshma+14","deeyes!3","sankar=22"]
    const [d,setd]=useState(0);
    const [userid,setud]=useState("");

    const newaccount = (e) => {
        if (document.getElementsByClassName("newacc")[0].innerHTML == 'Login Here') {
            document.getElementsByClassName("retype")[0].style.display = "none";
            document.getElementsByClassName("newacc")[0].innerHTML = 'Sign up';
            document.getElementsByClassName("newacc")[0].style.marginTop = "4vh";
            document.getElementsByClassName("head")[0].innerHTML = "Login";
        }
        else {
            document.getElementsByClassName("retype")[0].style.display = "inline";
            document.getElementsByClassName("newacc")[0].innerHTML = 'Login Here';
            document.getElementsByClassName("newacc")[0].style.marginTop = "4vh";
            document.getElementsByClassName("submit")[0].style.marginTop = "2.5vh";
            document.getElementsByClassName("head")[0].innerHTML = "Create account";
        }
    }

    const submit = (e) => {
        if (document.getElementById("user").value.trim() == "") {
            document.getElementsByClassName("userincorrect")[0].style.display = "inline";
            document.getElementsByClassName("password")[0].style.marginTop = "1vh";
            document.getElementsByClassName("passwordincorrect")[0].style.display = "none";
            document.getElementsByClassName("retypeincorrect")[0].style.display = "none";
            return;
        }
        if (document.getElementById("pass").value.trim() == "" || document.getElementById("pass").value.trim().length<8) {
            document.getElementsByClassName("passwordincorrect")[0].style.display = "inline";
            document.getElementsByClassName("retype")[0].style.marginTop = "1vh";
            document.getElementsByClassName("newacc")[0].style.marginTop = "2vh";
            document.getElementsByClassName("retypeincorrect")[0].style.display = "none";
            return;
        }
        if (document.getElementsByClassName("newacc")[0].innerHTML == 'Login Here') {
            if (document.getElementById("retype").value.trim() == "" || document.getElementById("retype").value.trim()!=document.getElementById("pass").value.trim()) 
            {
                document.getElementsByClassName("retypeincorrect")[0].style.display = "inline";
                document.getElementsByClassName("newacc")[0].style.marginTop = "0vh";
                return;
            }
            if(post.includes(document.getElementById("user").value.trim()))
            {
                alert("Email already used");
            }
        }
        else
        {
            if(post.includes(document.getElementById("user").value.trim()) && passes.includes(document.getElementById("pass").value.trim()))
            {
                document.getElementsByClassName("login")[0].style.display="none";
                setd(1);
                setud(document.getElementById("user").value.trim());

            }
            else
            {
                document.getElementsByClassName("passwordincorrect")[0].style.display = "inline";
            }
        }
        
    }

    return (
        <div className="background">
            {d==1?<Home Id={userid}/>:
            <div className="login">
                <h1 className="head">Login</h1>
                <input className="user" id="user" autoComplete="off" spellCheck="false"
                    onFocus={(e) => {
                        e.target.placeholder = ''; document.getElementsByClassName("userincorrect")[0].style.display = "none";
                        document.getElementsByClassName("password")[0].style.marginTop = "4vh";
                    }}
                    onBlur={(e) => { e.target.placeholder = 'user' }}
                    placeholder='user' />
                <p className="userincorrect" >Please fill valid info</p>
                <input className="password" id="pass" spellCheck="false"
                    onFocus={(e) => {
                        e.target.placeholder = ''; document.getElementsByClassName("passwordincorrect")[0].style.display = "none";
                        document.getElementsByClassName("retype")[0].style.marginTop = "4vh";
                    }}
                    onBlur={(e) => { e.target.placeholder = 'password' }} placeholder='password' />
                <p className="passwordincorrect" >Please fill valid info</p>
                <input className="retype" id="retype" spellCheck="false"
                    onFocus={(e) => {
                        e.target.placeholder = ''; document.getElementsByClassName("retypeincorrect")[0].style.display = "none";
                        document.getElementsByClassName("newacc")[0].style.marginTop = "4vh";
                    }}
                    onBlur={(e) => { e.target.placeholder = 'retype' }} placeholder='retype' />
                <p className="retypeincorrect" >Please fill valid info</p>
                <span className="newacc" >Sign up</span>
                <button className="submit" onClick={submit}>Submit</button>
                </div>}
            </div>
    );
}

export default Login;