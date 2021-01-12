import axios from 'axios';
import { Layout, Form, Input, Button, message } from 'antd';
const { Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Login() {

    const onFinish = (values) => {
        console.log('Success:', values);
        if (values.username === "admin" && values.password === "admin"){
            console.log(values.favoriteMovie)
            axios.post("http://localhost:3001/list",{
                movie : values.favoriteMovie
            }).then((res) => {
                message.success(res.data);
                console.log(res.data);
            })
        }else{
            message.error("Invalid User");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Layout style={{padding: "18.5%"}}>
                <Content >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
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
                        <Form.Item
                            label="Favorite Movie"
                            name="favoriteMovie"
                            rules={[{ required: false, message: 'Please input your Favorite Movie!' }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>

        </>
    );
}
export default Login;