const semver=require("semver");
const versions=process.argv.slice(1);
    versions.filter(semver.valid)
      .sort((a, b) => semver.compare(a, b))
      .forEach(x => console.log(x));