import { createContext, useEffect, useState } from "react";
import { storageData } from "../utils/storageData";
import {
  createQuestion,
  deleteQuestions,
  getAllAnswers,
  getAllQuestions,
  getAnswersByUserId,
  updateQuestions,
  verifyUser,
} from "../mock-data/api";

export const UserContext = createContext({
  currentUser: null,
  authenticateUser: () => {},
  logout: () => {},
  loading: false,
  error: null,
  setError: () => {},
  setLoading: () => {},
  questions: [],
  fetchAllQuestions: () => {},
  removeQuestion: () => {},
  addQuestion: () => {},
  answers: {},
  fetchAllAnswers: () => {},
  fetchAnswersById: () => {},
});

export function UserProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const user = storageData.getLoggedInUser();
    if (user) setCurrentUser(user);
  }, []);
  async function authenticateUser(email, password) {
    setLoading(true);
    await verifyUser(email, password)
      .then((user) => {
        storageData.setLoggedInUser(user);
        setCurrentUser(user);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  async function fetchAllQuestions() {
    setLoading(true);
    await getAllQuestions()
      .then((res) => {
        storageData.setValue("questions", res);
        setQuestions(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  async function addQuestion(data) {
    setLoading(true);
    await createQuestion(data)
      .then((res) => {
        storageData.setValue("questions", res);
        setQuestions(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }
  async function editQuestions(id, question) {
    setLoading(true);
    await updateQuestions(id, question)
      .then((res) => {
        storageData.setValue("questions", res);
        setQuestions(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  async function removeQuestion(id) {
    setLoading(true);
    await deleteQuestions(id)
      .then((res) => {
        storageData.setValue("questions", res);
        setQuestions(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  async function fetchAllAnswers() {
    setLoading(true);
    await getAllAnswers()
      .then((res) => {
        storageData.setValue("answers", res);
        setAnswers(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  async function fetchAnswersById() {
    const userId = storageData.getLoggedInUser().email;
    setLoading(true);
    await getAnswersByUserId(userId)
      .then((res) => {
        setAnswers(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  function logout() {
    storageData.logout();
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    authenticateUser,
    loading,
    logout,
    error,
    setError,
    questions,
    fetchAllQuestions,
    editQuestions,
    removeQuestion,
    addQuestion,
    fetchAllAnswers,
    answers,
    setLoading,
    fetchAnswersById,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
