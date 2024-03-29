import React, {useEffect, useState} from 'react';
import {loadChatUi} from 'chatkitty';

const Livestream = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const container = document.getElementById("chat-ui");

        if (container && container.hasChildNodes()) return // Chat UI has already been loaded

        loadChatUi({
            widgetId: 'TAXqsiNOIYIhfadh', // substituted staging project widget ID
            username: 'test@user', // user created in guest mode
            container: {
                height: '100%',
            },
            route: { // route to event channel
                name: 'event',
                event: '41267743-rick-astley-at-sse-arena-belfast'
            },
            components: {
                chat: (context) => ({
                    onMounted: () => {
                        setLoading(false)
                    }
                })
            }
        }, {
            $environment: { // configure chatkitty SDK to target staging servers
                mode: 'sandbox',
                origin: 'https://ui.staging.chatkitty.com',
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
