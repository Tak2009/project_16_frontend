export const SET_TICKETS = "SET_TICKETS"
export const ADD_TICKET = "ADD_TICKET"

export const addTicket = ticket => {
    return { type: ADD_TICKET, ticket };
};

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

export const createTicket = (ticket) => {
    return (dispatch) => {
        fetch("http://localhost:3000/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
        .then(resp => resp.json())
        .then(ticket => {
            console.log(ticket)
            dispatch(addTicket(ticket));
        });
    };
}