
import { combineReducers } from "redux";
// import cuid from 'cuid';　// can not use this for ID as ID must be integer
// export const cuidFn = cuid;

import {
    
    SET_PUBS,
    ADD_PUB,
    
  } from "../1_actions/PubsActions";

  import {
    SET_TICKETS,
    // ADD_REVIEW,
    // SET_REVIEWS,
    // DELETE_REVIEW
  } from "../1_actions/TicketsActions";


const managePubs = (state = [], action) => {
    // console.log(action)
    switch(action.type) {
        case ADD_PUB:
            const pub = {
                name: action.pub.name,
                email: action.pub.email,
                phone: action.pub.phone,
                address: action.pub.address,
                postcode: action.pub.postcode,
                situation: action.pub.situation,
                message_to_supporters: action.pub.message_to_supporters,
                image_pic: action.pub.image_pic
            }
            // console.log(site)
            return [...state, pub]
            // return state.concat(site)
            // return { sites: state.sites.concat(site) }
            
        case SET_PUBS:
            console.log(action.pubs)
            return action.pubs;

            // console.log(action.sites.length)
            // return action.sites.length === 0 ? action.sites : action.sites.map(site => ({
            //     id: site.id, 
            //     id_number: site.id_numbe, 
            //     site:site.site, 
            //     http_url: site.http_url,
            //     short_description: site.short_description,
            //     states: site.states,
            //     reviews: site.reviews
            // }))
        
        // case DELETE_SITE:
        //     // debugger
        //     // console.log(action)
        //     return state.filter(site=> site.id !== action.id)

        default:
            return state
    }
};

const manageTickets = (state = [], action) => {
    // console.log(action)
    // debugger
    switch(action.type) {
        case SET_TICKETS:
                    return action.tickets;
        // case ADD_REVIEW:
        //     const review = {
        //         id: action.review.id,
        //         latinamerica_id: action.review.latinamerica_id,
        //         comment: action.review.comment,
        //         rating: action.review.rating
        //     }
        //     return [...state, review]
        // case DELETE_REVIEW:
        //     return state.filter(review => review.id !== action.id)
        default:
            return state
    }
};


const managePubsSupportersTickets = combineReducers({
    pubs: managePubs,
    tickets: manageTickets
});


export default managePubsSupportersTickets;