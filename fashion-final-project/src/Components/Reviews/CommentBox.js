import React from 'react';
import {useState, useEffect} from 'react'
import "./CommentBox.css"
import MultiImageInput from 'react-multiple-image-input';

// getting the values of local storage
const getDatafromLS=()=>{
    const data = localStorage.getItem('comments');
    // console.log('data:',data)
    if(data){
    return JSON.parse(data);
    }
    else{
    return []
    }
}

function CommentBox() {

    // main array of objects 
    const [comments, setComments]=useState(getDatafromLS());

    // input field states
    const id = '';
    const [author, setAuthor]=useState('');
    const [body, setBody]=useState('');
    const [images, setImages] = useState([]);


    // form submit event
    const handleAddCommentSubmit=(e)=>{
        e.preventDefault();
        // creating an object
        let comment={
            id: Math.floor(Math.random() * 10000),
            author,
            body,
            images
        }
        setComments([...comments,comment]);
        setAuthor('');
        setBody('');
        setImages([])
    }
    console.log(comments)

    //   delete comment
    const deleteComment=(id)=>{
        const filteredComments = comments.filter((element,index)=>{
        return element.id !== id
        })
        setComments(filteredComments);
    }

    // saving data to local storage
    useEffect(()=>{
        localStorage.setItem('comments',JSON.stringify(comments));
    },[comments])

    const [buttonText, setButtonText] = useState("Show Comments")
    const [show, setShow] = useState(false)

    const handleCommentReveal=()=>{
        if (show) {
            setShow(false)
            setButtonText("Show Comments")
        }
        else{
            setShow(true);
            setButtonText("Hide Comments");
        }
    }

    // for the images
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };
   

    return (
        <div className="comment-box">
            <h2></h2>
            <form autoComplete="off" 
                className='comment-form'
                onSubmit={handleAddCommentSubmit}>
                <div className='comment-form-fields'>
                    <input 
                        type="text" 
                        required
                        onChange={(e)=>setAuthor(e.target.value)} 
                        value={author}
                        placeholder="Name" >
                    </input>
                    <br></br>
                    <textarea
                        type="text" 
                        required
                        placeholder="Your Reviews"
                        onChange={(e)=>setBody(e.target.value)} value={body}>
                    </textarea>
                    <br></br>
                    <MultiImageInput
                        theme="light" 
                        images={images}
                        setImages={setImages}
                        cropConfig={{ crop, ruleOfThirds: true }}
                    />
                    <div className="comment-form-actions">
                        <button type="submit">Post Comment</button>
                    </div>
                </div>
            </form>
            <button  id="comment-reveal"
                className="show-comments-btn"
                onClick={handleCommentReveal}>
                {buttonText}
            </button>    
            <h3>Comments</h3>
            <h4 className="comment-count">{comments.length} Comments</h4> 
            <div className="comment-list" style =  {{ display: show ? "block" : "none" }}> 
                <div className="comment">
                    {comments.map( comment => (
                    <>
                        <p className="comment-header">{comment.author}</p>
                        <div className="comment-images" style = {{ visibility: [comment.images] ? "show" : "hidden" }} > 
                       {/* {comment.images.map((img) => ( 
                            <img src={img} />
                        ))
                        } */}
                        </div> 
                        <p className="comment-body">- {comment.body}</p>
                        <div className="comment-footer">
                            <a
                            className="comment-footer-delete"
                            onClick={() => deleteComment(comment.id)}
                            >
                            Delete Comment
                            </a>
                        </div>
                        
                    </>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CommentBox;
