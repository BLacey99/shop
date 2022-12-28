let cake = "Hello";
let noCake = "TestCase51";
let lastTest = "lAsT TESt";
function camelCaser(string) {
  const camelArray = string.split("");
  for (i = 0; i < camelArray.length; i++) {
    if (i == 0 || i % 2 == 0) {
      camelArray[i] = camelArray[i].toUpperCase();
    } else {
      camelArray[i] = camelArray[i].toLowerCase();
    }
  }
  let camelResult = camelArray.join("").toString().trim();
  console.log(camelResult);
}

camelCaser(cake);
camelCaser(noCake);
camelCaser(lastTest);

/*
Read string. Find first occurence of <div>. On next occurence, modify <div> to </div>. Clear occurence counter back to 0. Repeat until fixed.
If text match <div>, and occurence# % 2 != 0, replace <div> with </div>, else continue and i++;

Solution: Sliding window.
<div> is 5 characters long.
i = 0
k = 5
window goes and says if i thru k == <div>
    then increment div counter

if div counter % 2 == 0
    then change <div> to </div>
    i+=5
else
    continue
*/

/*
Easier solution
JS replace() method.

string to array
    for each entry in array
    if entry === <div>
    occurences ++
    if occurences%2 = 0
        entry.replace('<div>', '</div'>)
        continue;

*/

let firstCase = "<div><p>Here is a <div> tag</p>";
let secondCase = "<div><div><div>";
let thirdCase = "<div><div><p>Hello</p><div><div>";

function divifier(divFix) {
  let occurences = 0;
  const divArray = divFix.split("");
  // console.log(divArray);

  for (i = 0; i < divArray.length; i++) {
    if (
      divArray[i] == "<" &&
      divArray[i + 1] != "/" &&
      divArray[i + 4] == ">"
    ) {
      occurences += 1;

      console.log("Match found " + occurences);
      if (occurences != 0 && occurences % 2 == 0) {
        console.log("\nNon-closure detected");
        divArray.splice(i + 1, 0, "/");

        for (j = i; j <= i + 5; j++) {
          console.log(divArray[j]);
        }
      }
    }
  }
  let divResult = divArray.join("").toString().trim();
  console.log(divResult);
}

divifier(firstCase);
divifier(secondCase);
divifier(thirdCase);
