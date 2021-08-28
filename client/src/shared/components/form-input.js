import AppComponent from "../../core/component/App.component";
import {Is} from "@flk/supportive-is"
import {Obj} from "reinforcements"

class FromInput extends AppComponent {
    /**
     * check if the input has custom onChange
     * check if the input is needed the validation
     * send errors to validate data
     * @param {events} e 
     * @returns {Function}
     */
    validation(e) {
        let password = this.props.password || 'password'
        let errors = {}
        if(this.props.onChange) {
            return this.props.onChange()
        }
        if(this.props.validate) {
            // reset errors
            Obj.set(errors, e.target.name , null)
            // validate required
            this.props.required &&  Is.empty((e.target.value)) &&
            Obj.set(errors, e.target.name , "this filed is required")
            // validate email valid
            this.props.type === "email" && !Is.empty((e.target.value)) && !Is.email(e.target.value) &&
            Obj.set(errors, `${e.target.name}` , "this filed is invalid")
            // validate password
            if(this.props.type === "password" && this.props.name === password) {
                e.target.closest("form").password_confirmation?.value !== e.target.value ?
                Obj.set(errors, `password_confirmation` , "this filed is not matched with password") : Obj.set(errors, `password_confirmation` , null)
            }
            // validate password_confirmation
            this.props.type === "password" && this.props.name === "password_confirmation" && e.target.closest("form")[password].value !== e.target.value &&
            Obj.set(errors, `${e.target.name}` , "this filed is not matched with password")
            
            this.props.onValidate(errors)
        }
    }
    render() {
        let {type, name, placeholder, required} = this.props
        return(
            <div className="form__group">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    onChange={this.validation.bind(this)}
                />
                {
                    this.props.errors && <label>{this.props.errors}</label>
                }
            </div>
        )
    }
}

export default FromInput