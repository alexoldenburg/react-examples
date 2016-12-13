define('todo/item', [ 'react' ], function ( React ) {

    return React.createClass({

        getInitialState() {

            return this.props;
        },

        /**
         * Uppercase the first character of the given name
         * @param name
         * @returns {string}
         */
        uc( name ) {

            return name.charAt(0).toUpperCase() + name.substring(1);

        },

        /**
         * Toggle the 'done'-state of the current item
         */
        toggleComplete() {

            this.setState({isDone: !this.state.isDone});
        },

        render() {

            const classNames = [
                'col-xs-12', 'item', 'label',
                (this.state.isDone) ? 'label-success' : 'label-default'
            ];

            return (
                <li className={classNames.join(' ')} onClick={this.toggleComplete}>
                    <label htmlFor={this.props.itemKey}>
                        <span>{this.uc(this.props.title)}</span>
                    </label>
                </li>
            );

        }

    });

});