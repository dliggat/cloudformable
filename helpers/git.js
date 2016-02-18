require('shelljs/global');

module.exports.commitHash = function() {
  var hash = exec('([[ -d .git ]] && git rev-parse HEAD) || echo Not a git repo', {silent: true})
    .stdout
    .replace(/^\s+|\s+$/g, '');
  return hash;
};

module.exports.commitComment = function() {
  var comment = exec('([[ -d .git ]] && git log -1 --pretty=%B) || echo Not a git repo', {silent: true})
    .stdout
    .replace(/^\s+|\s+$/g, '');
  return comment;
};
