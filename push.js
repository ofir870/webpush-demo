var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLwVjwga7vDfbyW_zY6ysvTsEZfXacbbG9H-9H7_8JEBd_XgHva_xBMnpEBrXEVWe9jM58ksq_sA0HG9QUHZWOU',
    privateKey: 'Er8bdtMyL4SQ-0GTiN-jxi0aS2SLCM5hwZ59LbDPID8'
}

push.setVapidDetails('mailto:ofirofir870@yahoo.com', vapidKeys.publicKey,vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eDJWMf1MPGM:APA91bEdn9IR4yjCa9P_zQvUIQTPYNk_WPSw1C4681tHmlAd-2NmHBtvj372eO0ZybvBg_TfGnsPHjGSkbVWRZBnrLn8SERB7MouwJRNlNth51NvDwUK95XUjF6KfVJeul8WakdShvny","expirationTime":null,"keys":{"p256dh":"BHmUmZtt2lfQ_TUr9-M6lYQvC9vrsa8Pz6qg1GijKUxzxahOKAd_mrN3ZoyXJN9A0ECYp99E02o7fS_67Ge1in0","auth":"7aCTLhNuvMQpTvJhi6vMMw"}} 
push.sendNotification(sub,'test message')