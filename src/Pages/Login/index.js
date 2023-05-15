import React ,{useState}from 'react';
import {Input,Button} from 'antd'
import './index.scss';
const Index = () => {
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    return (
        <div className="login_bodys">
            <div className="login_container">
                <span className='login_tips'>{'没有账号？'}<a href='https://www.baidu.com'>{'立即注册->'}</a></span>
                <div className='login_title'>欢迎登陆</div>
                <div className='login_form'>
                    <div className='login_username'>
                        <span>账号：</span> 
                        <Input style={{width:'18vw'}}/>
                    </div>
                    <div className='login_password'>
                        <span>密码：</span>
                        <Input style={{width:'18vw'}}/>
                    </div>
                </div>
                <div className='login_footer'>
                    <Button style={{width:'7vw'}}>登录</Button>
                    <Button style={{marginLeft:'9vw' ,width:'7vw'}}>清空</Button>
                </div>
            </div>
        </div>
    );
}

export default Index;
