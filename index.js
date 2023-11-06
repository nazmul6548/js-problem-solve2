// problem:লুডু খেলায় আমরা কিভাবে এক থেকে ছয় সংখ্যা রেনডমলি প্রিন্ট করতে পারি.
// _______ans________
function number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber=number(3,100);
  console.log(randomNumber);



  let x =Math.floor((Math.random() * 6 ) + 1 ); 
  
  console.log(x);