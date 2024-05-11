import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  // function (item: string) => returnType
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // react doesn't support know if the value are being changed since it generarted static js code
  // let selectedIndex =-1;

  // react hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] = selectedIndex; // variable (selectedIndex)
  // arr[1]  // updater function

  //   const message = (items.length === 0) ? <p>No item found</p> : null;

  //   const getMessage = () => {
  //     return (items.length === 0) ? <p>No item found</p> : null
  //   }
  const handleClick = (item: string, index: number, event: MouseEvent) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
    // console.log(index, ". ", item, " ", event);
    onSelectItem(item);
  };

  return (
    <>
      {/*empty tag means Fragment is used from React */}
      <h1>{heading}</h1>
      {/*getMessage()*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={(event) => handleClick(item, index, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
