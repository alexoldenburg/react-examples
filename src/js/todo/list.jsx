define('todo/list', [ 'react', 'todo/item' ], function ( React, Item ) {

    return React.createClass({

        getInitialState() {

            return {items: this.props.model.get()};

        },

        /**
         * Adding new items to the list
         * @param e (Event)
         */
        add(e) {
            e.preventDefault();

            // add new item
            const curItems = this.props.model.add({
                title: e.target.title.value,
                isDone: false
            });

            // notify about the new state
            this.setState({items: curItems});

            // reset input
            e.target.reset();

        },

        render() {

            const items = this.state.items.map(
                (item, index) => <Item
                        key={index}
                        itemKey={index}
                        title={item.title}
                        isDone={item.isDone}
                        onClick={this.toggleStatus}
                        />
            );

            return (
                <div className="container-fluid">

                    <div className="container-fluid page-header">
                        <h2>
                            Todo <br />
                            <small>Voeg items toe</small>
                        </h2>
                    </div>

                    <form className="todo-submition container-fluid" onSubmit={this.add}>
                        <input type="text" name="title" className="form-control" placeholder="Titel" />
                    </form>

                    <ul className="todoList container-fluid col-xs-12">
                        {items}
                    </ul>
                </div>
            );

        }

    });

});