import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../Utility/AddToDb';

const BookDetail = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    
    const {bookId: currentId, image} = book;

    const handleReadList = (id)=>{
        addToStoredReadList(id);
    }
    const handleWishList = (id)=>{
        addToStoredWishList(id);
    }
    return (
        <div>
            <h2>Detail: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <button onClick={()=>handleReadList(bookId)} className='btn btn-accent btn-outline mr-4 my-4'>Read List</button>
            <button onClick={()=>handleWishList(bookId)} className='btn btn-accent'>Wish List</button>
        </div>
    );
};

export default BookDetail;