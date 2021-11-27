import { v4 as uuidv4 } from "uuid";
import { storageData } from "../utils/storageData";
let users = [
  {
    id: uuidv4(),
    email: "admin@quiz-app.com",
    password: "admin",
    name: "Admin",
    userType: "Admin",
  },
  {
    id: uuidv4(),
    email: "user1@quiz-app.com",
    password: "12345",
    name: "Mark",
    userType: "User",
  },
  {
    id: uuidv4(),
    email: "user2@quiz-app.com",
    password: "12345",
    name: "Henry",
    userType: "User",
  },
  {
    id: uuidv4(),
    email: "user3@quiz-app.com",
    password: "12345",
    name: "Bob",
    userType: "User",
  },
];

let questions = [
  {
    id: uuidv4(),
    question: "What are the different data types present in javascript?",
  },
  {
    id: uuidv4(),
    question: "Explain Hoisting in javascript.",
  },
  {
    id: uuidv4(),
    question: "What is an Immediately Invoked Function in javascript?",
  },
  {
    id: uuidv4(),
    question: "What is the use of a constructor function in javascript?",
  },
];

let answers = {
  // ["user1@quiz-app.com"]: {
  //   ["ABCD"]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  // },
  // ["user2@quiz-app.com"]: {
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  // },
  // ["user3@quiz-app.com"]: {
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  //   [uuidv4()]: {
  //     question: "What are the different data types present in javascript?",
  //     answer: "This test answer",
  //     previousAnswer: ["This is first answer", "this is second answer"],
  //   },
  // },
};

export const verifyUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setTimeout(() => resolve(user), 500);
    }
    setTimeout(() => reject(new Error("User not found")), 500);
  });
};

export const getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    if (
      !storageData.getValue("questions") ||
      storageData.getValue("questions") === undefined
    ) {
      storageData.setValue("questions", questions);
      setTimeout(() => resolve(questions), 500);
    } else {
      setTimeout(() => resolve(storageData.getValue("questions")), 500);
    }
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};

export const createQuestion = (data) => {
  return new Promise((resolve, reject) => {
    if (!data.question) {
      reject(new Error("Not empty question allowed!!!"));
    }
    let allQuestions = storageData.getValue("questions");
    const id = uuidv4();
    const newQuestion = { id: id, question: data.question };

    allQuestions = [...allQuestions, newQuestion];

    setTimeout(() => resolve(allQuestions), 500);
  });
};

export const updateQuestions = (id, question) =>
  new Promise((resolve, reject) => {
    const allQuestions = storageData.getValue("questions");
    const questionIdx = allQuestions.findIndex(
      (question) => question.id === id
    );
    if (!question) {
      return setTimeout(() => reject(new Error("Question not found")), 250);
    }

    allQuestions[questionIdx].question = question;
    storageData.setValue("questions", allQuestions);
    return setTimeout(() => resolve(allQuestions), 250);
  });

export const deleteQuestions = (id) => {
  return new Promise((resolve, reject) => {
    const allQuestions = storageData.getValue("questions");
    const filteredQuestions = allQuestions.filter((item) => item.id !== id);
    setTimeout(() => resolve(filteredQuestions), 500);
    setTimeout(() => reject(new Error("User not found")), 500);
  });
};

export const getAllAnswers = () => {
  return new Promise((resolve, reject) => {
    if (
      !storageData.getValue("answers") ||
      storageData.getValue("answers") === undefined
    ) {
      storageData.setValue("answers", answers);
      setTimeout(() => resolve(answers), 500);
    } else {
      setTimeout(() => resolve(storageData.getValue("answers")), 500);
    }
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};

export const getAnswersByUserId = (id) => {
  return new Promise((resolve, reject) => {
    let answer = null;
    if (storageData.getValue("answers")) {
      answers = storageData.getValue("answers");
      answer = answers[id];
    }
    setTimeout(() => resolve(answer), 500);
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};

export const createAnswer = (userId, data) => {
  return new Promise((resolve, reject) => {
    if (!data.answer)
      setTimeout(() => reject(new Error("Empty answer not allowed!!!")), 500);
    const ans = answers[userId];
    if (ans) {
      const ques = ans[data.id];
      if (ques) {
        ques.answer = data.answer;
        ques.previousAnswer.push(data.answer);
        ans[data.id] = ques;
        answers[userId][data.id] = ques;
      } else {
        const newQuestionAnswer = {
          question: data.question,
          answer: data.answer,
          previousAnswer: [data.answer],
        };
        answers[userId] = {
          ...answers[userId],
          [data.id]: newQuestionAnswer,
        };
      }
    } else {
      answers = {
        ...answers,
        [userId]: {
          [data.id]: {
            question: data.question,
            answer: data.answer,
            previousAnswer: [data.answer],
          },
        },
      };
    }
    setTimeout(() => resolve(answers), 500);
    setTimeout(() => reject(new Error("Something went wrong!!!")), 500);
  });
};
