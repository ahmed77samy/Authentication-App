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
        if(this.props.onSubmit) {
            return this.props.onSubmit(values)
        }
        console.log(values)
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
