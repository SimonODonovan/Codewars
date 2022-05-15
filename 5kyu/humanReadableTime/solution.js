/*
    Human Readable Time
    
    Write a function, which takes a non-negative integer 
    (seconds) as input and returns the time in a human-readable 
    format (HH:MM:SS)
 */
function humanReadable(seconds) {
    const formatAs24Hour = (number) => (number < 10) ? `0${number}` : number;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds / 60) % 60);
    seconds = (seconds % 60);
    return `${formatAs24Hour(hours)}:${formatAs24Hour(minutes)}:${formatAs24Hour(seconds)}`;
}

module.exports = humanReadable;