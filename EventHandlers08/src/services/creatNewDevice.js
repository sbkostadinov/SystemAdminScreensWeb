
export function getDevices() {
    return fetch('http://localhost:3000/createDeviceID')
        .then((devicedata) => devicedata.json())
}
// TODO WHAT HAPPENS IF THERE IS NO DATA TO START WITH ?


export function creatNewDevice(device) {
    return fetch( 'http://localhost:3000/createDeviceID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ device })
    })
      .then( (devicedata) => devicedata.json())
}