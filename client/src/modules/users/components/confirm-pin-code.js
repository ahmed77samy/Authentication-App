import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import "./styles/confirm-pin-code.scss"
import Layout from "../../../shared/components/layout";
import FromInput from "../../../shared/components/form-input";
import Form from "../../../shared/components/form";
import { Link } from "react-router-dom";
import UserApi from "../Api/Api"

class confirmPinCode extends AppComponent {
    state={
        errors: {
            pincode: true
        }
    }
    init() {
        title("Confirm Pin App")
        description("Confirm Pin App With React Js")
    }

    /**
     * set the errors to the state
     * @param {Object} values 
     */
    validate(values) {
        for (const key in values) {
            this.set(`errors.${key}` , values[key])
        }
    }

    /**
     * custom submit to axios request
     * handle btn submit
     * @param {Object} values 
     * @param {React.element} submitBtn 
     */
    confirmPin(values, submitBtn) {
        UserApi.confirmPin("/confirmPincode", values)
        .then(({data}) => {
            submitBtn.classList.remove("disabled")
            this.props.history.push("/resetpassword")
        })
        .catch(err => {
            console.log(err.response);
            submitBtn.classList.remove("disabled")
            this.set("errors.pincode" , "verification code Invalid")
        })
    }


    render() {
        let {pincode} = this.state.errors
        return(
            <Layout>
                <div id="reset__password__page">
                    <h1>verification step</h1>
                    <p>Enter your email and check a verification code.</p>
                    <Form initValues={['pincode']} onSubmit={this.confirmPin.bind(this)}>
                        <FromInput 
                            type="text" 
                            placeholder="verification code" 
                            name="pincode"
                            onValidate={this.validate.bind(this)}
                            errors={pincode}
                            required
                            validate 
                        />
                        <button disabled={pincode} name="submit">verify code</button>
                        <p>back to <Link to="/preresetpassword">another email</Link></p>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default confirmPinCode