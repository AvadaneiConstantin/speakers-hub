/**
 * Root Application Component - Theme Provider Wrapper
 *
 * Key Bindings:
 * - ThemeProvider: Global theme context provider
 * - HomePage: Main landing page component
 * - ThemeContext: Dark/light mode state management
 *
 * Functionality:
 * - Theme orchestration: Wraps app with theme context
 * - Global state: Provides theme to entire component tree
 * - Component composition: Renders HomePage with theme support
 * - App initialization: Root component setup
 */
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
