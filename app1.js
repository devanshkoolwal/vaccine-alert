var express = require("express");
var app = express();
const request = require('request');
const prompt = require('prompt-sync')();
const got = require('got');
const util = require('util');
const axios = require("axios");
const url="https://cdn-api.co-vin.in/api/v2/admin/location/districts/16";

// console.log('ID\tName');
// const states=[{"state_id":1,"state_name":"Andaman and Nicobar Islands"},{"state_id":2,"state_name":"Andhra Pradesh"},{"state_id":3,"state_name":"Arunachal Pradesh"},{"state_id":4,"state_name":"Assam"},{"state_id":5,"state_name":"Bihar"},{"state_id":6,"state_name":"Chandigarh"},{"state_id":7,"state_name":"Chhattisgarh"},{"state_id":8,"state_name":"Dadra and Nagar Haveli"},{"state_id":9,"state_name":"Delhi"},{"state_id":10,"state_name":"Goa"},{"state_id":11,"state_name":"Gujarat"},{"state_id":12,"state_name":"Haryana"},{"state_id":13,"state_name":"Himachal Pradesh"},{"state_id":14,"state_name":"Jammu and Kashmir"},{"state_id":15,"state_name":"Jharkhand"},{"state_id":16,"state_name":"Karnataka"},{"state_id":17,"state_name":"Kerala"},{"state_id":18,"state_name":"Ladakh"},{"state_id":19,"state_name":"Lakshadweep"},{"state_id":20,"state_name":"Madhya Pradesh"},{"state_id":21,"state_name":"Maharashtra"},{"state_id":22,"state_name":"Manipur"},{"state_id":23,"state_name":"Meghalaya"},{"state_id":24,"state_name":"Mizoram"},{"state_id":25,"state_name":"Nagaland"},{"state_id":26,"state_name":"Odisha"},{"state_id":27,"state_name":"Puducherry"},{"state_id":28,"state_name":"Punjab"},{"state_id":29,"state_name":"Rajasthan"},{"state_id":30,"state_name":"Sikkim"},{"state_id":31,"state_name":"Tamil Nadu"},{"state_id":32,"state_name":"Telangana"},{"state_id":33,"state_name":"Tripura"},{"state_id":34,"state_name":"Uttar Pradesh"},{"state_id":35,"state_name":"Uttarakhand"},{"state_id":36,"state_name":"West Bengal"},{"state_id":37,"state_name":"Daman and Diu"}];
// states.forEach(function(state){
//     console.log(state.state_id+'\t'+state.state_name);
// })



// const getData = async url => {
//     try {
//       const response = await request.get(url);
//       console.log(response);
//       const data = response.districts;
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   getData(url);
// const district=prompt('Do you know your district code? Y/N\t');
// if(district==='N'){
// (async () => {
//     try {
//       const response = await request('https://cdn-api.co-vin.in/api/v2/admin/location/states', { json: true },(err, res, data));
//       data.states.forEach(function(state){
//         console.log(state.state_id+'\t'+state.state_name);
//     });
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }

// request('https://cdn-api.co-vin.in/api/v2/admin/location/states', (err, res, data) => {
//         if (err) { return console.log(err); }
//         console.log(data);
        
//     });
    


// if(district==='N'){
//     request('https://cdn-api.co-vin.in/api/v2/admin/location/states', { json: true }, (err, res, data) => {
//         if (err) { return console.log(err); }
//         console.log('ID\tName')
//         data.states.forEach(function(state){
//             console.log(state.state_id+'\t'+state.state_name);
//         });
//     });
//     const statecode=prompt('Enter state code\t');

    

//     request('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+statecode, { json: true }, (err, res, data) => {
//         if (err) { return console.log(err); }
//         console.log('ID\tName')
//         data.districts.forEach(function(district){
//             console.log(district.district_id+'\t'+state.district_name);
//         });
//     });

// }





var districtcode=504;


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

// && vaccine.min_age_limit===45

var link1='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+districtcode+'&date='+td+'-'+tm+"-"+yyyy;
var link2='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+districtcode+'&date='+atd+'-'+atm+"-"+yyyy;
var link3='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+districtcode+'&date='+aatd+'-'+aatm+"-"+yyyy;
setInterval(() => {
    
    request(link1, { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    
    data.sessions.forEach(function(vaccine){
        if(vaccine.available_capacity_dose1>0 && vaccine.min_age_limit===18){
            console.log(td+'   '+vaccine.pincode+' '+vaccine.available_capacity_dose1+' '+vaccine.name+' '+vaccine.min_age_limit);
        }
    });

    
    
    });

    
    request(link2, { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    
    data.sessions.forEach(function(vaccine){
        if(vaccine.available_capacity_dose1>0){
            console.log(atd+'   '+vaccine.pincode+' '+vaccine.available_capacity_dose1+' '+vaccine.name+' '+vaccine.min_age_limit);
        }
    });

    
    
    });
    
    request(link3, { json: true }, (err, res, data) => {
    if (err) { return console.log(err); }
    
    data.sessions.forEach(function(vaccine){
        if(vaccine.available_capacity_dose1>0){
            console.log(aatd+'   '+vaccine.pincode+' '+vaccine.available_capacity_dose1+' '+vaccine.name+' '+vaccine.min_age_limit);
        }
    });

    
    
    });

    console.log();
},6000);
