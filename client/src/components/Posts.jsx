import React, { useEffect, useState } from 'react'
import { Button, Col, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../api/api';
import { fetchPosts, addPostAction } from '../store/actions';
import PostsItem from './PostsItem.jsx';

function Posts() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const posts = useSelector(({ reducer }) => reducer.posts)

    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const addPostHandler = () => {
        addPost({ title: title, body: message }).then(data => {
            dispatch(addPostAction(data))
        })
    }

    return (
        <Row>
            <Col md={{ span: 6, offset: 3, order: 'first' }}
                style={{
                    width: '100%',
                    height: '85vh',
                    border: '1px solid gray',
                    overflowY: 'auto',
                    marginTop: 10,
                    borderRadius: 4,
                }}>
                {posts.map(item => {
                    return <PostsItem
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        message={item.body}
                    />
                })}
            </Col>
            <Col md={{ span: 6, offset: 3, order: 'last' }}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <InputGroup className="mb-3">
                    <FormControl style={{
                        minHeight: 45,
                        width: '100%',
                        marginTop: 15,
                    }}
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        as="textarea" aria-label="Title" />
                    <FormControl style={{
                        marginTop: 5,
                        minHeight: 124,
                        width: '100%',
                    }}
                        placeholder="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        as="textarea" aria-label="With textarea" />
                    <InputGroup.Append>
                        <Button style={{
                            width: '100%',
                            marginTop: 5
                        }} variant="primary" onClick={addPostHandler}>
                            Send message
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default Posts
