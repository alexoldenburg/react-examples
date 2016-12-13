define('application', [ 'react', 'model', 'todo/list' ], function ( React, Model, List ) {

    return React.createClass({

        model: new Model('todos'),

        render() {

            return (
                <div>
                    <List model={this.model} />
                </div>
            );

        }

    });

});