import { useEffect, useState } from "react";
import {
  createQuestion,
  deleteQuestions,
  getAllQuestions,
  updateQuestions,
} from "../../../mock-data/api";
import { storageData } from "../../../utils/storageData";

export default function useQuestions() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

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

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  return {
    loading,
    error,
    questions,
    addQuestion,
    removeQuestion,
    editQuestions,
  };
}
