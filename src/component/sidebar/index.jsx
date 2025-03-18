import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isMenu1Open, setIsMenu1Open] = useState(false);
  const [isMenu2Open, setIsMenu2Open] = useState(false);
  const [isMenu3Open, setIsMenu3Open] = useState(false);
  const [isMenu4Open, setIsMenu4Open] = useState(false);

  const toggleMenu1 = () => setIsMenu1Open(!isMenu1Open);
  const toggleMenu2 = () => setIsMenu2Open(!isMenu2Open);
  const toggleCssColor = () => setIsMenu3Open(!isMenu3Open);
  const toggleCssBackgrounds = () => setIsMenu4Open(!isMenu4Open);

  return (
    <div className="sidebar sticky top-0 w-64 bg-gray-800 text-white h-screen">
      <ul className="mt-10 ml-5">
        <li>
          <Link to="/" className="block p-4 hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <button
            onClick={toggleMenu1}
            className="block w-full p-4 text-left hover:bg-gray-700"
          >
            Progaming Zaman Now
          </button>

          {isMenu1Open && (
            <ul className="pl-5">
              <li>
                <Link to="/menu1" className="block p-4 hover:bg-gray-700">
                  Hello Word
                </Link>
              </li>
              <li>
                <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                  Props
                </Link>
              </li>
              <li>
                <Link to="/menu3" className="block p-4 hover:bg-gray-700">
                  Nested Component
                </Link>
              </li>
              <li>
                <Link to="/menu4" className="block p-4 hover:bg-gray-700">
                  Conditional
                </Link>
              </li>

              <li>
                <button
                  onClick={toggleCssColor}
                  className="block w-full p-4 text-left hover:bg-gray-700"
                >
                  CSS Colors
                </button>
                {isMenu3Open && (
                  <ul className="pl-5">
                    <li>
                      <Link
                        to="/CssColors/Colors"
                        className="block p-4 hover:bg-gray-700"
                      >
                        Colors
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                        RGB
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                        HEX
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                        HSL
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={toggleCssBackgrounds}
                  className="block w-full p-4 text-left hover:bg-gray-700"
                >
                  CSS Backgrounds
                </button>
                {isMenu4Open && (
                  <ul className="pl-5">
                    <li>
                      <Link to="/menu1" className="block p-4 hover:bg-gray-700">
                        Hello Word
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/CssBackgroundColor"
                        className="block p-4 hover:bg-gray-700"
                      >
                        Background Color
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CssBackgroundImage"
                        className="block p-4 hover:bg-gray-700"
                      >
                        Backgrounds Image
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                        HEX
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                        HSL
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/menu1" className="block p-4 hover:bg-gray-700">
                  Item 1
                </Link>
              </li>
              <li>
                <Link to="/menu2" className="block p-4 hover:bg-gray-700">
                  Item 2
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={toggleMenu2}
            className="block w-full p-4 text-left hover:bg-gray-700"
          >
            Menu 2
          </button>
          {isMenu2Open && (
            <ul className="pl-5">
              <li>
                <Link to="/menu2/item1" className="block p-4 hover:bg-gray-700">
                  Item 1
                </Link>
              </li>
              <li>
                <Link to="/menu2/item2" className="block p-4 hover:bg-gray-700">
                  Item 2
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
