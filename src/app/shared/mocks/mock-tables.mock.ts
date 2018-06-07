import { Table } from '../models/table.model';

export const TABLES: Table[] = [
  { id: 1, tableName: 'User' , columnName: ["ID", "User Name", "Password", "Role"], columns: ["id", "name", "password", "role"]},
  { id: 2, tableName: 'Category' , columnName: ["ID", "Category Name", "Number Question", "Multiple Choice Question", "Short Question"], columns: ["categoryId", "categoryName", "numberQuestion", "multipleChoiceQuestion", "shortQuestion"]},
  { id: 3, tableName: 'Interview', columnName: ["ID", "Interview Name", "Interview Code", "Description", "Download"], columns: ["interviewId", "interviewCode", "interviewName", "description", "download"] },
  { id: 4, tableName: 'Question', columnName: ["ID", "Question Text", "Correct Answer", "Level"], columns: ["questionId", "questionText", "correctAnswer", "level"] },
];