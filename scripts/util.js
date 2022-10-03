const fs = require("fs");
const path = require("path");

const copyRecursiveSync = (src, dest) => {
	const exists = fs.existsSync(src);
	const stats = exists && fs.statSync(src);
	const isDirectory = exists && stats.isDirectory();
	if(isDirectory) {
		try {
			fs.mkdirSync(dest);
		} catch {}
		
		fs.readdirSync(src).forEach((childItemName) => {
			copyRecursiveSync(
				path.join(src, childItemName),
				path.join(dest, childItemName)
			);
		});
	} else {
		fs.copyFileSync(src, dest);
	}
};

module.exports = {
	copyRecursiveSync: copyRecursiveSync
};