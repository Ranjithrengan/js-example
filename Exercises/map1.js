const studentDatas = {                                  // varaible declaration (studentData is an object)
    branchStudents:[                                 // array of elements
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branches: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    students: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
};

const branchStudents = studentDatas.branchStudents;
const branches = studentDatas.branches;
const students = studentDatas.students;

const studentNameFinder = (studentId) => students.find(student => student.id === studentId).name
  const branchNameFinder =(branchId) => branches.find(branch=> branch.id === branchId).name

const branchStudentMapper = (branchStudent)  =>
{ 
    return {
        id:branchStudent.id,
        branchId:branchStudent.branchId,
        branchName:branchNameFinder(branchStudent.branchId),
        studentId:branchStudent.studentId,
        studentName: studentNameFinder(branchStudent.studentId)
    }
};

const branchStudentMaps = branchStudents.map(branchStudentMapper);

console.log(branchStudentMaps);