import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const formatDate = (date) => {
    const oneWeekAgo = Date.now() - (168 * 60 * 60 * 1000);
    if (date >= oneWeekAgo) {
        return dayjs(date).fromNow();
    }
    else {
        dayjs(date).format("h:mm a on M/D/YYYY");
        return dayjs(date).format("h:mm a on M/D/YYYY");
    }
};

export default formatDate;