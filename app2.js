var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = "https://www.indeed.co.in/viewjob?cmp=Bookings-Online-Solutions&t=Fullstack+Software+Developer&jk=bade7501e9ad764b&sjdu=Zzi_VW2ygsY1fzh3Ma9ZsE4zIT1NTXCwgFBhdjeTC3N38NS1pHx7mSWPcry1JsAXGdenbJB1n9SqoLVqqHPIXQ&tk=1dnk3hctl99sm800&adid=318423731&pub=4a1b367933fd867b19b072952f68dceb&vjs=3"

request(url,function(err,resp,body){
     var $ = cheerio.load(body);
    
    var jobTitle =$('.jobsearch-JobInfoHeader-title');
    var jobTitleText = jobTitle.text();
    
    var companyName = $('.jobsearch-CompanyInfoWithoutHeaderImage');
    var companyNameText = companyName.text();

    var location =$('.jobsearch-JobMetadataHeader-iconLabel');
    var locationText = location.text();

    var salary =$('.jobsearch-JobMetadataHeader-iconLabel');
    var salaryText = salary.text();
   
    var experience =$('.jobsearch-JobMetadataHeader-iconLabel');
    var experienceText = experience.text();

    var description =$('#jobDescriptionText p');
    var descriptionText = description.text();

    var job={
        jobTitle:jobTitleText,
        companyName:companyNameText,
        location:locationText,
        salary:salaryText,
        experience:experienceText,
        description:descriptionText
    };
    console.log(job);
})

app.listen(port);
console.log('server is listening on:'+port);
