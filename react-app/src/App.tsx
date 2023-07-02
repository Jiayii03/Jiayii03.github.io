// this is where we will import all the components and render them
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { DismissibleAlert } from "./components/DismissibleAlert";

function App() {
  let item = ["London", "Paris", "New York", "Tokyo", "Berlin"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // set the initial state of alertVisible to false
  const [alertVisible, setAlertVisibility] = useState(false);

  // this is where create an instance of the component, and pass the props
  return (
    <>
      {" "}
      {/* this is a fragment */}
      <div>
        <ListGroup
          item={item}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Alert>
          Welcome to my first <span className="italic">React App</span>
        </Alert>
      </div>
      <div>
        {alertVisible && (
          <DismissibleAlert onClose={() => setAlertVisibility(false)}>
            <strong>Successful!</strong> This is a dismissible alert message.
          </DismissibleAlert>
        )}
      </div>
      <div>
        <Button
          text="Click me!"
          onCLick={() => {
            setAlertVisibility(true); // when clicked, call setAlertVisibility and pass true to it
          }}
        />
      </div>
    </>
  );
}

export default App;
