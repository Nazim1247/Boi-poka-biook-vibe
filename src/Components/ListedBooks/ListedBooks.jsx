import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListIst = storedReadList.map(id => parseInt(id));
        // console.log(allBooks, storedReadListIst);
        const readBookList = allBooks.filter(book => storedReadListIst.includes(book.bookId));
        setReadList(readBookList)
    }, [])
    return (
        <div>
            <h2>Listed Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read List: {readList.length}</Tab>
                    
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>My Read List</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;