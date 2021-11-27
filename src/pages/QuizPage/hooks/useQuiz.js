import { useEffect, useState } from "react";
import {
  createAnswer,
  getAllQuestions,
  getAnswersByUserId,
} from "../../../mock-data/api";
import { storageData } from "../../../utils/storageData";

export default function useQuiz(userId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState(null);
  const [questions, setQuestions] = useState([]);

  async function fetchAnswers() {
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
  useEffect(() => {
    fetchAnswers();
    fetchAllQuestions();
  }, [userId]);

  async function submitAnswer(userId, data) {
    setLoading(true);
    await createAnswer(userId, data)
      .then((res) => {
        storageData.setValue("answers", res);
        // setAnswers(res);
        fetchAnswers();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.toString());
      });
  }

  return {
    loading,
    error,
    answers,
    submitAnswer,
    questions,
  };
}
