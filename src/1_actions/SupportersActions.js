export const SET_SUPPORTERS = "SET_SUPPORTERS"
export const ADD_SUPPORTER = "ADD_SUPPORTER"

export const addSupporter = pub => {
    return { type: ADD_PUB, pub };
};

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

export const createPub = (pub) => {
    return (dispatch) => {
        fetch("http://localhost:3000/pubs", {
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