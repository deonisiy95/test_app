export const loadState = () => {

    try {

        const serializedState = localStorage.getItem('state');
        if (serializedState) {
            return JSON.parse(serializedState);
        }
        return {is_authorized: false};

    } catch (err) {
        return {is_authorized: false};
    }
};

export const saveState = (state: {is_authorized: boolean}) => {

    try {

        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (error) {
        console.log('Error saving the store');
    }
};