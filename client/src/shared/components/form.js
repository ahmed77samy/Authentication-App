import AppComponent from "../../core/component/App.component";

class Form extends AppComponent {
    /**
     * check if the input has custom onSubmit
     * send values or .log it
     * @param {events} e 
     * @returns {Function}
     */
    handleSubmit(e) {
        e.preventDefault()
        let values = {}
        this.props.initValues.map(name => {
            values[name] = e.target[name].value
            return false
        })
        e.target.submit.classList.add("disabled")
        if(this.props.onSubmit) {
            let submitBtn = e.target.submit
            return this.props.onSubmit(values , submitBtn)
        }
        setTimeout(() => {
            e.target.submit.classList.remove("disabled")
            console.log(values)
        }, 1000);
    }
    render() {
        return (
            <form noValidate onSubmit={this.handleSubmit.bind(this)}>
                {this.props.children}
            </form>
        )
    }
}

export default Form
