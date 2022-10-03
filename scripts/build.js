const util = require("./util");

// Building the native version (copying files)
util.copyRecursiveSync("Native", "public/Native");

// Building the alpihe version (copying files)
util.copyRecursiveSync("Alpine", "public/Alpine");