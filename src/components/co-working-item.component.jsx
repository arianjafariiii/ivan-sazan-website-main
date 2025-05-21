import { Fragment } from "react"

const CoWorkingItem = ({title, text}) => {
    return(
        <Fragment>
            <div className="flex gap-2 text-sm w-11/12 ">
                <p className="font-bold w-4/12 text-wrap text-black ">
                    {title}
                </p>
                <p >
                    {text}
                </p>

            </div>

        </Fragment>       
    )
}


export default CoWorkingItem;