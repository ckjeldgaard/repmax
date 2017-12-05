import * as React from 'react';
import {ReactNode} from 'react';
import Header from './header/header';

export default class RepMaxApp extends React.Component {

    private readonly TITLE: string = 'RepMax';

    render(): ReactNode {
        return <div>
            <Header title={this.TITLE} />
        </div>;
    }
}