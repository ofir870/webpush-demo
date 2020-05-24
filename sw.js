self.addEventListener('push', function(e) {
    var options ={

        body: "this notification was generated a push!",
        icon: "images/example.png",
        vibrate: [100,50,100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey:'2'
        },
        actions:[
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            { action: 'close', title: 'Close', icon:'images/xmark.png'}
        ]
    } 
    e.waituntil(self.ServiceWorkerRegistration.showNotifications('hello world!', options))
})