// একটি sentence-e কতগুলো vowel আছে তা বের করার উপায়.
// _______ans________
const vowels =["a","e","i","o","u","A","E","I","O","u"];
function countVowels(sentence) {
    let count =0;
    const letters = Array.from(sentence);
    letters.forEach(function(value) {
        if (vowels.includes(value)){
            count++
        }
    });
    return count;
}
console.log(countVowels("I love Bangladesh"));