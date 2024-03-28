# ChatKitty Chat UI React Example

[This is an example](https://chatkitty-chat-ui-react-example.vercel.app/) project that demonstrates how to integrate ChatKitty's Chat UI with a React application. ChatKitty provides a fully-featured chat interface out-of-the-box, and this project aims to make the integration with React as seamless as possible.

## Features

- Fully functional chat interface
- Easy to customize
- Real-time updates

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or Yarn

## Installation

1. Clone this repository

    ```bash
    git clone https://github.com/ChatKitty/chatkitty-chat-ui-react-example.git
    ```

2. Navigate to the project directory

    ```bash
    cd chatkitty-chat-ui-react-example
    ```

3. Install the dependencies

    ```bash
    npm install
    # or if you use Yarn
    yarn install
    ```

## Usage

1. Start the development server
    ```bash
    npm start
    # or if you use Yarn
    yarn start
    ```

This will start the development server, and you can navigate to `http://localhost:3000` to see the chat interface in action.

## Configuration

In your React component (e.g., `Livestream.tsx`), ensure you have a div container where the ChatKitty UI will be rendered:

```jsx
<div className="chat-container">
    <div id="chat-ui"></div>
</div>
```

This container acts as a placeholder where the ChatKitty chat interface will be dynamically loaded and displayed. When calling the loadChatUi function within the useEffect hook, the chat interface will be rendered within this div container.

It's essential to ensure this container is present in your React component and properly styled, so the chat interface displays correctly within your application layout.

Example configuration in Livestream.tsx:

```jsx
useEffect(() => {
   loadChatUi({
        widgetId: 'YourWidgetIdHere',
        username: 'user@example.com',
        container: {
            height: '100%',
        },
        // Additional configurations
    });
}, []);
```

## Customization

You can customize the chat interface styles directly within your React application. For instance, you can apply CSS styles to your chat container:

```css
.live-stream-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.chat-container {
    flex-grow: 1;
    min-height: 0;
}
```

## License

This project is licensed under the MIT License.

For any issues, please create an issue on GitHub.
