import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author = "Yakup" 
                    timeAgo = "Today at 4:45PM"
                    content = "Nice blog post" 
                    avatar = {faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Halil" 
                    timeAgo="Today at 2:00AM" 
                    content="I like the subject" 
                    avatar = {faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alican" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="I like the writing"
                    avatar = {faker.image.avatar()} />
            </ApprovalCard>
        </div>    
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);