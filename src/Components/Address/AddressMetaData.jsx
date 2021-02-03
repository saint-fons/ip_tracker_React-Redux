import React from "react"

const AddressMetaData = (props) => {
    return(
        <div>
            <div>
                <div>
                    <div>
                        IP ADDRESS
                    </div>
                    <div>
                        {props.address}
                    </div>
                </div>

                <div>
                    <div>
                        location
                    </div>
                    <div>
                        {props.city}
                    </div>
                </div>

                <div>
                    <div>
                        TIMEZONE
                    </div>
                    <div>
                        {props.timezone}
                    </div>
                </div>

                <div>
                    <div>
                        Internet provider
                    </div>
                    <div>
                        {props.provider}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddressMetaData