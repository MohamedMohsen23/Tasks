const array = [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"];

function hasDuplicate(arr) {
  const seen = new Set();

  for (const item of arr) {
    for (const seenItem of seen) {
      if (JSON.stringify(item) === JSON.stringify(seenItem)) {
        return true;
      }
    }
    seen.add(item);
  }

  return false;
}

console.log(hasDuplicate(array));

