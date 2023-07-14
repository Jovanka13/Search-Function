let students = [
  { name: "Marija", grade: "A" },
  { name: "Darko", grade: "B" },
  { name: "Elena", grade: "C" },
  { name: "Marko", grade: "D" },
  { name: "Angela", grade: "E" },
  { name: "Petar", grade: "A" },
  { name: "Oliver", grade: "B" },
  { name: "Maja", grade: "C" },
  { name: "Teo", grade: "A" },
  { name: "John", grade: "A" },
  { name: "Jane", grade: "B" },
  { name: "Bob", grade: "C" },
];

function searchItems() {
  let searchTerm = document.querySelector("#search-term").value.toLowerCase();
  let searchResults = document.querySelector("#search-results");
  searchResults.innerHTML = "";

  let filteredStudents = students.filter((student) => {
    let studentName = student.name.toLowerCase();
    let studentGrade = student.grade.toLowerCase();

    return (
      studentName.includes(searchTerm) || studentGrade.includes(searchTerm)
    );
  });

  filteredStudents.forEach((student) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${student.name} - ${student.grade}`;
    searchResults.appendChild(listItem);
  });
}

