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
            templates: {
                elements: {
                    message: {
                        template: `
     <div class="flex flex-col items-start">
        <div class="$(#container) max-w-4/5 px-3 py-2 rounded-lg mb-2 text-sm leading-5">
          <div class="font-semibold">$(user.display_name)</div>
          <span>$(message.body)</span>
          <div class="text-xs opacity-75 mt-1 text-right">$(message.time)</div>
        </div>
     </div>
    `,
                        classMaps: {
                            container: {
                                'bg-blue-100': '$inbound',
                                'text-blue-900': '$inbound',
                                'bg-pink-100': '$outbound',
                                'text-green-900': '$outbound'
                            }
                        }
                    }
                }
            },
            styles: {
                overrides: {
                    message: {
                        inbound: {
                            "background-color": '#add8e6'
                        },
                        outbound: {
                            "background-color": '#90EE90'
                        }
                    }
                }
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
