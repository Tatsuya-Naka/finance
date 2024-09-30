import { FaCameraRetro } from "react-icons/fa";

export default function UploadImage() {
    return (
        <>
            <div className="flex flex-col items-center">
                <FaCameraRetro size={42} />
                <span className="flex text-basis font-[500]">
                    Select from your image / Take a shot
                </span>
            </div>

            <input
                type="file"
                className="hidden"
                accept="image/*,.png,.jpg,.jpeg,.gif"
                name="receiptImage"
            />
        </>
    )
}