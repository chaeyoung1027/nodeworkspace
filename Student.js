let school = [
    new Product('1111', '가연우', '소프트웨어과','010-1111-1111'),
    new Product('1112', '나주연', '소프트웨어과','010-1234-5678'),
    new Product('2222', '다람쥐', '웹솔루션과','010-1357-2468'),
    new Product('2223', '라디오', '디자인과','010-1098-7654'),
    new Product('3303', '마선호', '디자인과','010-7201-5002')  
];

for(const item of school){
    console.log(item.학번+"\t"+item.이름+"\t"+item.전공+"\t"+item.연락처);
};