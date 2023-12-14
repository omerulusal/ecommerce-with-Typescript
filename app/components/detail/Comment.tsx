import { Rating } from "@mui/material"
import Avatar from "../general/Avatar"


const Comment = ({ prd }: { prd: any }) => {
    return (
        <div className="border w-full md:w-1/3 p-2 rounded-lg my-5">
            <div className="rounded-full flex">
                <Avatar image={prd?.image} />
                <div className="mx-3 flex items-center font-medium">
                    {prd?.author}
                </div>
            </div>
            <div className="mt-2 flex items-center">
                <Rating readOnly value={prd?.rating} size="small" ></Rating>
            </div>
            <div>
                {prd?.review}
            </div>
        </div>
    )
}

export default Comment