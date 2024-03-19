import moment from "moment";

// Format the date
  // export const formatDate = (dateString: string): string => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // };

  export const formatDate = (dateString: string) => {
    const currentDate = new Date(dateString);
    // Format the date using moment
    const formattedDate = moment(currentDate).format('MMMM Do YYYY, h:mm a');
    return formattedDate;
}