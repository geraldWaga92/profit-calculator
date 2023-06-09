import React from "react";
import Calculator from "./components/Calculator";
import FAQ from "./components/FAQ";
import ThemeColorSwitcher from "./components/ThemeColorSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
 
      <main className= "dark:bg-black relative">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            {/** Theme Switchr */}
            <ThemeSwitcher />

            <div className="mx-auto max-w-2xl sm:text-center">
              {/* Theme color switcher */}
              <ThemeColorSwitcher />
              <h2 className="text-brand text-3xl">Profit Margin Calculator</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center">Optimize your menu item prices to maximize profits</p>

              {/* Calculator */}
              <Calculator />
            </div>

          </div>

          <FAQ />

        </div>
 
      </main>

  );
}

export default App;
