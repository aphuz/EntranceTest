import { Api } from '../models/api.model';

export const APIs: Api[] = [
  { id: 1, name: 'getAllAnswerURL', url: '/v1/answers', description: "Get all answers" },
  { id: 2, name: 'loginURL', url: '/login', description: "Login" },
  { id: 3, name: 'getAllCategoryURL', url: '/v1/categories', description: "Get all categories" },
  { id: 4, name: 'getQuestionPDFURL', url: '/v1/file/examination', description: "Get PDF file" },
  { id: 5, name: 'exportExamByInterviewCode', url: '/v1/file/examination/interviews', description: "Get PDF file" },
  { id: 6, name: 'getAnswerPDFURL', url: '/v1/file/answerList/interviews', description: "Get PDF file" },
  { id: 7, name: 'uploadFileURL', url: '/v1/file/upload', description: "Upload file" },
  { id: 8, name: 'getAllInterviewURL', url: '/v1/interviews', description: "Get all interviews" },
  { id: 9, name: 'getAllKindURL', url: '/v1/kinds', description: "Get all kinds" },
  { id: 10, name: 'getQuestionsByProgrammingLanguageURL', url: '/v1/questions/categories', description: "Get questions" },
  { id: 11, name: 'getAllQuestionURL', url: '/v1/questions', description: "Get all questions" },
  { id: 12, name: 'getAllUserURL', url: '/v1/users', description: "Get all user" },
  { id: 13, name: 'deleteUserById', url: '/v1/users', description: "Delete user by ID" },
  { id: 14, name: 'deleteInterviewById', url: '/v1/interviews', description: "Delete interview by ID" },
  { id: 15, name: 'deleteRecords', url: '/v1/records', description: "Delete (all) records in table" },
  { id: 16, name: 'deleteQuestionById', url: '/v1/questions', description: "Delete question by ID" },
  { id: 17, name: 'updateUser', url: '/v1/users', description: "Updade user" },
  { id: 18, name: 'updateInterview', url: '/v1/interview', description: "Update interview" },
  { id: 19, name: 'updateQuestion', url: '/v1/questions', description: "Update question" },
  { id: 20, name: 'addUser', url: '/v1/users', description: "Add user"},
  { id: 21, name: 'addQuestion', url: '/v1/questions', description: "Add question" }
  
];