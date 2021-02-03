import React from "react"
import s from "./../../style.module.css"

const AddressMetaData = (props) => {
    return (
        <div className={s.display_data_container}>
            <div className={s.display_data_container_element}>
                <div className={s.display_data_container_element_header}>
                    IP ADDRESS
                </div>
                <div className={s.display_data_container_element_bottom}>
                    {props.address}
                </div>
            </div>
            <div className={s.display_data_container_element}>
                <div className={s.display_data_container_element_header}>
                    LOCATION
                </div>
                <div className={s.display_data_container_element_bottom}>
                    {props.country}, {props.city}
                </div>
            </div>

            <div className={s.display_data_container_element}>
                <div className={s.display_data_container_element_header}>
                    TIMEZONE
                </div>
                <div className={s.display_data_container_element_bottom}>
                    {props.timezone}
                </div>
            </div>

            <div className={s.display_data_container_element}>
                <div className={s.display_data_container_element_header}>
                    ISP
                </div>
                <div className={s.display_data_container_element_bottom}>
                    {props.isp}
                </div>
            </div>


        </div>
    )
}

export default AddressMetaData