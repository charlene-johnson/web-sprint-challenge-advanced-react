// write your custom hook here to control your checkout form
import {useLocalStorage} from "./useLocalStorage";

export const useForm = (initialValues, key) => {
    const [values, setValues] = useLocalStorage(initialValues, key);
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage(false, "Success")

   const handleChanges = e => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
        };

    return [values, handleChanges, handleSubmit, showSuccessMessage];
}