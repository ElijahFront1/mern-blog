import React, { useState } from 'react'
import { Button, Card, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../api/api';
import { addPostAction, deletePostAction, editPostAction } from '../store/actions';

function PostsItem({ title, message, id }) {

    const dispatch = useDispatch()

    const deletePostHandler = (e) => {
        e.stopPropagation()
        deletePost(id).then(() => {
            dispatch(deletePostAction(id))
        })
    }

    const [titleInput, activeTitleInput] = useState(false);
    const [messageInput, activeMessageInput] = useState(false);
    const [editClick, activeEditClick] = useState(false);

    const enablePostInputs = (bool) => {
        activeTitleInput(bool)
        activeMessageInput(bool)
        activeEditClick(bool)
    }

    const [titleValue, setTitleValue] = useState(`${title}`);
    const [messageValue, setBodyValue] = useState(`${message}`);

    const editPostHandler = (e) => {
        enablePostInputs(false)
        editPost({ title: titleValue, body: messageValue, id: id }).then(data => {
            dispatch(editPostAction(data))
        })
    }

    return (
        <Card style={{
            width: '100%',
            marginTop: 10
        }}>
            <Card.Body style={{
                padding: 10,
            }}>

                {titleInput ?
                    (<Card.Title>
                        <FormControl as="textarea"
                            aria-label="With textarea"
                            value={titleValue}
                            onChange={e => setTitleValue(e.target.value)}
                        />
                    </Card.Title>)
                    :
                    (<Card.Title>
                        {titleValue}
                    </Card.Title>)}

                {messageInput ?
                    (<Card.Text>
                        <FormControl as="textarea"
                            aria-label="With textarea"
                            value={messageValue}
                            onChange={e => setBodyValue(e.target.value)}
                        />
                    </Card.Text>)
                    :
                    (<Card.Text>
                        {messageValue}
                    </Card.Text>)
                }

                {!editClick ?
                    (<Button onClick={(e) => enablePostInputs(e)}
                        variant="primary">
                        Edit
                    </Button>)
                    :
                    (<Button onClick={(e) => editPostHandler(e)}
                        variant="success">
                        Save
                    </Button>)
                }
                <Button onClick={(e) => deletePostHandler(e)}
                    variant="danger"
                    style={{
                        marginLeft: 10,
                    }}>
                    Delete
                </Button>
            </Card.Body>
        </Card >
    )
}

export default PostsItem
