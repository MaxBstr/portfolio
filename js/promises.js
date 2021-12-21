/* learn promises */

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'Linux',
//         port: 80,
//         status: 'work'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'Linux',
            port: 80,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then(clientData => {
    clientData.fromPromise = true
    return clientData
    })
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})


Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})