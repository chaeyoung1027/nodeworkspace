class Student{
    constructor(학번, 이름, 전공, 연락처){
        this.학번 = 학번
        this.이름 = 이름
        this.전공 = 전공
        this.연락처 = 연락처
    }
    print(){
        console.log(item.학번+"\t"+item.이름+"\t"+item.전공+"\t"+item.연락처);
    }
}

let school = [
    new Student('1111', '가연우', '소프트웨어과','010-1111-1111'),
    new Student('1112', '나주연', '소프트웨어과','010-1234-5678'),
    new Student('2222', '다람쥐', '웹솔루션과','010-1357-2468'),
    new Student('2223', '라디오', '디자인과','010-1098-7654'),
    new Student('3303', '마선호', '디자인과','010-7201-5002')  
];

for(const item of school){
    item.print();
};