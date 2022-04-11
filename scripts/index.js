
const mc = require("minecraft-server-status-simple");
const fs = require("fs");
const spawn = require('child_process').spawn;



mc.status("java", "47.34.53.70", 25565)
.then((res) => {
    fs.writeFile("serverInfo.json", JSON.stringify(res), (err) => {
        console.log("JSON is created")
        let jsonData = require("C:/Users/chris/OneDrive/Desktop/Coding/web_development/ServerSideDev/MinecraftServerStatusTest/serverInfo.json")
        console.log(jsonData.online);
        if(jsonData.online == false){
            console.log("starting server")
            var minecraftServerProcess = spawn('java', [
                '-Xmx512M',
                '-Xms256M',
                '-jar',
                'minecraft_server.1.8.jar',
                'nogui'
            ])
        }
    })
})


