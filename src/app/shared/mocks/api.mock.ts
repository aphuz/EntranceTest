import { Api } from '../models/api.model';

export const APIs: Api[] = [
  { id: 1, name: 'getAllAnswerURL', url: '/getallanswers', description: "Get all answers" },
  { id: 2, name: 'loginURL', url: '/login', description: "Login" },
  { id: 3, name: 'getAllCategoryURL', url: '/getallcategories', description: "Get all categories" },
  { id: 4, name: 'getQuestionPDFURL', url: '/exportRandomExamination', description: "Get PDF file" },
  { id: 5, name: 'exportExamByInterviewCode', url: '/exportExamByInterviewCode', description: "Get PDF file" },
  { id: 6, name: 'getAnswerPDFURL', url: '/exportanswerPDF/', description: "Get PDF file" },
  { id: 7, name: 'uploadFileURL', url: '/uploadfile', description: "Upload file" },
  { id: 8, name: 'getAllInterviewURL', url: '/getallinterviews', description: "Get all interviews" },
  { id: 9, name: 'getAllKindURL', url: '/getallkinds', description: "Get all kinds" },
  { id: 10, name: 'getQuestionsByProgrammingLanguageURL', url: '/getQuestionsByProgrammingLanguage', description: "Get questions" },
  { id: 11, name: 'getAllQuestionURL', url: '/getallquestions', description: "Get all questions" },
  { id: 12, name: 'getAllUserURL', url: '/getallusers', description: "Get all user" },
  { id: 13, name: 'deleteUserById', url: '/delete', description: "Delete user by ID" },
  { id: 14, name: 'deleteInterviewById', url: '/deleteinterview', description: "Delete interview by ID" }
  ];