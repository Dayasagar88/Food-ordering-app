import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems ,  mySetShowIndex}) => {

    const [caret, setCaret] = useState("down")

    const handleClick = () => {
        mySetShowIndex()
        if(caret === "down"){
            setCaret("up")
        }else{
            setCaret("down")
        }
        // mySetCaret()
    }


    return (
        <div>
            {/* Header */}
            <div onClick={handleClick} className="w-full flex shadow-lg bg-gray-50 my-4 p-3 justify-between cursor-pointer">
                <span className="font-bold text-lg">
                    {data?.title}({data?.itemCards?.length})
                </span>
                <span>
                <i className={`fa-solid fa-caret-${caret}`}></i>
                </span>
            </div>
            {/* Accordion Body */}
            {showItems ? <ItemList className="" items={data?.itemCards}/> : null}
        </div>
    )
}

export default RestaurantCategory;