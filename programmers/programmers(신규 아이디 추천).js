const solution = (new_id) => {
  let answer = "";
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-zA-Z0-9-_.]+/g, "");
  new_id = new_id.replace(/\.\.+/g, ".");
  new_id = new_id.replace(/^\./g, "");
  new_id = new_id.replace(/\.$/g, "");
  new_id = new_id.replace(/^$/g, "a");
  new_id = new_id.slice(0, 15);
  new_id = new_id.replace(/\.$/g, "");
  let len = new_id.length;
  for (len; len < 3; len++) {
    new_id = new_id + new_id[new_id.length - 1];
  }
  answer = new_id;
  return answer;
};
