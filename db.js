const mongoose = require('mongoose')
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 

mongoose.connect('mongodb+srv://sdevgroupproject:Passwordsdev255@cluster0.v9j06oo.mongodb.net/?appName=Cluster0').then
(()=>console.log("connected"));

module.exports = mongoose