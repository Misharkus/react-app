export const dateFormat = (date) => {
    return Intl.DateTimeFormat("ua-Ua", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
}