import React from 'react';
import { Container } from 'reactstrap';
import createBiggerIcon from './BiggerIcon';

class DescriptionPanel extends React.Component {
    _createElement(key, content) {
        return <p {...key} dangerouslySetInnerHTML={{__html: content}} />;
    }

    _createParagraphs(texts) {
        const result = [];
        for(const key in texts) {
            const element = this._createElement(key, texts[key]);
            result.push(element);
        }
        return result;
    }

    render() {
        const cssClassName = `${this.props.className} base-top-bottom-padding`;
        const BiggerIcon = createBiggerIcon(this.props.icon);

        return <Container fluid id={this.props.id} className={cssClassName}>
            <h2 className='text-center mb-3'>
                {this.props.header}
            </h2>
            <div className='text-justify'>
                {this._createParagraphs(this.props.texts)}
            </div>
            <BiggerIcon className={this.props.iconClassName || ''} />
        </Container>;
    }
}

export default DescriptionPanel;