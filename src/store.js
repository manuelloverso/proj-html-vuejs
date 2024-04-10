import { reactive } from "vue";
import CourseClass from "./courseClass";

export const store = reactive({
  navLinks: [
    "Home",
    "Courses",
    "Abouts Us",
    "News",
    "Pages",
    "Contact",
    "Purchase",
  ],

  latestCourses: [
    new CourseClass(
      "Make Better Decisions",
      "Decisions-icon.png",
      "James Colins",
      "21.00"
    ),

    new CourseClass(
      "How to be a speaker",
      "Speaker-icon.png",
      "James Colins",
      "21.00"
    ),

    new CourseClass(
      "Network Introductions",
      "Network-icon.png",
      "James Colins",
      "21.00"
    ),

    new CourseClass(
      "Brand Management",
      "Brand-icon.png",
      "James Colins",
      "21.00"
    ),
  ],
});
