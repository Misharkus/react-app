import cls from "./EditQuestionPage.module.css";
import { useActionState } from "react";
import { Loader } from "../../components/Loader";
import { QuestionForm } from "../../components/QuestionForm";
import { delayFn } from "../../helpers/delayFn";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";
import { dateFormat } from "../../helpers/dateFormat";

const EditCardAction = async (_prevState, formData) => {
  try {
    await delayFn();

    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resources.trim();
    const isClearForm = newQuestion.clearForm; //formData.get("clearForm")
    const questionId = newQuestion.questionId;

    const response = await fetch(`${API_URL}/react/${questionId}`, {
      method: "PATCH",
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(",") : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: dateFormat(new Date()),
      }),
    });

    if (response.status === 404) {
      throw new Error(response.statusText);
    }

    const question = response.json();
    toast.success("The question is successfully updated");

    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

export const EditQuestion = ({ initialState = {} }) => {
  const [formState, formAction, isPending] = useActionState(EditCardAction, {
    ...initialState,
    clearForm: false,
  });
  return (
    <>
      {isPending && <Loader />}
      <h1 className={cls.formTitle}>Edit question</h1>
      <div className={cls.formContainer}>
        <QuestionForm
          formAction={formAction}
          formState={formState}
          isPending={isPending}
          submitBtnText="Edit question"
        />
      </div>
    </>
  );
};
