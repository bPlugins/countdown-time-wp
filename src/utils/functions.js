const minuteSeconds = 60;
const hourSeconds = 60 * 60;
const daySeconds = 24 * 60 * 60;

export const getDiff = time => time > new Date().getTime() ? (time - new Date().getTime()) / 1000 : 0;
export const getDays = time => Math.floor(time / daySeconds);
export const getHours = time => Math.floor((time % daySeconds) / hourSeconds);
export const getMinutes = time => Math.floor((time % hourSeconds) / minuteSeconds);
export const getSeconds = time => Math.floor(time % minuteSeconds);
export const getTwoFixed = value => value < 10 ? ('0' + value).slice(-2) : value;