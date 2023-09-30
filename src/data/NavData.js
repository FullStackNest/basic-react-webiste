import { cateringsPath, guestRoomsPath, onlineBookingPath, routePaths } from "../utils/routes";

// export const NAV_DATA = [
//     {
//         id: 1,
//         to: routePaths.allServicesSubPages.replace(':subPageId', onlineBookingPath),
//         linkName: 'Online Booking'
//     },
//     {
//         id: 2,
//         to: routePaths.allServicesSubPages.replace(':subPageId', cateringsPath),
//         linkName: 'Catering'
//     },
//     {
//         id: 3,
//         to: routePaths.allServicesSubPages.replace(':subPageId', guestRoomsPath),
//         linkName: 'Guest Rooms'
//     },
// ]

function replaceNavItem(pathName) {
    return routePaths.allServicesSubPages.replace(':subPageId', pathName);
}


export const NAV_DATA = [
    {
        id: 1,
        to: replaceNavItem(onlineBookingPath),
        linkName: 'Online Booking'
    },
    {
        id: 2,
        to: replaceNavItem(cateringsPath),
        linkName: 'Catering'
    },
    {
        id: 3,
        to: replaceNavItem(guestRoomsPath),
        linkName: 'Guest Rooms'
    },
]