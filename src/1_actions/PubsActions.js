export const SET_PUBS = "SET_PUBS"


export const setPubs = pubs => {
    return { type: SET_PUBS, pubs };
};

export const fetchPubs = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/pubs")
        .then(resp => resp.json())
        .then(pubs => {
            dispatch(setPubs(pubs));
        });
    };
}