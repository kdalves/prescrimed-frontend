import React from 'react';
import { format } from "date-fns";

const formattedDate = (date) => {
    var newDate = new Date(date);
    return format(newDate, "dd/MM/yyyy");
}

export default formattedDate;