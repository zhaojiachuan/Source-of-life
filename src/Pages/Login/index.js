import React ,{useState}from 'react';
import {Input,Button,message} from 'antd'
import axios from "axios";
import './index.scss';
const Index = (props) => {
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const inputUser = (e) => {
        setUser(e.currentTarget.value)
    }
    const inputPass = (e) => {
        setPass(e.currentTarget.value)
    }
    const login = () => {
        const n = user;
        const a = pass;
        if (n === "") {
        message.error("用户名或密码不能为空");
        } else {
        axios
            .post("http://localhost:80/api/post", { username: n, password: a })
            .then((res) => {
            if (res.data.status === 0) {
                window.localStorage.setItem("username", res.data.data.username);
                props.history.push(`/index`);
            } else {
                message.error(res.data.msg);
            }
            });
        }
    }
    return (
        <div className="login_bodys">
            <div className="login_container">
                <span className='login_tips'>{'没有账号？'}<a href='https://www.baidu.com'>{'立即注册->'}</a></span>
                <div className='login_title'>欢迎登陆</div>
                <div className='login_form'>
                    <div className='login_username'>
                        <span>账号：</span> 
                        <Input style={{width:'18vw'}} onChange={(e)=>{inputUser(e)}}/>
                    </div>
                    <div className='login_password'>
                        <span>密码：</span>
                        <Input.Password style={{width:'18vw'}}  onChange={(e)=>{inputPass(e)}}/>
                    </div>
                </div>
                <div className='login_footer'>
                    <Button style={{width:'7vw'}} onClick={login}>登录</Button>
                    <Button style={{marginLeft:'9vw' ,width:'7vw'}}>清空</Button>
                </div>
            </div>
        </div>
    );
}

export default Index;
