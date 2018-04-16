const host = 'localhost'
const port = 27017
const user = 'mess'
const password = 'passmess'
const database = 'messageService'

const options = {
    connectTimeoutMS: 2000,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 100,
    poolSize: 10,
    bufferMaxEntries: 0
}

// milyen felhasználó névvel, milyen passal, milsen hoston, portszámon, milyen adatbázisjoz, milyen kulcson
// mongodb://mess:passmess@localhost/messageService?authMechanism=SCRAM-SHA-1
const uri = `mongodb://${user}:${password}@${host}:${port}/${database}?authMechanism=SCRAM-SHA-1`

module.exports = {
    uri: uri,
    options: options
}