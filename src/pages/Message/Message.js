import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Message = () => {
    return (
        <div className='grid grid-cols-1 mt-10'>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className="chat chat-start -ml-4">
                            <div className="chat-bubble">Your previous meme was so funny🤣</div>
                        </div>
                        <div className="chat chat-end -mr-44 mt-2">
                            <div className="chat-bubble">Thank you!😊</div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Message;