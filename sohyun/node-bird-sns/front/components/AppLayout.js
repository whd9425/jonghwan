import PropTypes from 'prop-types';
import Link from 'next/link';

import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';



const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/ppotatoG" target="_blank" rel="noreferrer nopener">Made By 감자</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
};

export default AppLayout;