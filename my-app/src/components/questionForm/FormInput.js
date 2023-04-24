import Diet from "./Diet"
import Ingredient from "./Ingredient"
import Cuisine from "./Cuisine"
import "./question.css"
import useFormContext from "../../hooks/useFormContext"


const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <Diet />,
        1: <Cuisine />,
        2: <Ingredient />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs