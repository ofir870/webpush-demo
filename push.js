var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLwVjwga7vDfbyW_zY6ysvTsEZfXacbbG9H-9H7_8JEBd_XgHva_xBMnpEBrXEVWe9jM58ksq_sA0HG9QUHZWOU',
    privateKey: 'Er8bdtMyL4SQ-0GTiN-jxi0aS2SLCM5hwZ59LbDPID8'
}

push.setVapidDetails('mailto:ofirofir870@yahoo.com', vapidKeys.publicKey,vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d51q5aj324w:APA91bEio6U60jCGmewhox0Qu85p4scjMLYN1pVJvNT3UgXWyISTTAcVsaxbCy5L0Bjywo3H7qUoLamtawKVjXHyrlofqpiagIwlY1bVzQU3fBABXjxkuZHWOYu_LKcN-trcZhcns0ZB","expirationTime":null,"keys":{"p256dh":"BD5KnmwWl85AoM0GP3c7Uy_Fv2Gmn7EIiQTqXWdhIoc85T7e5ykPY9vbqGt1-gfNyBfxDl4igBCMW4SERl667wo","auth":"-2BsWH8CVCSHZ40BT-gCoQ"}}
push.sendNotification(sub,'test message')