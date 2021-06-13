export class CoursesService{
    //Decoupling the data fetch logic from the main calls
    title="List of courses";
    getCourses(){
      let courses = ["English","Hindi","Math"];
      return courses;
    }
}
