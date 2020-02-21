const semver=require("semver");


const filterTags = (versions=[],regex="") => {
  return versions.filter(semver.valid)
    .filter(x => x.match(new RegExp(regex)))
    .sort((a, b) => semver.compare(a, b))
}

module.exports = {
  filterTags
}