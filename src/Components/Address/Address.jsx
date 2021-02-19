import React from 'react'
import NewForm from "../Forms/NewForm";
import AddressMetaData from "./AddressMetaData";
import Map from "../Map/Map";
import "./../../Style/style.css"
import "./../../Style/App.css"

const Address = (props) => {

    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <div className={"container__address"}>
                    Current IP address:
                    {props.address}
                </div>
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
            <div className={"bottom"}>
                <Map/>
            </div>
        </div>
    )
}


export default Address
