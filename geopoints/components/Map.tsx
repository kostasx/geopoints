import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { TbCrosshair } from 'react-icons/tb'
import { Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY!
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className='
        fixed 
        flex 
        justify-center 
        items-center 
        h-screen 
        w-screen 
        top-0
        left-0
        '>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    streetViewControl: false,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.LEFT_CENTER,
                    },
                    mapTypeControlOptions:{
                        position: google.maps.ControlPosition.LEFT_CENTER,
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    }
                }}
            >
                {/* <Marker position={center}>

                </Marker> */}
                <></>
            </GoogleMap>
            <div className='absolute z-20'>
                <TbCrosshair className='text-gray-600 w-8 h-8' />
            </div>
        </div>
    ) : <></>
}

export default React.memo(Map)