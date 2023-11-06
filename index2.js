// problem3:কিভাবে আমরা আমাদের শ্রেণিকক্ষের সকলের রোল নাম্বার ক্রম  অনুসারে সাজাতে পারি
// _______ans________
const rollNumber =[9,8,7,6,5,4,3,2,1,33,22,55,66,77];

console.log(rollNumber.sort(function(a,b) {
    return a-b;
}));