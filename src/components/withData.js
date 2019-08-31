import React, { PureComponent } from 'react'

const withData = OriginalComponent => {
    class withData extends PureComponent {
        state = {
            data: void 0,
            error: void 0
        }

        fetchData = () => {
            let idx = Math.floor(Math.random() * 100) + 1;
            
            fetch(`https://jsonplaceholder.typicode.com/posts/${idx}`)
                .then(response => response.json())
                .then(data => this.setState({
                    data
                }))
                .catch(error => {
                    this.setState({
                        error
                    })
                })
        }

        componentDidMount() {
            this.fetchData();
        }

        render() {
            return (
                <>
                    {this.state.error ? `There was an error while fetching data ${this.state.error}` : <OriginalComponent {...this.props} data={this.state.data} fetchData={this.fetchData} />}
                </>
            )
        }
    }

    return withData;
}

export default withData;
