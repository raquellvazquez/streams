import React, { Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/index';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delte the stream with title: ${this.props.stream.title}`
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui negative button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        )
    }

    render() {
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);