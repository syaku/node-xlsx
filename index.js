require("node-zip");
var fs = require("fs");
var vm = require("vm");

var loadVendor = function(js){
  vm.runInThisContext(fs.readFileSync(__dirname+"/vendor/"+js), js);
}.bind(this);

loadVendor("xlsx.js/xlsx.js")

module.exports = xlsx
