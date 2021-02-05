import React from 'react'
import NewForm from "../Forms/NewForm";
import s from "./../../style.module.css"
import AddressMetaData from "./AddressMetaData";
import Map from "../Map/Map";
import "./../../App.css"

const Address = (props) => {

    return <div className={s.address_container}>
        <div className={s.header}>
            <div className={s.header_search_form}>Current IP address: {props.address}</div>
            <NewForm getAddress={props.getAddress}
                     updateAddress={props.updateAddress}
                     remoteIP={props.remoteIP}
            />

            <div>
                <AddressMetaData
                    address={props.address}
                    isp={props.isp}
                    country={props.country}
                    city={props.city}
                    provider={props.provider}
                    timezone={props.timezone}
                />
            </div>
        </div>
        <div className={s.map}>
            <Map />
        </div>
    </div>
}


export default Address