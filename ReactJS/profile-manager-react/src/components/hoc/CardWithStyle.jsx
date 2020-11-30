
import { Component, Fragment } from 'react';

const CardWithStyle = (Card) => {

    class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                styles: {
                    'backgroundColor': 'white',
                    'border': 'none'
                }
            }
            this.applyStyle= this.applyStyle.bind(this);
            this.removeStyle= this.removeStyle.bind(this);
        }

        applyStyle() {
            let styles = {
                'backgroundColor': 'lightyellow',
                'border': '1px solid black'
            }
            this.setState({ styles })
        }

        removeStyle() {
            let styles = {
                'backgroundColor': 'white',
                'border': 'none'
            }
            this.setState({ styles })
        }

        render() {
            let data = this.props.user;
            return (
                <Fragment>
                    <div style={this.state.styles} onMouseEnter={this.applyStyle} onMouseLeave={this.removeStyle}>
                        <Card user={data} />
                    </div>
                </Fragment>
            );
        }
    }

    return HOC;

}

export default CardWithStyle;