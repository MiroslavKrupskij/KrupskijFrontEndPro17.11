class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(undefined);
    }
  
    calculateAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    calculateAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    present() {
      this.updateAttendance(true);
    }
  
    absent() {
      this.updateAttendance(false);
    }
  
    updateAttendance(isPresent) {
      const index = this.attendance.findIndex(value => value === undefined);
      if (index !== -1) {
        this.attendance[index] = isPresent;
      }
    }
  
    summary() {
      const averageGrade = this.calculateAverageGrade();
      const attendanceRate = this.calculateAttendanceRate();
  
      if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (averageGrade < 90 || attendanceRate < 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  
    calculateAttendanceRate() {
      const presentCount = this.attendance.filter(value => value === true).length;
      return presentCount / this.attendance.length;
    }
  }
  const student1 = new Student("Іван", "Іванов", 2000);
  const student2 = new Student("Петро", "Петров", 1999);
  
  student1.addGrade(95);
  student1.addGrade(85);
  student1.addGrade(92);
  student1.present();
  student1.present();
  student1.absent();
  
  student2.addGrade(100);
  student2.addGrade(90);
  student2.addGrade(100);
  student2.present();
  student2.present();
  student2.present();
  
  console.log(`${student1.firstName} ${student1.lastName}: ${student1.summary()}`);
  console.log(`${student2.firstName} ${student2.lastName}: ${student2.summary()}`);