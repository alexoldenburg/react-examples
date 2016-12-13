define("model", [], function () {

    return class {

        constructor( name ) {
            this.name = name;
        }

        get() {

            const items = localStorage.getItem( this.name );
            return (items && JSON.parse( items )) || [];
        }

        add( item) {

            if ( item ) {

                const items = this.get().concat( item );
                localStorage.setItem( this.name, JSON.stringify( items ) );
            }
            return this.get();
        }

    };

});