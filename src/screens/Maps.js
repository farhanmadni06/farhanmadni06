import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

const Maps = () => {

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const [ val,setVal] = useState('')

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((val)=> setVal )
    }

    const LocationArray = [{ lat: 37.78825, lon: -122.4324 }, { lat: 37.78822, lon: -122.4322 }, { lat: 37.78823, lon: -122.4323 },]

    return (
        <View>
            <MapView
                style={{ width: '100%', height: '100%', }}
                initialRegion={{
                    latitude: 28.420898361343458,
                    longitude: 70.3310902671924,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default Maps