export const SET_PUBS = "SET_PUBS"
export const ADD_PUB = "ADD_PUB"

export const addPub = pub => {
    return { type: ADD_PUB, pub };
};

export const setPubs = pubs => {
    return { type: SET_PUBS, pubs };
};

export const fetchPubs = () => {
    return (dispatch) => {
        fetch("https://local-pub-support-backend.herokuapp.com/pubs")
        .then(resp => resp.json())
        .then(pubs => {
            dispatch(setPubs(pubs));
        });
    };
}

export const createPub = (pub) => {
    return (dispatch) => {
        fetch("https://local-pub-support-backend.herokuapp.com/pubs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pub)
        })
        .then(resp => resp.json())
        .then(pub => {
            console.log(pub)
            dispatch(addPub(pub));
        });
    };
}