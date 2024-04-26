import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering React components
import App from "./App.tsx"; // Import the root component of your React application
import "./index.css"; // Import CSS styles
import { persistor, store } from "./store/store.ts"; // Import the Redux store and persistor
import { Provider } from "react-redux"; // Import Provider to make the Redux store available to the entire app
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate for persisting and rehydrating state

// Render the root component of the React application wrapped in Redux Provider and PersistGate
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* Provide the Redux store to the entire application */}
    <PersistGate persistor={persistor} loading={null}>
      {/* PersistGate waits for the redux-persist to load and rehydrate state */}
      <App /> 
    </PersistGate>
  </Provider>
);
