import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getTokenAsyncAsync } from '../../features/login/tokenAuthSlice';
import { AuthenticationDto } from "../../service/dto/AuthenticationDto";
import { getCookies } from '../../lib/utils';
import { createDeviceAsyncAsync } from "../../features/device/deviceSlice";
import { useHistory } from "react-router";

const Login = () => {
    const dispatch = useAppDispatch();
    const history=useHistory();
    const onFinish =  (values: any) => {
        dispatch(getTokenAsyncAsync(values));
       history.push("/");
    };
    return (
        <>
            <Card>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button style={{ borderRadius: '10px' }} type="primary" htmlType="submit">
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </Card>
        </>
    );
}
export default Login;