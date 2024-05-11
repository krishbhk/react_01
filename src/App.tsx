import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroups";
import Message from "./message";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log("App selected", item);
  };

  const [showAlert, setShowALert] = useState(false);

  const showAlertHandler = () => {
    if (!showAlert) {
      setShowALert(true);
    }
    else {
      setShowALert(false);
    }
  };

  const alertComponent = () => {
    return <Alert onClickBtn={showAlertHandler}>Something went wrong</Alert>;
  }

  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Berlin",
  ];

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} /> */}
      {showAlert===true && alertComponent()}
      <Button
        name="Click me"
        onClickBtn={showAlertHandler}
        color="success"
      />
    </div>
  );
}

export default App;
