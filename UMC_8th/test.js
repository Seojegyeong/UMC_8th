
// 클래스 선언
class Student {
    constructor(name, school) {
        // 필드(멤버 변수)
        this.name = name;      // 학생의 이름
        this.school = school;  // 학생이 다니는 학교
    }

    // 메소드 (학생 소개 기능)
    introduction() {
        // 콘솔에 학생의 이름과 학교를 출력
        console.log(`안녕하세요, ${this.name}입니다. ${this.school}에 다니고 있습니다.`);
    }
}

// 여러 명의 학생 객체 생성
const students = [
    new Student('Jamie', '상명대학교'),
    new Student('Joy', '덕성여자대학교'),
    new Student('Emma', '연세대학교'),
    new Student('Daniel', '서경대학교')
];

// 각 학생 정보 출력
students.forEach(student => {
    console.log(`이름: ${student.name}`);     // 학생의 이름 출력
    console.log(`학교: ${student.school}`);   // 학생이 다니는 학교 출력
    student.introduction();                  // introduction() 메소드를 호출하여 자기소개 출력
    console.log('----------------------');   // 구분선 출력
});
