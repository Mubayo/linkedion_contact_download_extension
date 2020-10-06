var i =0;
var data = [];
var Results = [
["Name", "Position", "Company"],
];

var CsvString = "";
function exportToCsv() {
for(i = 0; i< persons.length; i++){
    var name = persons[i].trim();
    var position = positions[i].trim();
    var company = companyList[i].trim();
    data = [name,position,company];
    Results.push(data);
}
  Results.forEach(function(RowItem, RowIndex) {
//    RowItem.forEach(function(ColItem, ColIndex) {
      CsvString += RowItem+ ',';
//    });
    CsvString += "\r\n";
  });
  CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var x = document.getElementById("download");
  x.setAttribute("href", CsvString );
  x.setAttribute("download","somedata.csv"); 
}