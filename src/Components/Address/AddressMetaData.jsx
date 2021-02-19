import React from "react"
import s from "../../Style/style.css"

const AddressMetaData = (props) => {
    return (
        <div className={"container__header__data"}>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    IP ADDRESS
                </div>
                <div className={"container__header__data__element__bottom"}>
                    {props.address}
                </div>
            </div>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    LOCATION
                </div>
                <div className={"container__header__data__element__bottom"}>
                    {props.country}, {props.city}
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    TIMEZONE
                </div>
                <div className={"container__header__data__element__bottom"}>
                    {props.timezone}
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    ISP
                </div>
                <div className={"container__header__data__element__bottom"}>
                    {props.isp}
                </div>
            </div>


        </div>
    )
}

export default AddressMetaData
