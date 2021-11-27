import { useEffect, useState } from "react";
import { getAllAnswers } from "../../../mock-data/api";
import { storageData } from "../../../utils/storageData";

export default function useAnswers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState(null);

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
  useEffect(() => {
    fetchAllAnswers();
  }, []);

  return {
    loading,
    error,
    answers,
  };
}
