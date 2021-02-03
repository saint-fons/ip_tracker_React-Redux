import React from 'react'
import NewForm from "../Forms/NewForm";
import s from "./../../style.module.css"
import AddressMetaData from "./AddressMetaData";

const Address = (props) => {

    return <div>
        <div className={s.header}>
            <div className={s.header_search_form}>Required IP address: {props.address}</div>
            <NewForm getAddress={props.getAddress}
                     updateAddress={props.updateAddress}
                     remoteIP={props.remoteIP}
            />
        </div>
        <div>
            <AddressMetaData
                isp={props.isp}
                country={props.country}
                city={props.city}
                provider={props.provider}
                timezone={props.timezone}
            />
        </div>

    </div>
}


export default Address