const mc = require("minecraft-server-status-simple");
const spawn = require('child_process').spawn;

mc.status("java", "UnlondonSeason6.minecraftr.us", 25565)
.then((res) => {
    console.log(res)
    if(res.online == false){
        console.log("server is offline")
    } else {
        console.log('server is online')
    }
})


