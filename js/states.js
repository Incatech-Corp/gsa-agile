
function States(){

var statejson = {
    "name":["ALASKA","ALABAMA","ARKANSAS","ARIZONA","CALIFORNIA","COLORADO","CONNECTICUT","DISTRICT OF COLUMBIA","DELAWARE","FLORIDA","GEORGIA","HAWAII","IOWA","IDAHO","ILLINOIS","INDIANA","KANSAS","KENTUCKY","LOUISIANA","MASSACHUSETTS","MARYLAND","MAINE","MICHIGAN","MINNESOTA","MISSOURI","MISSISSIPPI","MONTANA","NORTH CAROLINA","NORTH DAKOTA","NEBRASKA","NEW HAMPSHIRE","NEW JERSEY","NEW MEXICO","NEVADA","NEW YORK","OHIO","OKLAHOMA","OREGON","PENNSYLVANIA","PUERTO RICO","RHODE ISLAND","SOUTH CAROLINA","SOUTH DAKOTA","TENNESSEE","TEXAS","UTAH","VIRGINIA","VERMONT","WASHINGTON","WISCONSIN","WEST VIRGINIA","WYOMING"],
    "abbreviation":["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"],
    "capital":["Juneau","Montgomery","Little Rock","Phoenix","Sacramento","Denver","Hartford","DISTRICT OF COLUMBIA","Dover","Tallahassee","Atlanta","Honolulu","Des Moines","Boise","Springfield","Indianapolis","Topeka","Frankfort","Baton Rouge","Boston","Annapolis","Augusta","Lansing","Saint Paul","Jefferson City","Jackson","Helena","Raleigh","Bismarck","Lincoln","Concord","Trenton","Santa Fe","Carson City","Albany","Columbus","Oklahoma City","Salem","Harrisburg","San Juan","Providence","Columbia","Pierre","Nashville","Austin","Salt Lake City","Richmond","Montpelier","Olympia","Madison","Charleston","Cheyenne"],
    "latitude":[61.385,32.799,34.9513,33.7712,36.17,39.0646,41.5834,38.8964,39.3498,27.8333,32.9866,21.1098,42.0046,44.2394,40.3363,39.8647,38.5111,37.669,31.1801,42.2373,39.0724,44.6074,43.3504,45.7326,38.4623,32.7673,46.9048,35.6411,47.5362,41.1289,43.4108,40.314,34.8375,38.4199,42.1497,40.3736,35.5376,44.5672,40.5773,18.2766,41.6772,33.8191,44.2853,35.7449,31.106,40.1135,37.768,44.0407,47.3917,44.2563,38.468,42.7475],
    "longitude":[-152.2683,-86.8073,-92.3809,-111.3877,-119.7462,-105.3272,-72.7622,-77.0262,-75.5148,-81.717,-83.6487,-157.5311,-93.214,-114.5103,-89.0022,-86.2604,-96.8005,-84.6514,-91.8749,-71.5314,-76.7902,-69.3977,-84.5603,-93.9196,-92.302,-89.6812,-110.3261,-79.8431,-99.793,-98.2883,-71.5653,-74.5089,-106.2371,-117.1219,-74.9384,-82.7755,-96.9247,-122.1269,-77.264,-66.335,-71.5101,-80.9066,-99.4632,-86.7489,-97.6475,-111.8535,-78.2057,-72.7093,-121.5708,-89.6385,-80.9696,-107.2085],
       "weight":[1500,5500,1500,6500,6500,2500,2500,2500,2500,7000,7000,1500,1500,2500,1500,7500,1500,1500,2500,3500,2500,1500,2500,6500,5500,1500,6500,3000,6500,2500,1500,7500,2500,2500,3500,2500,6500,1500,3500,1500,2500,1500,1500,6000,8500,2500,6500,1500,2500,2500,1500,6500],
    "class I":[1,5,1,6,6,2,2,2,2,5,5,1,1,2,1,6,1,1,2,3,2,1,2,6,5,1,6,2,6,2,1,6,2,2,3,2,6,1,3,1,2,1,1,5,8,2,6,1,2,2,1,6],
    "class II":[1,1,1,1,1,1,1,1,1,4,4,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1],
    "class III":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
}
return statejson;
}

function getStateWeight()
{
	var abbreviation = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"];
	

}
function getreport(report){
		
var xmlhttp = new XMLHttpRequest();
var url = "https://api.fda.gov/food/enforcement.json?search=report_date:'" + report +"'&limit=25";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
		debugger;
        parseARR(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

 
    
			 
}
function parseARR(arr) {
    var out = "";
    var i;
	debugger;
    for(i = 0; i < arr.results.length; i++) {
        out +=  arr.results[i].time + ' ' + arr.results[i].count + '</a><br>';
    }
	return out;
}
function getData(url)
{
	 var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
       return xmlhttp.responseText;
		}
}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();	
	
}

