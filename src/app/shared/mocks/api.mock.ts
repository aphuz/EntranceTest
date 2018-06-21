import { Api } from '../models/api.model';

export const APIs: Api[] = [
  { id: 1, name: 'getAllAnswerURL', url: '/getallanswers', description: "Get all user" },
  { id: 2, name: 'loginURL', url: '/login', description: "Get all user" },
  { id: 3, name: 'getAllCategoryURL', url: '/getallcategories', description: "Get all user" },
  { id: 4, name: 'getQuestionPDFURL', url: '/exportRandomExamination', description: "Get all user" },
  { id: 5, name: 'exportExamByInterviewCode', url: '/exportExamByInterviewCode', description: "Get all user" },
  { id: 6, name: 'getAnswerPDFURL', url: '/exportanswerPDF/', description: "Get all user" },
  { id: 7, name: 'uploadFileURL', url: '/uploadfile', description: "Get all user" },
  { id: 8, name: 'getAllInterviewURL', url: '/getallinterviews', description: "Get all user" },
  { id: 9, name: 'getAllKindURL', url: '/getallkinds', description: "Get all user" },
  { id: 10, name: 'getQuestionsByProgrammingLanguageURL', url: '/getQuestionsByProgrammingLanguage', description: "Get all user" },
  { id: 11, name: 'getAllQuestionURL', url: '/getallquestions', description: "Get all user" },
  { id: 12, name: 'getAllUserURL', url: '/getallusers', description: "Get all user" }
  ];