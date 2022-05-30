// import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import "../components/Login.css";
import 'antd/dist/antd.css';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='Login' style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <img src={require("./../assests/wepik-2022319-214333.png")} alt='' />
            </div>
            <div className='form'  >

                <img src={require('./../image/Artboard – 2.png')} style={{ width: '250px', height: '100px', marginTop: "40px" }} alt=''></img>

                <h1>Login</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                >
                    <div className='EmployeeID' >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Employee ID!',
                                },
                            ]}
                        >
                            <h6>Employee ID</h6>
                            <Input
                            //  prefix={<UserOutlined className="site-form-item-icon" />} 
                             placeholder="Employe ID" />
                        </Form.Item>
                    </div>
                    <div className='password'>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]} style={{ marginTop: "-20px" }}
                        >
                            <h6>Password</h6>
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                    </div>


                    <Form.Item >
                        <div className='button' style={{ backgroundColor: "#FAA81D", borderRadius: "9px", height: "40px" }}>
                            <Button htmlType="submit" className="login-form-button" style={{ backgroundColor: 'transparent', border: "none" }}>
                                Log in
                            </Button>
                            <Button htmlType="submit" className="loginbtn" style={{ background: "#4f5b69" }} >
                                Cancle
                            </Button>

                        </div>
                    </Form.Item>
                    <h6  style={{ color: "#b3b0b0", marginTop: "-15px", textAlign: "end" }}>
                        Already have and account?
                        <a href='*' style={{ color: "#FFFFFF" }}>
                            REGISTER
                        </a></h6>
                </Form>
                <div className='ChangePassword'>
                <a href='*' style={{color:"#FFFFFF "}}>Change password</a>
                </div>
                <div className='divider'>
                <hr></hr>
                <p1>Copyright © 2018 Aleercio.com</p1>
                <p2>Terms & Conditions | Privacy policy</p2>
                </div>
              
            </div>

        </div>
    );
};

export default Login;