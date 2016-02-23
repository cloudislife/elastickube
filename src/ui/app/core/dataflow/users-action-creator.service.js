class UsersActionCreatorService {
    constructor(actions, dispatcher, usersAPI) {
        'ngInject';

        this._actions = actions;
        this._dispatcher = dispatcher;
        this._usersAPI = usersAPI;
    }

    subscribe() {
        this._dispatcher.dispatch({
            type: this._actions.USERS_SUBSCRIBE
        });

        return this._usersAPI.subscribe()
            .then((users) => {
                this._dispatcher.dispatch({
                    type: this._actions.USERS_SUBSCRIBED,
                    users
                });
            });
    }
}

export default UsersActionCreatorService;