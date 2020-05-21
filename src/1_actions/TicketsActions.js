export const SET_TICKETS = "SET_TICKETS"


export const setTickets = tickets => {
    return { type: SET_TICKETS, tickets };
};

export const fetchTickets = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/tickets")
        .then(resp => resp.json())
        .then(tickets => {
            dispatch(setTickets(tickets));
        });
    };
}