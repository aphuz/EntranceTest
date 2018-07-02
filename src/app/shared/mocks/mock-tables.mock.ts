import { Table } from '../models/table.model';

export const TABLES: Table[] = [
  { id: 1, tableName: 'User' , columnName: [ "select", "ID", "User Name", "Password", "Role", ""], columns: ["select", 'id', "name", "password", "role", "update"]},
  { id: 2, tableName: 'Interview', columnName: ["select", "ID", "Interview Name", "Interview Code", "Description", "Download", ""], columns: ["select", 'interviewId', "interviewCode", "interviewName", "description", "download", "update"] },
  { id: 3, tableName: 'Question', columnName: ["select", "ID", "Question Text", "Correct Answer", "Level", ""], columns: ["select", 'questionId', "questionText", "correctAnswer", "level", "update"] },
];