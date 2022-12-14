import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams()
  const { quoteId } = params
  let comments;
  console.log(quoteId)

  const {sendRequest, status, data:loadedComments } = useHttp(getAllComments)

  useEffect(()=>{
    sendRequest(quoteId)
  },[quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler=useCallback(()=> {
    sendRequest(quoteId)
  },[quoteId, sendRequest])

   

  if (status === 'pending'){
    comments=((
      <div className='centered'>
        <LoadingSpinner />
      </div>)
    )
  }

  if (status === 'completed' && (loadedComments && loadedComments.length>0 )){
    comments=(<CommentsList comments={loadedComments} />)
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0 ) ){
    comments=(<p className='centered'>No comments added yet.</p>)
  }
  console.log({status})
  console.log(loadedComments)

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} onAddComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
