import FormInputs from './FormInput'
import useFormContext from "../../hooks/useFormContext"
import "./question.css"

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }


    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>

            <header className="form-header">
                <h2>{title[page]}</h2>

                
            </header>


            <FormInputs />
            <div className="button-container">

                    <button type="button" className={`Button_1 ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

                    <button type="button" className={`Button_1 ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>

                    <button type="submit" className={`Button_1 ${submitHide}`}  disabled={!canSubmit}>Submit</button>
                </div>

        </form>
    )

    return content
}
export default Form