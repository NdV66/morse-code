import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('translatorStore')
@observer
class TranslatorPage extends React.Component {
    render() {
        console.log(this.props.translatorStore);
        return <div>
            TEEEESST
        </div>;
    }
}

export default TranslatorPage;