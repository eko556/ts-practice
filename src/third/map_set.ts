{

  const map: Map<string, string> = new Map();
  map.set("foo", "bar");

  console.log(map.get("foo"));
  console.log(map.get("bar"));
  console.log(map);
  console.log(map.has("foo"));
  console.log(map.has("bar"));

  const set: Set<string> = new Set();
  set.add("test");
  console.log(set);
  console.log(set.values());

}