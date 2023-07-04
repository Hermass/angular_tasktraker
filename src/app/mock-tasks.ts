import { Task } from "./Tasks";

export const TASKS: Task[] = [

    {
        id: 1,
        title: "Complete project proposal",
        description: "Write and submit the project proposal document by end of day.",
        status: "In Progress",
        due_date: "2023-07-10"
      },
      {
        id: 2,
        title: "Review designs",
        description: "Review and provide feedback on the latest UI designs.",
        status: "Pending",
        due_date: "2023-07-05"
      },
      {
        id: 3,
        title: "Prepare presentation",
        description: "Create a presentation for the upcoming client meeting.",
        status: "Not Started",
        due_date: "2023-07-12"
      },
      {
        id: 4,
        title: "Test new feature",
        description: "Conduct thorough testing of the new feature implementation.",
        status: "In Progress",
        due_date: "2023-07-15"
      }
]