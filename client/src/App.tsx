import { useState, useEffect } from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setColorTheme } from "./store/themes/themeSlice";

/**
 * This is the main component of the application. It uses the useState hook to manage the color theme state and the useEffect hook to update the state whenever the saved theme changes.
 * The component also uses the useAppSelector hook to retrieve the current color theme from the store and the useAppDispatch hook to dispatch actions to the store.
 * The component contains a button that allows the user to switch between different color themes, and a div element that displays a background with the current color theme.
 */
function App() {
  const savedTheme = useAppSelector((state) => state.theme.theme); // Get the current color theme from the store
  const dispatch = useAppDispatch(); // Get the dispatch function from the store
  const [colorTheme, setColorThemeState] = useState(savedTheme); // Use the useState hook to manage the color theme state

  /**
   * This function is called when the user clicks on a button to switch color themes. It dispatches an action to the store to set the color theme, and it also logs the new color theme to the console.
   * @param theme The name of the color theme to set
   */
  const handleButtonClick = (theme: string) => {
    dispatch(setColorTheme(theme)); // Dispatch an action to the store to set the color theme
    console.log(savedTheme); // Log the new color theme to the console
  };

  /**
   * This effect is triggered whenever the saved theme changes. It updates the color theme state to reflect the new value.
   */
  useEffect(() => {
    setColorThemeState(savedTheme); // Update the color theme state
  }, [savedTheme]);

  return (
    <>
      <div
        className={`${colorTheme} h-[100vh] bg-skin-color-button1-background`}
      >
        <div className="flex ml-5">
          <button
            onClick={() => handleButtonClick("theme-dracula")}
            className={`shadow-2xl mr-2 mt-2 h-6 w-6 bg-purple-500 rounded-xl border-solid border-gray-500 border-2 ${
              colorTheme === "theme-dracula" && "border-purple-500 h-8 w-8"
            }`}
          />
          <button
            onClick={() => handleButtonClick("theme-dark")}
            className={`shadow-2xl mr-2 mt-2 h-6 w-6 bg-gray-900 rounded-xl border-solid border-gray-500 border-2 ${
              colorTheme === "theme-dark" && "border-gray-900 h-8 w-8"
            }`}
          />
          <button
            onClick={() => handleButtonClick("theme-solarized-light")}
            className={`shadow-2xl mr-2 mt-2 h-6 w-6 bg-yellow-500 rounded-xl border-solid border-gray-500 border-2 ${
              colorTheme === "theme-solarized-light" &&
              "border-yellow-500 h-8 w-8"
            }`}
          />
          <button
            onClick={() => handleButtonClick("theme-green")}
            className={`shadow-2xl mr-2 mt-2 h-6 w-6 bg-green-500 rounded-xl border-solid border-gray-500 border-2 ${
              colorTheme === "theme-green" && "border-green-500 h-8 w-8"
            }`}
          />
          <button
            onClick={() => handleButtonClick("theme-red")}
            className={`shadow-2xl mr-2 mt-2 h-6 w-6 bg-red-800 rounded-xl border-solid border-gray-500 border-2 ${
              colorTheme === "theme-red" && "border-red-800 h-8 w-8"
            }`}
          />
        </div>

        <div className="bg-skin-color-background h-72 rounded-3xl mx-4 my-3 p-5">
          <div className="flex flex-col justify-around h-40 mb-5">
            <p className="text-skin-color-heading font-extrabold text-3xl">
              This is heading
            </p>
            <p className="text-skin-color-body font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              omnis earum minus distinctio, amet quidem atque dolores. Ea,
              aliquam iure ipsum asperiores, similique consequuntur, omnis
              obcaecati voluptates tempore deleniti alias.
            </p>
          </div>
          <div className="flex justify-around">
            <button className="bg-skin-color-button1-background text-skin-color-button1-text rounded-lg h-10 w-20">
              Button1
            </button>
            <button className="bg-skin-color-button2-background text-skin-color-button2-text rounded-lg h-10 w-20">
              Button2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;