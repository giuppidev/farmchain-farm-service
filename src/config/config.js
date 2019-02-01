const dbSettings = {
    db: process.env.DB_NAME,
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}

const serverSettings = {
    port: process.env.SERVER_PORT || 3000,
}

  
const uploadServiceSettings = {
    path: process.env.STORAGE_PATH
}

const productServiceSettings = {
    host: process.env.PRODUCT_SERVER_HOST,
    port: process.env.PRODUCT_SERVER_PORT
}



module.exports = Object.assign({}, { dbSettings, serverSettings, uploadServiceSettings, productServiceSettings})
