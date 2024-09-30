"use client";
import Title from "../title/Title";
import Items from "./Items";
import { useState } from "react";

export default function AddDelete() {
    const [items, setItems] = useState<number[]>([0, 1, 2])
    const [count, setCount] = useState(3);

    const handleAddItem = () => {
        setItems([...items, count]);
        setCount(prev => ++prev);
    };
    const handleDeleteItem = (key: number) => {
        setItems(items.filter(item => item != key));
    };

    return (
        <div className="p-0 m-0 ">
            <div className="mx-[1.5rem] flex justify-between">
                <Title title={"Item"} />
                <button
                    className="bg-green-400 text-white hover:bg-green-700 rounded-md px-[2rem] py-[0.125rem]"
                    type="button"
                    onClick={handleAddItem}
                >
                    Add
                </button>
            </div>
            <div className="overflow-y-scroll max-h-[calc(100vh-140px-3rem)] no-scrollbar flex flex-col gap-3 mx-[1.5rem] my-[1rem]">
                {/* Attributes */}
                <div className="grid grid-cols-3 w-full gap-1 pr-[16px]">
                    <div className="flex flex-col gap-1">
                        <label >
                            Name
                        </label>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label >
                            Category
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <label >
                                amount
                            </label>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label >
                                price
                            </label>
                        </div>
                    </div>
                </div>

                {/* Items */}
                {items.map((item) => (
                    <Items key={item} index={item} onClick={() => handleDeleteItem(item)} />
                ))}
            </div>
        </div>
    )
};