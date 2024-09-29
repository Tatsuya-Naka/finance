import { BsTrash } from "react-icons/bs";

export default async function Items() {
    return (
        <div className="flex gap-1">
            <div className="grid grid-cols-3 w-full gap-3">
                <div className="flex flex-col gap-1">
                    <input
                        type="text"
                        placeholder="Item Name..."
                        className="rounded-md bg-gray-300 px-[1rem] py-[0.5rem] outline-none"
                        name="itemname"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <input
                        type="text"
                        placeholder="Category..."
                        className="rounded-md bg-gray-300 px-[1rem] py-[0.5rem] outline-none"
                        name="category"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <input
                            type="number"
                            placeholder="Amount..."
                            className="rounded-md bg-gray-300 px-[1rem] py-[0.5rem] outline-none"
                            name="amount"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <input
                            type="number"
                            placeholder="Price..."
                            className="rounded-md bg-gray-300 px-[1rem] py-[0.5rem] outline-none"
                            name="price"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center w-[16px] ml-[1rem]">
                <button
                    type="button"
                    className="rounded-full bg-transparent hover:bg-gray-100"
                >
                    <BsTrash />
                </button>
            </div>
        </div>
    )
}