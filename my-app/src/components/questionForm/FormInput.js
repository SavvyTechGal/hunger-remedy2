import Question from "./MultiQuestions"
import Ingredient from "./Ingredient"
import Name from "./Name"
import "./question.css"
import useFormContext from "../../hooks/useFormContext"


const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Name />,
        1: <Question />,
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs