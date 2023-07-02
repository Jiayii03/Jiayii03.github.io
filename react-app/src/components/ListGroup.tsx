import { Fragment, useState } from "react"; // this line is not necessary
import { MouseEvent } from "react";

// interface is used to define the shape or the interface of a component
// specifies properties and behaviour of a component, quite similar to an object
interface Props {
    item: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

// this is where we create components, e.g. a list group
function ListGroup({item, heading, onSelectItem}: Props) {
    // in react, we don't have a for loop, we use map instead
    // each item in the list should have a unique key, e.g. key={item}

    // Hook: useState is used when the component data will change over time
    // state variable (selectedIndex)
    // updater function (setSelectedIndex)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    // if the list is empty, we can display a message
    // to make jsx expression cleaner, we should always use a variable/function to store the jsx expression
    const message = item.length === 0 ? <p>There are no items in the list</p> : null;

    const getMessage = () => {
    return item.length === 0 ? <p>There are no items in the list</p> : null;
    };

    // a more concise way of writing the above message
    const message2 = item.length === 0 && <p>There are no items in the list</p>;

    // typescript compiler needs to know the type of the event, e.g. MouseEvent
    // Event handler
    const handleClick = (e: MouseEvent) => {
    // alert("Clicked " + item + " " + index);
    console.log(e);
    }

    // use prettier for formatting the code, e.g. Ctrl+Shift+P, Format Document --> Prettier
    // in react, a component cannot return more than one element, so we wrap everything in a div, Ctrl+Shift+P, Wrap with Abbreviation --> div
    // in a better way, we can use a fragment, which is a ghost element that doesn't appear in the DOM, import {Fragment} from "react";
    // shortcut, use <> and </> instead of <Fragment> and </Fragment> will do

    // this is start of the jsx markup
    // jsx markup is a syntax extension to javascript
    // it looks similar to html added with some javascript variables and functions
    return (
    <>
        <h1>{heading}</h1>
        {/* in react, we use className instead of class */}
        {getMessage()}
        {message2}

        <ul className="list-group">
        {item.map((item, index) => ( // iterate through each item in the list
            <li // opening tag of li
            className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
            }} // we're not calling this function, we're passing a reference to this function
            >
            {item}
            </li>
        ))}
        </ul>
    </>
    );
}

export default ListGroup;
