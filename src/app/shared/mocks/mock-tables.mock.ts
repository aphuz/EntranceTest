import { Table } from '../models/table.model';

export const TABLES: Table[] = [
  { id: 1, tableName: 'User' , columnName: [ "select", "ID", "User Name", "Password", "Role"], columns: ["select", "id", "name", "password", "role"]},
  { id: 2, tableName: 'Category' , columnName: ["select", "ID", "Category Name", "Number Question", "Multiple Choice Question", "Short Question"], columns: ["select", "categoryId", "categoryName", "numberQuestion", "multipleChoiceQuestion", "shortQuestion"]},
  { id: 3, tableName: 'Interview', columnName: ["select", "ID", "Interview Name", "Interview Code", "Description", "Download"], columns: ["select", "interviewId", "interviewCode", "interviewName", "description", "download"] },
  { id: 4, tableName: 'Question', columnName: ["select", "ID", "Question Text", "Correct Answer", "Level"], columns: ["select", "questionId", "questionText", "correctAnswer", "level"] },
];