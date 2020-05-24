var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLwVjwga7vDfbyW_zY6ysvTsEZfXacbbG9H-9H7_8JEBd_XgHva_xBMnpEBrXEVWe9jM58ksq_sA0HG9QUHZWOU',
    privateKey: 'Er8bdtMyL4SQ-0GTiN-jxi0aS2SLCM5hwZ59LbDPID8'
}

push.setVapidDetails('mailto:ofirofir870@yahoo.com', vapidKeys.publicKey,vapidKeys.privateKey)
let sub = {}; 
push.sendNotification(sub,'test message')