function weightJson(){
	var statejson = {
  AK: {
    latitude:61.385,
    longitude:-152.2683,
    Weight:95
  },
  AL: {
    latitude:32.799,
    longitude:-86.8073,
    Weight:97
  },
  AR: {
    latitude:34.9513,
    longitude:-92.3809,
    Weight:72
  },
  AZ: {
    latitude:33.7712,
    longitude:-111.3877,
    Weight:43
  },
  CA: {
    latitude:36.17,
    longitude:-119.7462,
    Weight:11
  },
  CO: {
    latitude:39.0646,
    longitude:-105.3272,
    Weight:68
  },
  CT: {
    latitude:41.5834,
    longitude:-72.7622,
    Weight:45
  },
  DC: {
    latitude:38.8964,
    longitude:-77.0262,
    Weight:44
  },
  DE: {
    latitude:39.3498,
    longitude:-75.5148,
    Weight:18
  },
  FL: {
    latitude:27.8333,
    longitude:-81.717,
    Weight:75
  },
  GA: {
    latitude:32.9866,
    longitude:-83.6487,
    Weight:44
  },
  HI: {
    latitude:21.1098,
    longitude:-157.5311,
    Weight:45
  },
  IA: {
    latitude:42.0046,
    longitude:-93.214,
    Weight:44
  },
  ID: {
    latitude:44.2394,
    longitude:-114.5103,
    Weight:6
  },
  IL: {
    latitude:40.3363,
    longitude:-89.0022,
    Weight:68
  },
  IN: {
    latitude:39.8647,
    longitude:-86.2604,
    Weight:94
  },
  KS: {
    latitude:38.5111,
    longitude:-96.8005,
    Weight:86
  },
  KY: {
    latitude:37.669,
    longitude:-84.6514,
    Weight:27
  },
  LA: {
    latitude:31.1801,
    longitude:-91.8749,
    Weight:63
  },
  MA: {
    latitude:42.2373,
    longitude:-71.5314,
    Weight:26
  },
  "MD": {
    latitude:39.0724,
    longitude:-76.7902,
    Weight:87
  },
  "ME": {
    latitude:44.6074,
    longitude:-69.3977,
    Weight:66
  },
  "MI": {
    latitude:43.3504,
    longitude:-84.5603,
    Weight:7
  },
  "MN": {
    latitude:45.7326,
    longitude:-93.9196,
    Weight:25
  },
  "MO": {
    latitude:38.4623,
    longitude:-92.302,
    Weight:57
  },
  "MS": {
    latitude:32.7673,
    longitude:-89.6812,
    Weight:37
  },
  "MT": {
    latitude:46.9048,
    longitude:-110.3261,
    Weight:31
  },
  "NC": {
    latitude:35.6411,
    longitude:-79.8431,
    Weight:35
  },
  "ND": {
    latitude:47.5362,
    longitude:-99.793,
    Weight:17
  },
  "NE": {
    latitude:41.1289,
    longitude:-98.2883,
    Weight:55
  },
  "NH": {
    latitude:43.4108,
    longitude:-71.5653,
    Weight:69
  },
  "NJ": {
    latitude:40.314,
    longitude:-74.5089,
    Weight:8
  },
  "NM": {
    latitude:34.8375,
    longitude:-106.2371,
    Weight:58
  },
  "NV": {
    latitude:38.4199,
    longitude:-117.1219,
    Weight:56
  },
  "NY": {
    latitude:42.1497,
    longitude:-74.9384,
    Weight:35
  },
  "OH": {
    latitude:40.3736,
    longitude:-82.7755,
    Weight:50
  },
  "OK": {
    latitude:35.5376,
    longitude:-96.9247,
    Weight:18
  },
  "OR": {
    latitude:44.5672,
    longitude:-122.1269,
    Weight:68
  },
  "PA": {
    latitude:40.5773,
    longitude:-77.264,
    Weight:72
  },
  "PR": {
    latitude:18.2766,
    longitude:-66.335,
    Weight:98
  },
  "RI": {
    latitude:41.6772,
    longitude:-71.5101,
    Weight:70
  },
  "SC": {
    latitude:33.8191,
    longitude:-80.9066,
    Weight:39
  },
  "SD": {
    latitude:44.2853,
    longitude:-99.4632,
    Weight:9
  },
  "TN": {
    latitude:35.7449,
    longitude:-86.7489,
    Weight:17
  },
  "TX": {
    latitude:31.106,
    longitude:-97.6475,
    Weight:7
  },
  "UT": {
    latitude:40.1135,
    longitude:-111.8535,
    Weight:23
  },
  "VA": {
    latitude:37.768,
    longitude:-78.2057,
    Weight:77
  },
  "VT": {
    latitude:44.0407,
    longitude:-72.7093,
    Weight:20
  },
  "WA": {
    latitude:47.3917,
    longitude:-121.5708,
    Weight:26
  },
  "WI": {
    latitude:44.2563,
    longitude:-89.6385,
    Weight:69
  },
  "WV": {
    latitude:38.468,
    longitude:-80.9696,
    Weight:64
  },
  "WY": {
    latitude:42.7475,
    longitude:-107.2085,
    Weight:90
  }
};
return statejson;
}
