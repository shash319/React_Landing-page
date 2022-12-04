import './App.css';
import Header from "./Header"
import NavigationBar from "./NavigationBar"
import Features from './Features';
import Front from './Front';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavigationBar/>
      <Front/>
      <div className='features'>
      <Features featureTitle={"Declarative"} featureDesc={"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.  Declarative views make your code more predictable and easier to debug."}/>
      <Features featureTitle={"Component-Based"} featureDesc={"Build encapsulated components that manage their own state, then compose them to make complex UIs.   Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."}/>
      <Features featureTitle={"Learn Once , Write Anywhere"} featureDesc={"We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.  React can also render on the server using Node and power mobile apps using React Native."}/>  
      </div>
    </div>
  );
}

export default App;
