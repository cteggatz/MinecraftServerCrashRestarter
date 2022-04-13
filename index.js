const mc = require("minecraft-server-status-simple");
const spawn = require('child_process').spawn;
const {execFile} = require("child_process");


const restartCheckInterval = 6000;

//setting server switch
let serverStartSwitch = false;

function restartCheck(){
    mc.status("java", "UnlondonSeason6.minecraftr.us", 25565)
    .then((res) => {
        if(res.online == false && serverStartSwitch == false){
            console.log("starting server");
            /*
            execFile('test.bat', (error, stdout, stderror) => {
                if(error){
                    console.log(`error: ${error.message}`);
                }
                if(stderror){
                    console.log('error : ' + stderror)
                }
                console.log(stdout)
            })
            */
            serverStartSwitch = true;
        } 
        if(res.online == true && serverStartSwitch == true){
            let onlineDate = new Date();
            console.log(`server is online : ${onlineDate.toTimeString()}`);
            serverStartSwitch = false;
        }
    })
    .then(() => {setTimeout(restartCheck, 300000)})
}
restartCheck();