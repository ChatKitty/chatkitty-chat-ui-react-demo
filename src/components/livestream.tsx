import React, {useEffect} from 'react';
import {loadChatUi} from 'chatkitty';

const Livestream = () => {
    useEffect(() => {
        const container = document.getElementById("chat-ui");

        if (container && container.hasChildNodes()) return // Chat UI has already been loaded

       loadChatUi({
            widgetId: 'TAXqsiNOIYIhfadh',
            username: 'jane@user',
            container: {
                height: '100%',
            },
            route: {
                name: 'event',
                event: '41267743-rick-astley-at-sse-arena-belfast'
            }
        }, {
            $environment: {
                mode: 'sandbox',
                origin: 'http://localhost:9002',
                environment: 'staging'
            }
        });
    }, []);

    return (
        <div className="live-stream-container">
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?playlist=dQw4w9WgXcQ&loop=1&autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="chat-container">
                <div id="chat-ui"></div>
            </div>
        </div>
    );
};

export default Livestream;
