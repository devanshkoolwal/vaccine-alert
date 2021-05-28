var express = require("express");
var app = express();
const request = require('request');



var districtcode=776;


var today = new Date();
var yyyy = today.getFullYear();

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var td=String(tomorrow.getDate()).padStart(2, '0');
var tm=String(tomorrow.getMonth() + 1).padStart(2, '0'); 

const DAT=new Date();
DAT.setDate(DAT.getDate() + 2);
var atd=String(DAT.getDate()).padStart(2, '0');
var atm=String(DAT.getMonth() + 1).padStart(2, '0'); 

const DDAT=new Date();
DDAT.setDate(DAT.getDate() + 3);
var aatd=String(DDAT.getDate()).padStart(2, '0');
var aatm=String(DDAT.getMonth() + 1).padStart(2, '0');



var link1='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+districtcode+'&date='+td+'-'+tm+"-"+yyyy;
var link2='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+districtcode+'&date='+atd+'-'+atm+"-"+yyyy;
var link3='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+districtcode+'&date='+aatd+'-'+aatm+"-"+yyyy;
setInterval(() => {
    
    request(link1, { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    
    data.sessions.forEach(function(vaccine){
        if(vaccine.available_capacity_dose1>0){
            console.log(td+'   '+vaccine.pincode);
        }
    });

    
    
    });

    
    request(link2, { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    
    data.sessions.forEach(function(vaccine){
        if(vaccine.available_capacity_dose1>0){
            console.log(atd+'    '+vaccine.pincode);
        }
    });

    
    
    });
    
    request(link3, { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    
    data.sessions.forEach(function(vaccine){
        if(vaccine.available_capacity_dose1>0){
            console.log(aatd+'     '+vaccine.pincode);
        }
    });

    
    
    });

    console.log();
},90000);
